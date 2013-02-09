dojo.declare("LicensePage", wm.Page, {
start: function() {
},
"preferredDevice": "phone",
agreeButtonClick: function(inSender) {
dojo.cookie("licenseAgreed", true);
},
_end: 0
});

LicensePage.widgets = {
onAgreeButtonClick: ["wm.Property", {"isEvent":true,"property":"agreeButton.onclick","type":"string"}, {}],
notificationCall1: ["wm.NotificationCall", {}, {}, {
input: ["wm.ServiceInput", {"type":"alertInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"We are very sorry to hear that.  Should you change your mind at some point in the future, please come back and agree to this license.\"","targetProperty":"text"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
diagnosisPanel: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
drGenusPicturePanel2: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
drGenusPicture2: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
}],
panel1: ["wm.Panel", {"_classes":{"domNode":["LicenseBlock"]},"border":"2","borderColor":"#808385","height":"100%","horizontalAlign":"left","margin":"10","verticalAlign":"top","width":"100%"}, {}, {
dispositionHtml: ["wm.Html", {"_classes":{"domNode":["LicenseText"]},"borderColor":"","height":"100%","html":"resources/htmlcontent/license.html","padding":"12","styles":{"backgroundColor":""}}, {}],
panel2: ["wm.Panel", {"border":"1,0,0,0","borderColor":"#8f8f8f","height":"48px","horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
agreeButton: ["wm.Button", {"_classes":{"domNode":["SubmitButton"]},"caption":"Agree","height":"40px","margin":"4,8","width":"120px"}, {"onclick":"agreeButtonClick"}],
disagreeButton: ["wm.Button", {"caption":"Disagree","height":"40px","margin":"4,8","width":"120px"}, {"onclick":"notificationCall1"}]
}]
}]
}]
}]
};

LicensePage.prototype._cssText = '.LicenseText h1 {\
font-size: 18px;\
font-weight: bold;\
margin: 0px 0px 8px 0px;\
}\
.LicenseText {\
font-size: 14px;\
font-weight: bold;\
color: white;\
}\
.LicenseBlock {\
border-radius: 16px;\
-webkit-border-radius: 16px;\
background-color: #575757;\
-webkit-box-shadow: 4px 4px 15px #222;\
-moz-box-shadow: 4px 4px 15px #222;\
box-shadow: 4px 4px 15px #222;\
}\
';
LicensePage.prototype._htmlText = '';