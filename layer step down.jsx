#target photoshop

var doc = activeDocument;
var layNum;
var layerParent = doc.activeLayer.parent;
var itIsAParent = false;

if ( layerParent !== doc ) itIsAParent = true;
    
// here we just identify what index the active layer or layer group is in its parent
for (var i = doc.layers.length - 1; i >= 0; i--) {
    if(doc.layers[i] === (itIsAParent ? doc.activeLayer.parent : doc.activeLayer)) {
        layNum = i;
        break;
    }
}

// keep us from descending to root, which should only be accessed manually
if(!doc.layers[layNum+1].name.match("root")) {

    // in standard cs6 style, block undo calls from allowing me to return to prior layer accidentally
    doc.activeLayer.pixelsLocked = true;

    // want two different behaviors based on whether document is a series of folders or just artboards
    if(itIsAParent) {

        doc.activeLayer.parent.visible = false;

        // this if switch is just here to recenter the view when there are four or more elements
        if(doc.layers[layNum+1].layers.length > 3) {
            doc.activeLayer = doc.layers[layNum+1].layers[3];  
        }

        // here we return to the active layer, which in my scheme is the second layer from the top
    	doc.activeLayer = doc.layers[layNum+1].layers[1];
    	doc.activeLayer.parent.visible = true;
        
    } else {

        doc.activeLayer.visible = false;

        // this case is for the scenario where it is just artboards... a standard notepad
    	doc.activeLayer = doc.layers[layNum+1];
    	doc.activeLayer.visible = true;
    }

    // unlock the layer we are moving to
    doc.activeLayer.pixelsLocked = false;
} 