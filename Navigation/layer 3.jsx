#target photoshop

var doc = activeDocument;
var layers = doc.activeLayer.parent.layers;


doc.activeLayer.pixelsLocked = true;

for (var i = layers.length - 1; i >= 0; i--) {
    if(layers[i].name.match("Layer 3")) {

    	doc.activeLayer = layers[i];
    	layers[i].pixelsLocked = false;
    	break;
    }
}