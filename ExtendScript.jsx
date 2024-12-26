// Function to extract tracking data for a layer
function extractTrackingData(layer) {
    var trackingData = [];
    var properties = ['position', 'rotation', 'scale', 'skew', 'skewAxis', 'anchorPoint'];

    for (var p = 0; p < properties.length; p++) {
        var propertyName = properties[p];
        var property = layer[propertyName];

        if (property && property.numKeys > 0) {
            for (var i = 1; i <= property.numKeys; i++) {
                var keyTime = property.keyTime(i);
                var keyValue = property.valueAtTime(keyTime, true);

                // Find or create a keyframe entry
                var keyframe = trackingData.find(function(k) {
                    return k.time === keyTime;
                });

                if (!keyframe) {
                    keyframe = { time: keyTime };
                    trackingData.push(keyframe);
                }

                keyframe[propertyName] = keyValue;
            }
        }
    }
    return trackingData;
}

// Main function to export data
function exportTrackingData() {
    if (!app.project.activeItem || !(app.project.activeItem instanceof CompItem)) {
        alert("Please select a composition.");
        return;
    }

    var comp = app.project.activeItem;
    var selectedLayers = comp.selectedLayers;

    if (selectedLayers.length === 0) {
        alert("Please select at least one layer.");
        return;
    }

    var jsonData = {};

    for (var i = 0; i < selectedLayers.length; i++) {
        var layer = selectedLayers[i];
        jsonData[layer.name] = extractTrackingData(layer);
    }

    var saveFile = File.saveDialog("Save Tracking Data as JSON", "*.json");
    if (saveFile) {
        saveFile.open("w");
        saveFile.write(JSON.stringify(jsonData, null, 4));
        saveFile.close();
        alert("Tracking data exported successfully.");
    }
}

exportTrackingData();
