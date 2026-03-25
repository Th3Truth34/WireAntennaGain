"""3D antenna radiation pattern visualization using Plotly."""

import numpy as np
import plotly.graph_objects as go


GAIN_FLOOR_DBI = -40.0  # Minimum gain for plotting (avoids degenerate geometry)


def create_3d_gain_figure(theta_deg, phi_deg, gain_dbi,
                          freq_hz, wire_length_m):
    """Create an interactive 3D surface plot of the antenna gain pattern.

    Args:
        theta_deg: 1D array of theta values in degrees.
        phi_deg: 1D array of phi values in degrees.
        gain_dbi: 2D array of realized gain in dBi (n_theta, n_phi).
        freq_hz: Frequency in Hz (for display).
        wire_length_m: Wire length in meters (for display).

    Returns:
        Plotly Figure object.
    """
    wavelength = 299792458.0 / freq_hz
    l_over_lambda = wire_length_m / wavelength
    max_gain = np.max(gain_dbi)

    # Clamp gain for radius and color
    gain_clamped = np.maximum(gain_dbi, GAIN_FLOOR_DBI)

    # Convert to linear scale for the radius
    # Shift so the minimum maps to a small positive radius
    gain_shifted = gain_clamped - GAIN_FLOOR_DBI  # Now 0 to (max - floor)
    r = 10.0 ** (gain_shifted / 20.0)  # Use 20 for smoother visual scaling

    # Close the surface in phi by appending the first phi column
    phi_closed = np.append(phi_deg, 360.0)
    r_closed = np.column_stack([r, r[:, 0:1]])
    gain_color = np.column_stack([gain_clamped, gain_clamped[:, 0:1]])

    # Create meshgrid
    theta_rad = np.radians(theta_deg)
    phi_rad = np.radians(phi_closed)
    THETA, PHI = np.meshgrid(theta_rad, phi_rad, indexing='ij')

    # Spherical to Cartesian
    X = r_closed * np.sin(THETA) * np.cos(PHI)
    Y = r_closed * np.sin(THETA) * np.sin(PHI)
    Z = r_closed * np.cos(THETA)

    # Build hover text
    theta_grid = np.meshgrid(theta_deg, phi_closed, indexing='ij')[0]
    phi_grid = np.meshgrid(theta_deg, phi_closed, indexing='ij')[1]
    hover_text = np.array([
        [f"\u03b8={theta_grid[i,j]:.1f}\u00b0  \u03c6={phi_grid[i,j]:.1f}\u00b0<br>Gain: {gain_color[i,j]:.1f} dBi"
         + (" (null)" if gain_color[i,j] <= GAIN_FLOOR_DBI else "")
         for j in range(gain_color.shape[1])]
        for i in range(gain_color.shape[0])
    ])

    fig = go.Figure(data=[go.Surface(
        x=X, y=Y, z=Z,
        surfacecolor=gain_color,
        colorscale='Hot',
        colorbar=dict(title='Gain (dBi)', thickness=15, len=0.6),
        hovertext=hover_text,
        hoverinfo='text',
        lighting=dict(ambient=0.6, diffuse=0.5, specular=0.2),
    )])

    freq_ghz = freq_hz / 1e9
    length_cm = wire_length_m * 100

    fig.update_layout(
        title=dict(
            text=(f"Realized Gain Pattern  |  {freq_ghz:.2f} GHz  |  "
                  f"L = {length_cm:.0f} cm  |  "
                  f"L/\u03bb = {l_over_lambda:.2f}  |  "
                  f"Max Realized Gain = {max_gain:.1f} dBi"),
            x=0.5,
            font=dict(size=14),
        ),
        scene=dict(
            xaxis=dict(title='X', showbackground=False),
            yaxis=dict(title='Y', showbackground=False),
            zaxis=dict(title='Z (wire axis)', showbackground=False),
            aspectmode='data',
            camera=dict(eye=dict(x=1.5, y=1.5, z=0.8)),
        ),
        margin=dict(l=0, r=0, t=50, b=0),
        uirevision='constant',  # Preserve camera on updates
    )

    return fig
