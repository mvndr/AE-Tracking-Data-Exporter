# After Effects Tracking Data Export Script

## Overview
This script exports tracking data from selected layers in an After Effects composition into a structured JSON file. The exported data includes:

- Position
- Rotation
- Scale
- Skew
- Skew Axis
- Anchor Point

## Features
- Captures keyframe-based transformations.
- Outputs data in a JSON format for easy integration into external applications.
- Handles multiple layers and properties.

## Requirements
- Adobe After Effects (any version that supports ExtendScript).

## Usage
1. Open the After Effects project and select the desired composition.
2. Select the layers from which you want to export tracking data.
3. Run the script:
   - Go to `File > Scripts > Run Script File...`.
   - Select the `.jsx` file.
4. Choose a save location for the JSON file when prompted.
5. The JSON file will contain all the tracking data for the selected layers.

## Example Output
Refer to the `example.json` file included in this repository for a sample output.

## Troubleshooting
- Ensure the composition and layers are selected before running the script.
- If no keyframes are found, ensure the layers have tracking data.
