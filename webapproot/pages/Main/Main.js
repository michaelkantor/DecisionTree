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
        var item = app.dispositionsLiveVariable.query({name: diagnosisId});
        var displayName = item.getValue("displayName") || item.getValue("name");
        this.dispositionLabel.setCaption("<span class='ComplaintHeading'>Disposition:</span> <span class='ComplaintName'>" + displayName + "</span>");
        this.endHtml.setHtml(item.getValue("text") );
        this.diagnosisPanel.domNode.scrollTop = 0;
        this.feedbackUseAgainEditor.setDataValue(null);
        this.feedbackSaveTripEditor.setDataValue(null);
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
    saveFeedback: function() {
        this.questionsPageContainer.page.updateSessionLVar.sourceData.setValue("feedback", "{'useAgain': " + (this.feedbackUseAgainEditor.getDataValue() == "Yes") + ",'saveVisit':" + (this.feedbackSaveTripEditor.getDataValue() == "Yes") + "}");
        this.questionsPageContainer.page.updateSessionLVar.update();
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