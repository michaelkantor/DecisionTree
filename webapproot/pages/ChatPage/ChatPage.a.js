dojo.declare("ChatPage", wm.Page, {
_lastChannel: null,
start: function() {},
onShow: function() {
var sessionId = app.currentSessionVar.getValue("sessionId");
if (sessionId != this._lastChannel) {
this.startSession();
}
},
startSession: function() {
if (!this.pubNub._isReady) {
wm.job("startChatSession", 100, this, "startSession");
return;
}
var sessionId = this._lastChannel = app.currentSessionVar.getValue("sessionId");
this.pubNub.setChannel("genus_sessions");
this.pubNub.setMessage(app.currentSessionVar.getData());
this.pubNub.setChannel("conversation_" + sessionId);
},
"preferredDevice": "phone",
pubNubMessageReceived: function(inSender, inMessageObject) {
this.conversationVar.addItem(inMessageObject);
},
sendButtonClick: function(inSender) {
var m = {message: this.sendTextEditor.getDataValue(), sender: "Patient"};
this.pubNub.setMessage(m);
this.conversationVar.addItem(m);
this.sendTextEditor.clear();
},
_end: 0
});

ChatPage.widgets = {
pubNub: ["com.pubnub.PubNubPresence", {"channel":undefined,"pubKey":"pub-382b3d34-a169-45f9-bd56-7288c5c649e6","subKey":"sub-e866dc21-334c-11e2-838a-17ed96270136","type":"PubNubMessage"}, {"onMessageReceived":"pubNubMessageReceived"}],
conversationVar: ["wm.Variable", {"isList":true,"type":"PubNubMessage"}, {}],
layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
conversationList: ["wm.List", {"_classes":{"domNode":[
"MobileListStyle"
]},"border":"0","columns":[
{"show":true,"field":"message","title":"Message","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>\" + ${sender} +\n\"</div><div class='MobileRow'>\" +${message} + \n\"</div>\"","mobileColumn":false},
{"show":false,"field":"sender","title":"Sender","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Message: \" + ${wm.runtimeId}.formatCell(\"message\", ${message}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n","mobileColumn":false},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":undefined,"source":"conversationVar","targetProperty":"dataSet"}, {}]
}]
}],
sendTextEditorPanel: ["wm.Panel", {"desktopHeight":"35px","enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
sendTextEditor: ["wm.Text", {"caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {"onEnterKeyPress":"sendButton.click"}],
sendButton: ["wm.Button", {"caption":"Send","height":"40px","margin":"4"}, {"onclick":"sendButtonClick"}]
}]
}]
};

ChatPage.prototype._cssText = '.MobileRowTitle {\
font-weight: 1.2Em;\
margin-bottom: 4px;\
}\
.MobileRow {\
margin-left: 15px;\
}\
';
ChatPage.prototype._htmlText = '';