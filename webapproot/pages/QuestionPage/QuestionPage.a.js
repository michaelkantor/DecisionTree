/* TODO:
DECISION TREE:
1. Fix Registration (Change GET TO POST)
2. Move Icons out of bubbles, put arrows on bubbles
3. Provide option to hide input editor and camera prompt
4. Provide option to disable only camera prompt
5. Create session in parse
6. Post all messages to parse
7. Build a simple nurse app that shows all users, all sessions for
each user, all messages for each session, lets nurse edit session and
save it back to parse.
8. Find The Tree icon Jayesh sent
9. Use the Dr and Patient pictures
*/
dojo.declare("QuestionPage", wm.Page, {
"preferredDevice": "phone",
start: function() {
this.currentQuestionVar.setData(app.decisionTreeVar);
app.historyVar.addItem(app.decisionTreeVar.getData());
this.responseList.setDataSet(this.currentQuestionVar.getValue("responses"));
},
responseListSelect: function(inSender, inItem) {
var data = inSender.selectedItem.getData();
app.historyVar.addItem({question: "",//this.currentQuestionVar.getValue("question"),
answer: inSender.selectedItem.getValue("answer"),
queryResponse: ""}); //this.currentQuestionVar.getData()});
if (data.question) {
this.nextQuestion(data);
/*
var nextHistoryItem = dojo.clone(data);
nextHistoryItem.answer = "";
this.nextQuestion(data,nextHistoryItem);*/
/*
} else if (data.answer.match(/Back to previous question/)) {
this.priorQuestion(); */
} else if (app.historyVar.getItem(app.historyVar.getCount()-2).getValue("question") == this.cameraQuestion.getValue("question")) {
if (data.answer == this.cameraQuestion.getValue("responses").getItem(0).getValue("answer")) {
this.cameraSVar.update();
} else {
app.announcePath();
this.showInputPanel();
}
} else {
var data = this.cameraQuestion.getData();
var nextHistoryItem = dojo.clone(data);
nextHistoryItem.answer = "";
this.nextQuestion(data,nextHistoryItem);
}
},
priorQuestion: function() {
app.historyVar.removeItem(app.historyVar.getCount()-1);
app.historyVar.removeItem(app.historyVar.getCount()-1);
//app.historyVar.removeItem(app.historyVar.getCount()-1);
this.currentQuestionVar.setData(app.historyVar.getItem(app.historyVar.getCount()-1));
this.responseList.setDataSet(this.currentQuestionVar.getValue("responses"));
},
nextQuestion: function(questionItem) {
// Add a Thinking item to the list
app.historyVar.addItem({question: "",
answer: "",
queryResponse:""});
this.updateScrollTop();
this.answersLabel.hide();
this.currentQuestionVar.setData({});
var random = 0;
while (random < 500) {
random = Math.random() * 2000;
}
wm.job("waitRandomTimeForNextMessage", random, this, function() {
app.historyVar.getItem(app.historyVar.getCount() - 1).setData(questionItem);
this.currentQuestionVar.setData(questionItem);
this.responseList.setDataSet(this.currentQuestionVar.getValue("responses"));
this.answersLabel.show();
this.updateScrollTop();
//this.panel.domNode.scrollTop = this.panel.domNode.scrollHeight;
});
},/*
historyListSelect: function(inSender, inItem) {
this.setQAShowing(true);
this.currentQuestionVar.setData(inSender.selectedItem.getValue("queryResponse"));
var index = dojo.indexOf(inSender.items, inItem);
while (app.historyVar.getCount() > index && app.historyVar.getCount()) {
app.historyVar.removeItem(index);
}
},*/
takePictureMenuSelect: function(inSender, inItem) {
var takePicture = Number(inSender.selectedItem.getValue("dataValue"));
if (takePicture) {
app.takePictureSVar.update();
} else {
app.announcePath();
this.showInputPanel();
}
},
currentQuestionVarSetData: function(inSender) {
var responses = inSender.getValue("responses");
this.updateScrollTop();
/*
if (app.historyVar.getCount() > 1 && responses.getCount() && !responses.getItem(responses.getCount()-1).getValue("answer").match(/Back to previous question/)) {
inSender.getValue("responses").addItem({answer:"<img class='app_silkIconList_6' width='16'/> Back to previous question"});
}
*/
},
updateScrollTop: function() {
if (this.panel && this.panel.domNode && this.historyList.items.length) {
this.panel.domNode.scrollTop = this.historyList.items[this.historyList.items.length-1].domNode.offsetTop-10;
}
},
cameraSVarSuccess: function(inSender, inDeprecated) {
app.historyVar.addItem({question: "",//this.currentQuestionVar.getValue("question"),
answer: "<img style='width:100%' src='" + inSender.getValue('dataValue') + "'/>",
queryResponse: ""}); //this.currentQuestionVar.getData()});
app.announcePath();
this.showInputPanel();
// takes a refresh to properly handle the new photo
this.historyList.renderDojoObj();
this.panel.domNode.scrollTop = this.panel.domNode.scrollHeight;
},
showInputPanel: function() {
this.responseList.hide();
this.answersLabel.hide();
this.inputPanel.setDisabled(false);
this.panel.domNode.scrollTop = this.panel.domNode.scrollHeight;
this.messageInput.focus();
},
sendMessage: function() {
var msg = this.messageInput.getDataValue();
if (msg === null || msg === undefined) return;
app.historyVar.addItem({question: "",
answer: msg,
queryResponse: ""});
this.panel.domNode.scrollTop = this.panel.domNode.scrollHeight;
this.messageInput.setDataValue("");
},
historyListStyleRow: function(inSender, inRow/* inRow.customClasses += " myClass"; inRow.customStyles += ";background-color:red"; */, rowData) {
if (rowData.question || !rowData.answer) {
inRow.customClasses += " QuestionRow";
} else {
inRow.customClasses += " AnswerRow";
}
},
responseListStyleRow: function(inSender, inRow/* inRow.customClasses += " myClass"; inRow.customStyles += ";background-color:red"; */, rowData) {
inRow.customClasses += " wmbutton";
},
createSessionSVarSuccess: function(inSender, inDeprecated) {
alert(dojo.toJson(inSender.getData()));
},
_end: 0
});

QuestionPage.widgets = {
currentQuestionVar: ["wm.Variable", {"json":"{\"answer\":\"Response to last question goes here\",\"question\":\"Current question goes here\",\"responses\":[{\"answer\":\"Answer number 1 goes here\",\"responses\":null},{\"answer\":\"Answer number 2 goes here\",\"responses\":null},{\"answer\":\"Answer number 3 goes here\",\"responses\":null}]}","type":"QueryResponse"}, {"onSetData":"currentQuestionVarSetData"}],
designTimeSampleData: ["wm.Variable", {"json":"{\"answer\":\"Response to last question goes here\",\"question\":\"Current question goes here\",\"responses\":[{\"answer\":\"Answer number 1 goes here\",\"responses\":null},{\"answer\":\"Answer number 2 goes here\",\"responses\":null},{\"answer\":\"Answer number 3 goes here\",\"responses\":null}]}","type":"QueryResponse"}, {"onSetData":"designTimeSampleDataSetData"}],
qaCompleteNav: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}]
}],
cameraQuestion: ["wm.Variable", {"json":"{\"question\":\"Do you want to use your phone to take a picture of the medical condition?\",\"responses\":[{\"answer\":\"Yes, take a picture for the nurse\",\"question\":\"\"},{\"answer\":\"No, send without picture\",\"question\":\"\"}]}","type":"QueryResponse"}, {}],
cameraSVar: ["wm.PhoneGapCall", {"operation":"capture_picture"}, {"onError":"announcePath","onSuccess":"cameraSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
}]
}]
}],
createSessionSVar: ["wm.ServiceVariable", {"operation":"parse.com.CreateSession","service":"xhrService","startUpdate":true}, {"onSuccess":"createSessionSVarSuccess"}, {
input: ["wm.ServiceInput", {"type":"parse.com.CreateSessionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"patient.objectId"}, {}],
wire3: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"patient.__type"}, {}],
wire4: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"patient.className"}, {}]
}]
}]
}],
addMessagesToSessionSVar: ["wm.ServiceVariable", {"operation":"parse.com.AddMessageToSession","service":"xhrService"}, {}, {
input: ["wm.ServiceInput", {"type":"parse.com.AddMessageToSessionInputs"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"createSessionSVar.objectId","targetProperty":"objectId"}, {}]
}]
}]
}],
layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
historyList: ["wm.List", {"_classes":{"domNode":["curvedlist","MobileListStyle"]},"autoSizeHeight":true,"border":"0","columns":[{"show":false,"field":"picture","title":"Picture","width":"40px","align":"left","formatFunc":"wm_image_formatter","formatProps":{"prefix":"resources/images/","height":43},"expression":"","isCustomField":true,"mobileColumn":false},{"show":true,"field":"answer","title":"Answer","width":"100%","expression":"\n\nif (${question}) {\n\"<img class='Avatar' src='resources/images/doctor.png'/><div class='Question'>\" + ${question} + \"</div>\";\n} else if (${answer}) {\n\"<img class='Avatar' src='resources/images/dog.gif'/><div class='Answer'>\" + ${answer} + \"</div>\";\n} else {\n  \"<img class='Avatar' src='resources/images/doctor.png'/><img src='resources/images/spinner.gif' style='width:60%'>\";\n}","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","displayType":"String","align":"left","formatFunc":""}],"headerVisible":false,"height":"4px","manageHistory":false,"margin":"0,2,2,2","minDesktopHeight":60,"renderVisibleRowsOnly":false,"styleAsGrid":false}, {"onSelect":"historyListSelect","onStyleRow":"historyListStyleRow"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.historyVar","targetProperty":"dataSet"}, {}]
}]
}],
answersLabel: ["wm.Label", {"caption":"Answers","height":"20px","padding":"4","width":"100%"}, {}],
responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle"]},"autoSizeHeight":true,"border":"0","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","displayType":"String","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":true}],"headerVisible":false,"height":"1192px","margin":"0,20,0,20","minDesktopHeight":60,"renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.responses","targetProperty":"dataSet"}, {}]
}]
}]
}],
inputPanel: ["wm.Panel", {"_classes":{"domNode":["inputPanel"]},"border":"1,0,0,0","desktopHeight":"38px","disabled":true,"enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","padding":"2,5","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/dog.gif","width":"60px"}, {}],
messageInput: ["wm.Text", {"borderColor":"#000000","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","padding":"0","width":"100%"}, {"onEnterKeyPress":"sendMessage"}],
sendButton: ["wm.Button", {"caption":"Send","height":"100%","margin":"0,0,0,4"}, {"onclick":"sendMessage"}]
}]
}]
};

QuestionPage.prototype._cssText = '.QuestionPage .curvedlist .wmlist-item, .QuestionPage .inputPanel, .QuestionPage  .wmlabel {\
font-size: 10pt;\
}\
.curvedlist .wmlist-item, .inputPanel, .Question, .Answer {\
color: black !important;\
background: -webkit-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#dcdbcf), to(#b2b2aa));\
background: -moz-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -ms-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -o-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
}\
div .Answer {\
background: -webkit-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#F8F8A5), to(#D1CA76));\
background: -moz-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -ms-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -o-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
}\
.QuestionPage-historyList.wmlist.MobileListStyle .wmlist-item {\
padding: 0px;\
}\
.Question, .Answer {\
padding: 10px 15px;\
border: solid 1px #333;\
border-radius: 4px;\
-webkit-border-radius: 4px;\
}\
.wm_default .MobileListStyle div.wmlist-item.QuestionRow, .wm_default .MobileListStyle div.wmlist-item.Odd.QuestionRow,\
.wm_default .MobileListStyle div.wmlist-item.AnswerRow, .wm_default .MobileListStyle div.wmlist-item.Odd.AnswerRow {\
background: none !important;\
background-color: transparent !important;\
border-width: 0px !important;\
padding: 2px !important;\
margin: 0px !important;\
}\
.QuestionRow .Question {\
margin-right: 25% !important;\
margin-left: 40px;\
}\
.AnswerRow .Answer {\
margin-left: 25% !important;\
margin-right: 40px;\
}\
.QuestionRow .Avatar {\
height: 40px;\
float: left;\
}\
.AnswerRow .Avatar {\
height: 40px;\
float: right;\
}\
.inputPanel.Disabled {\
opacity: 0.5;\
}\
';
QuestionPage.prototype._htmlText = '';