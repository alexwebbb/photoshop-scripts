#target photoshop

var doc = activeDocument;
var layNum;
var layerParent = doc.activeLayer.parent;
var itIsAParent = false;

if ( layerParent !== doc ) itIsAParent = true;
    
for (var i = doc.layers.length - 1; i >= 0; i--) {
    if(doc.layers[i].name.match((itIsAParent ? doc.activeLayer.parent.name : doc.activeLayer.name))) {
        layNum = i;
        break;
    }
}

if(!doc.layers[layNum+1].name.match("root")) {

    (itIsAParent ? doc.activeLayer.parent : doc.activeLayer).visible = false;

    if(itIsAParent) {
    	doc.activeLayer = doc.layers[layNum+1].layers[1];
    	doc.activeLayer.parent.visible = true;
    } else {
    	doc.activeLayer = doc.layers[layNum+1];
    	doc.activeLayer.visible = true;
    }

    doc.activeLayer.pixelsLocked = false;
} 