#target photoshop

var doc = activeDocument;
var layNum;

var aLay = new Array(doc.layers.length);

for(var i=0; i < doc.layers.length; i++) {
	// get the name for that layer and 
	// assign to equivalent position in the array
    aLay[i] = doc.layers[i].name;
    // if layer is active one it gets stored as the current layer
    if(aLay[i] == doc.activeLayer.parent.name) { layNum = i }
};

if(doc.layers[layNum+1].name.indexOf("Layer") >= 0) {


	var layerParent = doc.activeLayer.parent;
	if ( layerParent !== doc ) doc.activeLayer = layerParent;

    doc.activeLayer.parent.visible = false;
    doc.activeLayer = doc.layers[layNum+1].layers[0];
    doc.activeLayer.parent.visible = true;
};