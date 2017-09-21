#target photoshop

var doc = activeDocument;
var cLay = doc.activeLayer;
var layNum;

var aLay = new Array(doc.layers.length);

for(var i=0; i < doc.layers.length; i++) {
    aLay[i] = doc.layers[i].name;
    if(aLay[i] == cLay.name) { layNum = i }
    };

if(doc.layers[layNum-1].name.indexOf("Layer") >= 0) {
        doc.activeLayer.visible = false;
        doc.activeLayer = doc.layers[layNum-1];
        doc.activeLayer.visible = true;
        }