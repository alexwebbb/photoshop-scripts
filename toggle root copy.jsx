#target photoshop

var rootCopy = doc.layers[doc.layers.length-2];

if(rootCopy.name.match("root copy")) {
    rootCopy.visible = !rootCopy.visible;
}