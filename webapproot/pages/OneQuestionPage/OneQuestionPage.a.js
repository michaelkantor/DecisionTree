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
dojo.declare("OneQuestionPage", wm.Page, {
"preferredDevice": "phone",
start: function() {
},
onShow: function() {
this.currentQuestionVar.setData(app.decisionTreeVar);
this.responseList.setDataSet(this.currentQuestionVar.getValue("responses"));
this.createSessionLVar.update();
},
responseListSelect: function(inSender, inItem) {
var data = inSender.selectedItem.getData();
app.historyVar.addItem({question: this.currentQuestionVar.getValue("question"),
responses: this.currentQuestionVar.getValue('responses'),
answer: inSender.selectedItem.getValue("answer"),
actionCode: data.actionCode,
queryResponse:  this.currentQuestionVar.getData()});
if (data.question) {
this.nextQuestion(data);
/*
var nextHistoryItem = dojo.clone(data);
nextHistoryItem.answer = "";
this.nextQuestion(data,nextHistoryItem);*/
/*
} else if (data.answer.match(/Back to previous question/)) {
this.priorQuestion(); */
} else if (app.historyVar.getItem(app.historyVar.getCount()-1).getValue("question") == this.cameraQuestion.getValue("question")) {
if (data.answer == this.cameraQuestion.getValue("responses").getItem(0).getValue("answer")) {
this.cameraSVar.update();
} else {
this.questionsDone();
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
this.currentQuestionVar.setData(app.historyVar.getItem(app.historyVar.getCount()-1));
this.updateAnswerList();
},
nextQuestion: function(questionItem) {
this.updateScrollTop();
this.currentQuestionVar.setData(questionItem);
this.currentQuestionVar.setData(questionItem);
this.updateAnswerList();
this.updateScrollTop();
},
updateAnswerList: function() {
this.responseList.setDataSet(this.currentQuestionVar.getValue("responses"));
},
/*
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
this.questionsDone();
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
this.responseList.setScrollTop(0);
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
/* Switch from canned dialog to dialog with a human */
showInputPanel: function() {
/*
this.responseList.hide();
this.inputPanel.setDisabled(false);
this.panel.domNode.scrollTop = this.panel.domNode.scrollHeight;
this.messageInput.focus();
*/
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
questionsDone: function() {
app.announcePath();
var actionCode = app.historyVar.getItem(app.historyVar.getCount()-2).getValue('actionCode');
this.updateSessionLVar.sourceData.setValue("modelDiagnosis", actionCode);
this.updateSessionLVar.update();
},
updateSessionLVarSuccess: function(inSender, inDeprecated) {
//alert(dojo.toJson(inSender.getData()));
var historyCount = app.historyVar.getCount();
for (var i = 0; i < historyCount; i++) {
var from, text;
var currentItem = app.historyVar.getItem(i);
this.createMessageLVar.sourceData.setData({
sender: "autodoctor",
text: currentItem.getValue("question"),
createdAt: new Date().getTime(),
userSessions: this.createSessionLVar});
this.createMessageLVar.update();
this.createMessageLVar.sourceData.setData({
sender: "user",
text: currentItem.getValue("answer"),
createdAt: new Date().getTime(),
userSessions: this.createSessionLVar
});
this.createMessageLVar.update();
}
},
/*createMessageSVarSuccess: function(inSender, inDeprecated) {
this.messageRelationshipsObjectsVar.addItem({__type: "Pointer", "className": "Message", objectId: inSender.getValue("objectId")});
if (inSender._inFlightBacklog.length == 0) {
this.addMessagesToSessionSVar.update();
}
},
updateSessionSVarSuccess: function(inSender, inDeprecated) {
this.createSessionSVarSuccess(inSender, inDeprecated);
},*/
_end: 0
});

OneQuestionPage.widgets = {
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
parseUserPointer: ["wm.Variable", {"type":"parse.com.Pointer"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"dataSet.__type"}, {}],
wire1: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"dataSet.className"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"dataSet.objectId"}, {}]
}]
}],
messageRelationshipVar: ["wm.Variable", {"type":"parse.com.AddRelationshipType"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"messageRelationshipsObjectsVar","targetProperty":"dataSet.objects"}, {}],
wire1: ["wm.Wire", {"expression":"\"AddRelation\"","targetProperty":"dataSet.__op"}, {}]
}]
}],
messageRelationshipsObjectsVar: ["wm.Variable", {"isList":true,"type":"parse.com.AddRelationshipType.objects"}, {}],
createSessionLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.UserSessions"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"parseUserPointer.objectId","targetProperty":"sourceData.patientId"}, {}],
wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.createdAt"}, {}],
wire2: ["wm.Wire", {"expression":undefined,"source":"[main].mainMenuList.selectedItem.name","targetProperty":"sourceData.conditionType"}, {}],
wire3: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.updatedAt"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.UserSessions","view":[{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"}]}, {}]
}],
updateSessionLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"update","startUpdate":false,"type":"com.genushealthdb.data.UserSessions"}, {"onSuccess":"updateSessionLVarSuccess"}, {
binding: ["wm.Binding", {}, {}, {
wire3: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.updatedAt"}, {}],
wire: ["wm.Wire", {"expression":undefined,"source":"createSessionLVar.sessionId","targetProperty":"sourceData.sessionId"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.UserSessions","view":[{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"}]}, {}]
}],
createMessageLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.Messages"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Messages","view":[{"caption":"MessageId","sortable":true,"dataIndex":"messageId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Sender","sortable":true,"dataIndex":"sender","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null}]}, {}]
}],
layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","styles":{"backgroundGradient":""},"verticalAlign":"top"}, {}, {
panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
drGenusPicturePanel: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
drGenusPicture: ["wm.Picture", {"aspect":"h","height":"56px","source":"resources/images/drgenus.png","width":"100%"}, {}]
}],
questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
questionLabelPanel1: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
upArrowBubblePicture: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftDown"]},"height":"21px","margin":"0,0,0,15","source":"resources/images/bubblearrowup.png","width":"36px"}, {}],
questionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","height":"36px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.question","targetProperty":"caption"}, {}]
}]
}]
}]
}],
responseListPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"85px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle","ButtonList","responseList"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":false}],"headerVisible":false,"height":"20px","margin":"0,0,6,0","minDesktopHeight":60,"padding":"5,10,5,10","renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.responses","targetProperty":"dataSet"}, {}]
}]
}],
picture2Panel: ["wm.Panel", {"_classes":{"domNode":["OverflowNotHidden"]},"height":"85px","horizontalAlign":"left","verticalAlign":"top","width":"64px"}, {}, {
picture4: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftLeft"]},"height":"21px","source":"resources/images/bubblearrowright.png","width":"21px"}, {}],
picture2: ["wm.Picture", {"height":"64px","source":"resources/images/patientcircle.png","width":"100%"}, {}]
}]
}]
}],
inputPanel: ["wm.Panel", {"_classes":{"domNode":["inputPanel"]},"border":"1,0,0,0","desktopHeight":"38px","disabled":true,"enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","padding":"2,5","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
picture1: ["wm.Picture", {"height":"62px","source":"resources/images/patientcircle.png","width":"49px"}, {}],
messageInput: ["wm.Text", {"borderColor":"#000000","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","padding":"0","width":"100%"}, {"onEnterKeyPress":"sendMessage"}],
sendButton: ["wm.Button", {"caption":"Send","height":"100%","margin":"0,0,0,4"}, {"onclick":"sendMessage"}]
}]
}]
};

OneQuestionPage.prototype._cssText = '.OneQuestionPage .curvedlist .wmlist-item, .OneQuestionPage .inputPanel, .OneQuestionPage  .wmlabel {\
font-size: 10pt;\
}\
.OneQuestionPage-historyList.wmlist.MobileListStyle .wmlist-item {\
padding: 0px;\
}\
.AnswerRow .Answer {\
margin-left: 25% !important;\
margin-right: 40px;\
}\
.AnswerRow .Avatar {\
height: 40px;\
float: right;\
}\
.inputPanel.Disabled {\
opacity: 0.5;\
}\
';
OneQuestionPage.prototype._htmlText = '';