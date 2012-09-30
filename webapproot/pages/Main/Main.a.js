dojo.declare("Main", wm.Page, {
"preferredDevice": "phone",
start: function() {
if (wm.device == "desktop") {
window.location.search = djConfig.isDebug ? "?debug&wmmobile=tablet" : "?wmmobile=tablet";
}
},
logoutButtonClick: function(inSender) {
app.phonegapCredentialsVar.setData(null);
this.pageContainer1.setPageName("LoginPage");
},
registerButtonClick: function(inSender) {
var page = wm.Page.getPage("LoginPage");
if (page) page.showRegistrationForm();
},
pageContainer1PageChanged: function(inSender, inNewPage, inPreviousPage) {
if (inNewPage.name == "LoginPage") {
this.registerButton.show();
this.logoutButton.hide();
} else {
this.registerButton.hide();
this.logoutButton.show();
}
},
backButtonClick: function(inSender) {
if (this.endLayer.isActive()) {
this.mainMenuLayer.activate();
} else if (app.historyVar.getCount() > 2) {
this.pageContainer1.page.priorQuestion();
} else {
this.mainMenuLayer.activate();
}
},
layers1Change: function(inSender, inIndex) {
this.backButton.setDisabled(inIndex === 0);
},
endLayerShow: function(inSender) {
var diagnosisId;
for (var i = app.historyVar.getCount() -1; !diagnosisId && i >= 0; i--) {
diagnosisId = app.historyVar.getItem(i).getValue("actionCode");
}
var item = app.diagnosisVar.query({name: diagnosisId});
this.endHtml.setHtml("<div class='Complaint'>Complaint: " + this.mainMenuList.selectedItem.getValue("name") + "</div><hr/><div class='Diagnosis'>" + item.getValue("dataValue") + "</div>");
},
mainMenuListSelect: function(inSender, inItem) {
var json = wm.load("resources/data/" + inSender.selectedItem.getValue("dataValue") + ".js");
app.decisionTreeVar.setData(dojo.fromJson(json));
this.questionsLayer.update();
},
_end: 0
});

Main.widgets = {
mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Cough\",\"dataValue\":\"cough\"},{\"name\":\"Cut Wound\",\"dataValue\":\"cut\"},{\"name\":\"Sore Throat\",\"dataValue\":\"throat\"}]","type":"EntryData"}, {}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["layoutBox1"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
appTitlePanel: ["wm.Panel", {"_classes":{"domNode":["appTitle"]},"border":"0,0,1,0","borderColor":"#000000","desktopHeight":"37px","enableTouchHeight":true,"height":"49px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"49px","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#448f26","endColor":"#56d524","colorStop":87}},"verticalAlign":"top","width":"100%"}, {}, {
backButton: ["wm.MobileIconButton", {"border":"0","direction":"back","height":"100%","width":"71px"}, {"onclick":"backButtonClick"}],
spacer2: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
picture2: ["wm.Picture", {"aspect":"h","height":"48px","source":"resources/images/logos/mediumlogo.png","width":"48px"}, {}],
spacer1: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
logoutButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Logout","height":"100%","padding":"4","width":"60px"}, {"onclick":"logoutButtonClick"}],
registerButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Register","height":"100%","padding":"4","width":"60px"}, {"onclick":"registerButtonClick"}]
}],
layers1: ["wm.Layers", {}, {"onchange":"layers1Change"}, {
loginLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"LoginPage","subpageEventlist":{"onParseLoginSVarSuccess":"parseLoginSVar.onSuccess"},"subpageMethodlist":{},"subpageProplist":{}}, {"onParseLoginSVarSuccess":"mainMenuLayer"}]
}],
mainMenuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"mainMenuListSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
questionsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"QuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainer1PageChanged"}]
}],
endLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"endLayerShow"}, {
picture1: ["wm.Picture", {"height":"59px","source":"resources/images/doctorcroppedsmall.png","width":"55px"}, {}],
endHtmlPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10","verticalAlign":"top","width":"100%"}, {}, {
endHtml: ["wm.Html", {"_classes":{"domNode":["Question","curvedlist","NoSizeNode"]},"autoScroll":false,"autoSizeHeight":true,"height":"59px","html":"You suck\n<hr/>\nI suck more","minDesktopHeight":15}, {}]
}]
}]
}],
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"_classes":{"domNode":["NoRadius"]},"height":"68px","horizontalAlign":"left","mobileHeight":"68px","styles":{"fontSize":""},"verticalAlign":"top"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"button1","targetProperty":"currentButton"}, {}]
}],
button4: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}],
button1: ["wm.Button", {"_classes":{"domNode":["BottomButton","button1","button1"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/stethascope.png'/><br/>Exam Room","height":"100%","margin":"0","styles":{"fontSize":"","backgroundGradient":"","backgroundColor":""},"width":"100%"}, {}],
togglePanelButton1: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"caption":"<img src='resources/images/buttons/heart.png'/><br/>Care Packs","height":"100%","margin":"0","width":"100%"}, {}],
button2: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/profile.png'/><br/>Profile","height":"100%","margin":"0","width":"100%"}, {}],
button3: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/settings.png'/><br/>Settings","height":"100%","margin":"0","width":"100%"}, {}],
button5: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}]
}]
}]
};

Main.prototype._cssText = '.Diagnosis, .Complaint {\
margin: 10px;\
font-size: 1.2Em;\
}\
.Main-endHtml .wmSizeNode {\
position: relative;\
top: 0px;\
}\
';
Main.prototype._htmlText = '';