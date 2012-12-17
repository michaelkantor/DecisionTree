/* TODO: 
DECISION TREE:
1. Fix Registration 

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
                              queryResponse:  this.currentQuestionVar.getData(),
                              nodeId: data.nodeId});                              
      if (data.nodeId) {
            this.updateSessionLVar.sourceData.setValue("node.nodeId", data.nodeId);
            this.updateSessionLVar.update();          
      }
      

              this.createMessageLVar.sourceData.setData({
                  messageId: 0,
                  sender: "user", 
                  text: data.answer,
                  createdAt: new Date().getTime(),
                  userSessions: {sessionId: this.createSessionLVar.getValue("sessionId")}
                  });
              this.createMessageLVar.update();

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
                if (window["PhoneGap"]) {
                    this.cameraSVar.update();
                } else {
                    this.cameraSVar.setValue('dataValue', "sample image");
                    this.cameraSVarSuccess(this.cameraSVar);
                }
            } else {
                this.questionsDone();                
                this.showInputPanel();
            }
      } else if (wm.isPhonegap) {
          var data = this.cameraQuestion.getData();
          var nextHistoryItem = dojo.clone(data);
          nextHistoryItem.answer = ""; 
          this.nextQuestion(data,nextHistoryItem);
      } else {
           this.questionsDone();                
           this.showInputPanel();
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
     
     this.createMessageLVar.sourceData.setData({
          messageId: 0,
          sender: "autodoctor", 
          text: this.currentQuestionVar.getValue("question"),
          createdAt: new Date().getTime(),
          userSessions: {sessionId: this.createSessionLVar.getValue("sessionId")}
      });
      this.createMessageLVar.update();

    
},

  currentQuestionVarSetData: function(inSender) {
      if (inSender.isEmpty()) return;
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
            this.questionsDone();                
            this.showInputPanel();
            this.createMessageLVar.sourceData.setData({
          messageId: 0,
          sender: "user", 
          text: inSender.getValue("dataValue"),
          createdAt: new Date().getTime(),
          userSessions: {sessionId: this.createSessionLVar.getValue("sessionId")}
      });
      this.createMessageLVar.update();
      
            // takes a refresh to properly handle the new photo
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
        var actionCode ;
        for (var i =  app.historyVar.getCount() -1; i >= 0; i--) {
            actionCode = app.historyVar.getItem(i).getValue("actionCode");
            if (actionCode) {
                this.updateSessionLVar.sourceData.setValue("modelDiagnosis", actionCode);                
                this.updateSessionLVar.update();
                break;
            }
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