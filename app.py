"""Wire Antenna Gain Pattern Visualizer — Dash Application."""

from dash import Dash, dcc, html, callback, Output, Input

from antenna_simulation import compute_gain_pattern, SPEED_OF_LIGHT
from pattern_plotting import create_3d_gain_figure


FREQ_MIN_MHZ = 500
FREQ_MAX_MHZ = 7000
FREQ_STEP_MHZ = 50
LENGTH_MIN_CM = 1
LENGTH_MAX_CM = 60
LENGTH_STEP_CM = 1

# Frequency slider marks at round GHz values
freq_marks = {int(f): f"{f/1000:.0f} GHz" for f in range(1000, 7001, 1000)}
freq_marks[500] = "0.5"

# Length slider marks every 10 cm
length_marks = {i: f"{i} cm" for i in range(0, 61, 10)}
length_marks[1] = "1 cm"

info_style = {
    'display': 'inline-block', 'padding': '8px 16px', 'margin': '4px',
    'backgroundColor': '#f0f0f0', 'borderRadius': '6px',
    'fontFamily': 'monospace', 'fontSize': '14px',
}

app = Dash(__name__)
app.title = "Wire Antenna Gain"

app.layout = html.Div([
    html.H2("Straight Wire Antenna Gain Pattern",
            style={'textAlign': 'center', 'marginBottom': '5px',
                   'fontFamily': 'sans-serif'}),
    html.P("NEC2 Method of Moments  |  Copper Wire  |  50\u03a9 Feed",
           style={'textAlign': 'center', 'color': '#666',
                  'marginTop': '0', 'fontFamily': 'sans-serif'}),

    html.Div([
        html.Div([
            html.Label("Frequency",
                       style={'fontWeight': 'bold', 'fontFamily': 'sans-serif'}),
            dcc.Slider(
                id='freq-slider',
                min=FREQ_MIN_MHZ,
                max=FREQ_MAX_MHZ,
                step=FREQ_STEP_MHZ,
                value=600,
                marks=freq_marks,
                tooltip={'placement': 'bottom',
                         'template': '{value} MHz'},
            ),
        ], style={'width': '48%', 'display': 'inline-block',
                  'verticalAlign': 'top', 'padding': '0 1%'}),

        html.Div([
            html.Label("Wire Length",
                       style={'fontWeight': 'bold', 'fontFamily': 'sans-serif'}),
            dcc.Slider(
                id='length-slider',
                min=LENGTH_MIN_CM,
                max=LENGTH_MAX_CM,
                step=LENGTH_STEP_CM,
                value=25,
                marks=length_marks,
                tooltip={'placement': 'bottom',
                         'template': '{value} cm'},
            ),
        ], style={'width': '48%', 'display': 'inline-block',
                  'verticalAlign': 'top', 'padding': '0 1%'}),
    ], style={'padding': '10px 20px'}),

    # Info panel
    html.Div(id='info-panel',
             style={'textAlign': 'center', 'padding': '5px 20px'}),

    dcc.Loading(
        id='loading',
        type='circle',
        children=[
            dcc.Graph(
                id='gain-plot',
                style={'height': '75vh'},
                config={'scrollZoom': True},
            ),
        ],
    ),
], style={'maxWidth': '1400px', 'margin': '0 auto'})


@callback(
    Output('gain-plot', 'figure'),
    Output('info-panel', 'children'),
    Input('freq-slider', 'value'),
    Input('length-slider', 'value'),
)
def update_pattern(freq_mhz, length_cm):
    freq_hz = freq_mhz * 1e6
    wire_length_m = length_cm / 100.0
    wavelength = SPEED_OF_LIGHT / freq_hz
    l_over_lambda = wire_length_m / wavelength

    result = compute_gain_pattern(freq_hz, wire_length_m)

    fig = create_3d_gain_figure(
        result['theta_deg'], result['phi_deg'],
        result['realized_gain_dbi'],
        freq_hz, wire_length_m,
    )

    # Format impedance
    z_r = result['impedance_real']
    z_i = result['impedance_imag']
    sign = '+' if z_i >= 0 else '-'
    z_str = f"Z = {z_r:.1f} {sign} j{abs(z_i):.1f} \u03a9"

    max_realized = result['realized_gain_dbi'].max()
    mismatch = result['mismatch_loss_db']
    vswr = result['vswr']

    info = html.Div([
        html.Span(f"L/\u03bb = {l_over_lambda:.3f}", style=info_style),
        html.Span(z_str, style=info_style),
        html.Span(f"VSWR = {vswr:.1f}:1" if vswr < 100 else "VSWR > 100:1",
                  style=info_style),
        html.Span(f"Mismatch Loss = {mismatch:.1f} dB", style=info_style),
        html.Span(f"Max Realized Gain = {max_realized:.1f} dBi", style=info_style),
    ])

    return fig, info


if __name__ == '__main__':
    app.run(debug=True)
