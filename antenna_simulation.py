"""NEC2-based straight wire antenna simulation using necpp."""

import math
import numpy as np
import necpp


SPEED_OF_LIGHT = 299792458.0  # m/s
COPPER_CONDUCTIVITY = 5.8e7   # S/m
Z0 = 50.0                     # Reference impedance (ohms)


def compute_gain_pattern(freq_hz, wire_length_m, wire_radius_m=0.001,
                         n_theta=91, n_phi=72):
    """Compute the 3D gain pattern of a center-fed straight wire antenna.

    Includes copper ohmic losses and 50-ohm mismatch loss for realized gain.

    Args:
        freq_hz: Frequency in Hz.
        wire_length_m: Total wire length in meters.
        wire_radius_m: Wire radius in meters.
        n_theta: Number of theta (elevation) points from 0 to 180 degrees.
        n_phi: Number of phi (azimuth) points from 0 to 360 degrees.

    Returns:
        dict with keys:
            theta_deg: 1D array of theta values in degrees (n_theta,).
            phi_deg: 1D array of phi values in degrees (n_phi,).
            gain_dbi: 2D array of gain in dBi with copper losses (n_theta, n_phi).
            realized_gain_dbi: 2D array of realized gain in dBi (n_theta, n_phi).
            impedance_real: Feed point resistance (ohms).
            impedance_imag: Feed point reactance (ohms).
            mismatch_loss_db: Mismatch loss relative to 50 ohms (dB, negative).
            vswr: Voltage standing wave ratio.
    """
    freq_mhz = freq_hz / 1e6
    wavelength = SPEED_OF_LIGHT / freq_hz
    half_length = wire_length_m / 2.0

    # Auto-segment: segment length <= lambda/10, min 5, max 200
    seg_length_target = wavelength / 10.0
    n_segments = max(5, min(200, math.ceil(wire_length_m / seg_length_target)))

    # Ensure odd number of segments so there's a center segment
    if n_segments % 2 == 0:
        n_segments += 1

    center_segment = (n_segments + 1) // 2

    # Ensure segment-to-radius ratio >= 8
    seg_length = wire_length_m / n_segments
    if seg_length / wire_radius_m < 8:
        wire_radius_m = seg_length / 8.0

    # Theta/phi stepping
    theta_step = 180.0 / (n_theta - 1) if n_theta > 1 else 180.0
    phi_step = 360.0 / n_phi  # phi goes 0 to 360-step (full circle)

    nec = necpp.nec_create()
    try:
        # Wire along z-axis from -L/2 to +L/2
        necpp.nec_wire(nec, 1, n_segments,
                       0.0, 0.0, -half_length,
                       0.0, 0.0, half_length,
                       wire_radius_m, 1.0, 1.0)

        necpp.nec_geometry_complete(nec, 0)

        # Set copper conductivity on all segments of wire 1
        necpp.nec_ld_card(nec, 5, 1, 0, 0, COPPER_CONDUCTIVITY, 0.0, 0.0)

        # Voltage source at center segment
        necpp.nec_ex_card(nec, 0, 1, center_segment, 0,
                          1.0, 0.0, 0.0, 0.0, 0.0, 0.0)

        # Set frequency
        necpp.nec_fr_card(nec, 0, 1, freq_mhz, 0.0)

        # Request radiation pattern
        necpp.nec_rp_card(nec, 0, n_theta, n_phi, 0, 5, 0, 0,
                          0.0, 0.0, theta_step, phi_step, 0.0, 0.0)

        # Extract gain values (includes copper losses)
        gain_dbi = np.zeros((n_theta, n_phi))
        for i_theta in range(n_theta):
            for i_phi in range(n_phi):
                gain_dbi[i_theta, i_phi] = necpp.nec_gain(nec, 0, i_theta, i_phi)

        # Extract feed point impedance
        z_real = necpp.nec_impedance_real(nec, 0)
        z_imag = necpp.nec_impedance_imag(nec, 0)

        theta_deg = np.linspace(0, 180, n_theta)
        phi_deg = np.linspace(0, 360 - phi_step, n_phi)

    finally:
        necpp.nec_delete(nec)

    # Compute mismatch loss relative to 50 ohms
    z_ant = complex(z_real, z_imag)
    gamma = (z_ant - Z0) / (z_ant + Z0)
    gamma_mag_sq = abs(gamma) ** 2
    if gamma_mag_sq >= 1.0:
        mismatch_loss_db = -60.0  # Cap at -60 dB for total mismatch
    else:
        mismatch_loss_db = 10.0 * np.log10(1.0 - gamma_mag_sq)

    # VSWR
    gamma_mag = abs(gamma)
    if gamma_mag >= 1.0:
        vswr = 999.0
    else:
        vswr = (1.0 + gamma_mag) / (1.0 - gamma_mag)

    # Realized gain = gain (with copper losses) + mismatch loss
    realized_gain_dbi = gain_dbi + mismatch_loss_db

    return {
        'theta_deg': theta_deg,
        'phi_deg': phi_deg,
        'gain_dbi': gain_dbi,
        'realized_gain_dbi': realized_gain_dbi,
        'impedance_real': z_real,
        'impedance_imag': z_imag,
        'mismatch_loss_db': mismatch_loss_db,
        'vswr': vswr,
    }
