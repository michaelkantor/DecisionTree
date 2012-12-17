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