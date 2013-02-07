dojo.declare("Main", wm.Page, {
"preferredDevice": "phone",
start: function() {
if (wm.device == "desktop") {
window.location.search = djConfig.isDebug ? "?debug&wmmobile=tablet" : "?wmmobile=tablet";
}
},
/*
logoutButtonClick: function(inSender) {
app.phonegapCredentialsVar.setData(null);
this.pageContainer1.setPageName("LoginPage");
},
restoreLoginSession: function() {
this.mainMenuLayer.activate();
},
registerButtonClick: function(inSender) {
var page = wm.Page.getPage("LoginPage");
if (page) page.showRegistrationForm();
},
*/
backButtonClick: function(inSender) {
if (this.diagnosisLayer.isActive() || this.endLayer.isActive()) {
app.historyVar.clearData();
this.mainMenuLayer.activate();
} else if (app.historyVar.getCount() > 1) {
this.questionsPageContainer.page.priorQuestion();
} else {
this.mainMenuLayer.activate();
}
},
layers1Change: function(inSender, inIndex) {
this.backAndForthPanel.setShowing(inIndex > 1);
},
diagnosisLayerShow: function(inSender) {
var diagnosisId;
for (var i = app.historyVar.getCount() -1; !diagnosisId && i >= 0; i--) {
diagnosisId = app.historyVar.getItem(i).getValue("actionCode");
}
if (!diagnosisId) diagnosisId = "Not set in json file";
var item = app.dispositionsLiveVariable.query({name: diagnosisId}).getItem(0);
app.currentDispositionVar.setData(item);
var displayName = item.getValue("displayName") || item.getValue("name");
this.dispositionLabel.setCaption("<span class='ComplaintHeading'>Disposition:</span> <span class='ComplaintName'>" + displayName + "</span>");
this.endHtml.setHtml(item.getValue("text") );
this.diagnosisPanel.domNode.scrollTop = 0;
},
mainMenuListSelect: function(inSender, inItem) {
var json;
this._disposition = inSender.selectedItem.getValue("name");
if (wm.isPhonegap) {
json = wm.load("resources/data/" + inSender.selectedItem.getValue("dataValue") + ".js");
this.showQuestions(dojo.fromJson(json));
} else {
this.getJsonLVar.update();
}
},
getJsonLVarSuccess: function(inSender, inDeprecated) {
this.showQuestions(dojo.fromJson(inSender.getData()[0].text));
},
showQuestions: function(inData) {
app.decisionTreeVar.setData(inData);
this.questionsLayer.update();
},
toggleButtonPanel1Change: function(inSender, inButton) {
var buttons = [this.examRoomTglBtn,this.carePacksTglBtn,this.profileTglBtn,this.settingsTglBtn];
dojo.forEach(buttons, function(b) {
if (b == inButton) {
if (b.borderColor != "#282828") b.setBorderColor("#282828");
} else {
if (b.borderColor != "#333333") b.setBorderColor("#333333");
}
});
},
examRoomTglBtnClick: function(inSender) {
if (!app.phonegapCredentialsVar.isEmpty()) {
this.mainMenuLayer.update();
} else {
//this.loginLayer.update();
this.mainMenuLayer.update();
}
},
_end: 0
});

Main.widgets = {
getConditionsQuerySVar: ["wm.ServiceVariable", {"operation":"getConditionsQuery","saveInPhonegap":true,"service":"GenusHealthDB","startUpdate":true}, {}, {
input: ["wm.ServiceInput", {"type":"getConditionsQueryInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"window[\"studio\"] || app.isTestVersion ? 1 : 2","targetProperty":"status"}, {}]
}]
}]
}],
getJsonLVar: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":1,"orderBy":"desc: modifiedAt","startUpdate":false,"type":"com.genushealthdb.data.Jsonfiles"}, {"onSuccess":"getJsonLVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuList.selectedItem.name","targetProperty":"filter.name"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Jsonfiles","view":[{"caption":"FileId","sortable":true,"dataIndex":"fileId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.sql.Clob","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}],
selectedItem: ["wm.Variable", {"type":"com.genushealthdb.data.Jsonfiles"}, {}]
}],
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["layoutBox1"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
headerPanel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#525252","endColor":"#1d1d1d","colorStop":76},"backgroundColor":""},"verticalAlign":"top","width":"100%"}, {}, {
spacer3: ["wm.Spacer", {"height":"1px","width":"100%"}, {}],
titleLabel: ["wm.Label", {"align":"center","caption":"Exam Room","height":"100%","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"13px"},"width":"100px"}, {}],
panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
backAndForthPanel: ["wm.Panel", {"_classes":{"domNode":["BackAndForthToggleButtonPanel","backAndForthTogglePanel"]},"border":"1","borderColor":"","height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100px"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"Boolean(window[\"Studio\"])","targetProperty":"showing"}, {}]
}],
backButton: ["wm.Button", {"_classes":{"domNode":["StrongLeftRadius"]},"border":"0,1,0,0","caption":undefined,"height":"100%","iconHeight":"28px","iconUrl":"resources/images/buttons/left.png","iconWidth":"24px","margin":"0","padding":"0,0,0,10","width":"100%"}, {"onclick":"backButtonClick"}],
togglePanelButton1: ["wm.Button", {"_classes":{"domNode":["StrongRightRadius"]},"border":"0","caption":undefined,"height":"100%","iconHeight":"28px","iconUrl":"resources/images/buttons/right.png","iconWidth":"24px","margin":"0","padding":"0,0,0,15","width":"100%"}, {}]
}]
}]
}],
layers1: ["wm.Layers", {"defaultLayer":1,"styles":{"backgroundColor":"","backgroundImage":"url(resources/images/pattern.png)","backgroundRepeat":"repeat"}}, {"onchange":"layers1Change"}, {
loginLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"LoginPage","subpageEventlist":{"onParseLoginSVarSuccess":"parseLoginSVar.onSuccess"},"subpageMethodlist":{},"subpageProplist":{}}, {"onParseLoginSVarSuccess":"mainMenuLayer"}]
}],
mainMenuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","ButtonList"]},"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"nodegroupId","title":"NodegroupId","width":"80px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"status","title":"Status","width":"80px","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"rootNodeId","title":"RootNodeId","width":"80px","displayType":"Number","align":"left","formatFunc":""}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"10","minDesktopHeight":60,"padding":"4","styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"mainMenuListSelect"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"getConditionsQuerySVar","targetProperty":"dataSet"}, {}]
}]
}]
}],
questionsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
questionsPageContainer: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"OneQuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"questionsPageContainerPageChanged"}]
}],
diagnosisLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"diagnosisLayerShow"}, {
diagnosisPanel: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
drGenusPicturePanel2: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
drGenusPicture2: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
}],
questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"78px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
questionLabelPanel4: ["wm.Panel", {"fitToContentHeight":true,"height":"76px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
upArrow: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
dispositionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","caption":"","height":"50px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}]
}]
}],
endHtml: ["wm.Html", {"_classes":{"domNode":["NoSizeNode"]},"autoScroll":false,"autoSizeHeight":true,"borderColor":"#cccccc","height":"52px","html":"Synopsis","margin":"0,10,10,10","minDesktopHeight":15,"padding":"12","styles":{"color":"#036fad"}}, {}],
chatWithDrButton: ["wm.Button", {"caption":"Talk to Nurse Online","height":"40px","margin":"4","showing":false,"width":"151px"}, {"onclick":"chatLayer"}],
wrapupLabel: ["wm.Label", {"_classes":{"domNode":["Question","curvedlist"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","caption":"Feedback helps us improve our service: was this information helpful?","height":"62px","margin":"0,10,10,10","padding":"12","singleLine":false,"width":"100%"}, {}],
feedbackButton: ["wm.Button", {"caption":"Quick Feedback Questions","height":"73px","margin":"4","mobileHeight":"73px","width":"160px"}, {"onclick":"feedbackLayer"}],
facebookLikeButton: ["wm.gadget.FacebookLikeButton", {"action":"recommend","font":"segoe ui","height":"120px","href":"http://genushealth.cloudfoundry.com","margin":"20,0,0,0"}, {}]
}]
}],
carePackLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
profilesLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
settingsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
chatLayer: ["wm.Layer", {"borderColor":"","caption":"Chat","horizontalAlign":"left","showing":false,"themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer5: ["wm.PageContainer", {"deferLoad":true,"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}],
feedbackLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
pageContainer6: ["wm.PageContainer", {"deferLoad":true,"pageName":"FeedbackPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
}]
}],
toggleButtonPanel1: ["wm.ToggleButtonPanel", {"_classes":{"domNode":["NoRadius"]},"desktopHeight":"68px","height":"68px","horizontalAlign":"left","mobileHeight":"68px","styles":{"fontSize":""},"verticalAlign":"top"}, {"onChange":"toggleButtonPanel1Change"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"examRoomTglBtn","targetProperty":"currentButton"}, {}]
}],
examRoomTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","styles":{"fontSize":"","backgroundGradient":"","backgroundColor":""},"width":"100%"}, {"onclick":"examRoomTglBtnClick"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${examRoomTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/scope.png'/><br/>Exam Room\"","targetProperty":"caption"}, {}]
}]
}],
carePacksTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"carePackLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${carePacksTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/heart.png'/><br/>Care Packs\"","targetProperty":"caption"}, {}]
}]
}],
profileTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"profilesLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${profileTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/person.png'/><br/>Profile\"","targetProperty":"caption"}, {}]
}]
}],
settingsTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"settingsLayer"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${settingsTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/gear.png'/><br/>Settings\"","targetProperty":"caption"}, {}]
}]
}],
button5: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}]
}]
}]
};

Main.prototype._cssText = '.Diagnosis, .Complaint {\
margin: 10px;\
font-size: 1.2Em;\
}\
.Diagnosis {\
padding-bottom: 20px !important;\
}\
.Main-endHtml .wmSizeNode {\
position: relative;\
top: 0px;\
font-size: 10pt;\
}\
.ComplaintHeading {\
font-size: 1.2Em;\
color: #7b7b7b;\
}\
.ComplaintName {\
font-size: 1.2Em;\
color: #d00017;\
}\
';
Main.prototype._htmlText = '';