dojo.declare("NotImplementedPage", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
_end: 0
});

NotImplementedPage.widgets = {
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel3: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
drGenusPicturePanel3: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
drGenusPicture3: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
}],
questionLabelPanel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
questionLabelPanel6: ["wm.Panel", {"fitToContentHeight":true,"height":"160px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
upArrow2: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
dispositionLabel3: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","height":"134px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"<p>I'm sorry Dave. I'm afraid I can't do that. </p><p>Perhaps you'd care to visit one of the completed sections of this app instead?</p>\"","targetProperty":"caption"}, {}]
}]
}]
}]
}]
}]
}]
};

NotImplementedPage.prototype._cssText = '';
NotImplementedPage.prototype._htmlText = '';