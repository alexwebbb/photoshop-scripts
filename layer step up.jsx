#target photoshop

var doc = activeDocument;
var layNum;

var aLay = new Array(doc.layers.length);
var layerParent = doc.activeLayer.parent;

var itIsAParent = false;

if ( layerParent !== doc ) {
	doc.activeLayer = layerParent;
	itIsAParent = true;
}
	
for(var i=0; i < doc.layers.length; i++) {
	// get the name for that layer and 
	// assign to equivalent position in the array
    aLay[i] = doc.layers[i].name;
    // if layer is active one it gets stored as the current layer
    if(aLay[i] == doc.activeLayer.name) { layNum = i }
};

if(doc.layers[layNum-1].name.indexOf("Layer") >= 0) {

    doc.activeLayer.visible = false;

    if(itIsAParent) {
    	doc.activeLayer = doc.layers[layNum-1].layers[0];
    	doc.activeLayer.parent.visible = true;
    } else {
    	doc.activeLayer = doc.layers[layNum-1];
    	doc.activeLayer.visible = true;
    }
    
};