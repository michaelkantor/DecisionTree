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
                              actionCode: data.actionCode,
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
    questionsDone: function() {
        app.announcePath();
        this.createSessionSVar.update();
    },
  createSessionSVarSuccess: function(inSender, inDeprecated) {
      //alert(dojo.toJson(inSender.getData()));
          var historyCount = app.historyVar.getCount();
          for (var i = 0; i < historyCount; i++) {
              var from, text;
              var currentItem = app.historyVar.getItem(i);
          
              if (currentItem.getValue("question")) {
                  from = "autodoctor";
                  text = currentItem.getValue("question");              
               } else {
                  from = "user";
                  text = currentItem.getValue("answer");                  
               }
                this.createMessageSVar.input.setData({from: from,message: text});
                this.createMessageSVar.update();
          }                      
    },
  createMessageSVarSuccess: function(inSender, inDeprecated) {
        this.messageRelationshipsObjectsVar.addItem({__type: "Pointer", "className": "Message", objectId: inSender.getValue("objectId")});
        if (inSender._inFlightBacklog.length == 0) {
            this.addMessagesToSessionSVar.update();   
        }
    },
    _end: 0
}); 