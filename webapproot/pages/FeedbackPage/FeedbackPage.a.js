dojo.declare("FeedbackPage", wm.Page, {
start: function() {
},
onShow: function() {
},
"preferredDevice": "phone",
responseListSelect: function(inSender, inItem) {
this.feedbackHistoryVar.addItem({name: this.currentQuestion.getValue("feedbackquestionid"),
dataValue: inSender.selectedItem.getValue("feedbackresponseid")
});
if (this.feedbackquestionsLiveVariable1.cursor + 1 ==
this.feedbackquestionsLiveVariable1.getCount()) {
this.showEnd();
} else {
this.feedbackquestionsLiveVariable1.setNext();
this.currentQuestion.setData(this.feedbackquestionsLiveVariable1.getCursorItem().getData());
}
},
feedbackquestionsLiveVariable1Success: function(inSender, inDeprecated) {
if (inSender.getCount() == 0) {
this.showEnd();
} else {
this.responseListPanel.show();
inSender.cursor = 0;
this.feedbackHistoryVar.clearData();
this.currentQuestion.setData(inSender.getCursorItem().getData());
}
},
showEnd: function() {
this.questionLabel.setCaption("Thank you for your feedback!");
this.responseListPanel.hide();
this.saveFeedback();
},
saveFeedback: function() {
var p = wm.getPage("OneQuestionPage");
p.updateSessionLVar.sourceData.setValue("feedback", dojo.toJson(this.feedbackHistoryVar.getData()));
p.updateSessionLVar.update();
},
backButtonClick: function() {
if (this.feedbackquestionsLiveVariable1.cursor == 0) {
return false;
} else {
this.feedbackquestionsLiveVariable1.setPrevious();
this.currentQuestion.setData(this.feedbackquestionsLiveVariable1.getCursorItem().getData());
this.feedbackHistoryVar.removeItem(this.feedbackquestionsLiveVariable1.cursor);
return true;
}
},
_end: 0
});

FeedbackPage.widgets = {
feedbackresponsesLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","startUpdate":false,"type":"com.genushealthdb.data.Feedbackresponses"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestion","targetProperty":"filter.feedbackquestions"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Feedbackresponses","view":[{"caption":"Feedbackresponseid","sortable":true,"dataIndex":"feedbackresponseid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Answer","sortable":true,"dataIndex":"answer","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
}],
dispositionLiveVariable: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","orderBy":undefined,"startUpdate":false,"type":"com.genushealthdb.data.Dispositions"}, {}, {
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Dispositions","related":["feedbackquestionset"],"view":[{"caption":"DispositionId","sortable":true,"dataIndex":"dispositionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"DisplayName","sortable":true,"dataIndex":"displayName","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"},{"caption":"Feedbackquestionsetid","sortable":true,"dataIndex":"feedbackquestionset.feedbackquestionsetid","type":"java.lang.Integer","displayType":"Number","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2000},{"caption":"Name","sortable":true,"dataIndex":"feedbackquestionset.name","type":"java.lang.String","displayType":"Text","required":true,"widthUnits":"px","includeLists":true,"includeForms":true,"order":2001}]}, {}],
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"app.currentDispositionVar.dispositionId","targetProperty":"filter.dispositionId"}, {}]
}]
}],
feedbackquestionsLiveVariable1: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","orderBy":"asc: ordernumber","type":"com.genushealthdb.data.Feedbackquestions"}, {"onSuccess":"feedbackquestionsLiveVariable1Success"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"dispositionLiveVariable.feedbackquestionset","targetProperty":"filter.feedbackquestionset"}, {}]
}],
liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Feedbackquestions","view":[{"caption":"Feedbackquestionid","sortable":true,"dataIndex":"feedbackquestionid","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Question","sortable":true,"dataIndex":"question","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Ordernumber","sortable":true,"dataIndex":"ordernumber","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null}]}, {}]
}],
currentQuestion: ["wm.Variable", {"type":"com.genushealthdb.data.Feedbackquestions"}, {}],
feedbackHistoryVar: ["wm.Variable", {"isList":true,"type":"EntryData"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
drGenusPicturePanel2: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
drGenusPicture2: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
}],
questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"91px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
questionLabelPanel1: ["wm.Panel", {"fitToContentHeight":true,"height":"89px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
upArrow: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
questionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","height":"63px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestion.question","targetProperty":"caption"}, {}]
}]
}]
}]
}],
responseListPanel: ["wm.Panel", {"autoScroll":true,"fitToContentHeight":true,"height":"97px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle","ButtonList","responseList"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"feedbackresponseid","title":"Feedbackresponseid","width":"80px","displayType":"Number","align":"left","formatFunc":""}],"headerVisible":false,"height":"20px","margin":"0,0,6,0","minDesktopHeight":60,"padding":"5,10,5,10","renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"feedbackresponsesLiveVariable1","targetProperty":"dataSet"}, {}]
}]
}],
picture2Panel: ["wm.Panel", {"_classes":{"domNode":["OverflowNotHidden"]},"height":"95px","horizontalAlign":"left","verticalAlign":"top","width":"72px"}, {}, {
picture4: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftLeft"]},"height":"21px","source":"resources/images/bubblearrowright.png","width":"21px"}, {}],
picture2: ["wm.Picture", {"height":"72px","source":"resources/images/patientcircle.png","width":"100%"}, {}]
}]
}]
}]
}]
};

FeedbackPage.prototype._cssText = '';
FeedbackPage.prototype._htmlText = '';