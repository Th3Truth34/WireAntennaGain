# Wire Antenna Gain Pattern Visualizer

Interactive 3D visualization of straight wire antenna radiation patterns using the NEC2 Method of Moments engine.

## Setup

```bash
python3 -m venv venv
source venv/bin/activate
pip install numpy
pip install -r requirements.txt
```

> **Note:** `numpy` must be installed first as `necpp` requires it at build time.

## Run

```bash
source venv/bin/activate
python app.py
```

Open http://127.0.0.1:8050 in your browser.

## Controls

- **Frequency slider:** 500 MHz to 7 GHz
- **Wire length slider:** 1 cm to 60 cm
- **3D plot:** Click and drag to rotate, scroll to zoom, hover for gain values
