dojo.declare("Main", wm.Page, {
	"preferredDevice": "phone",
    
    start: function() {
        if (wm.device == "desktop") {
           window.location.search = djConfig.isDebug ? "?debug&wmmobile=tablet" : "?wmmobile=tablet";
        } else {
            this.showLicenseOrMainMenu();
        }
    },
    showLicenseOrMainMenu: function() {
        if (dojo.cookie("licenseAgreed")) {
            this.mainMenuLayer.activate();
        } else {
            this.licenseLayer.activate();   
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
        var currentLayer = this.layers1.getActiveLayer();
        var pageContainer = currentLayer.c$[0];        
        if (pageContainer instanceof wm.PageContainer && pageContainer.page && 
            pageContainer.page.backButtonClick && pageContainer.page.backButtonClick()) {
            ;
        } else {
            switch(currentLayer.name) {
                case "loginLayer":
                    break;
                case "licenseLayer":
                    break;
                case "mainMenuLayer":
                    break;
                case "questionsLayer":
                    app.historyVar.clearData();
                    this.mainMenuLayer.activate();
                    break;
                case "diagnosisLayer":
                    app.historyVar.clearData();
                    this.mainMenuLayer.activate();
                    break;
                case "feedbackLayer":
                    this.diagnosisLayer.activate();
                    break;
            }
        }      
    },
    layers1Change: function(inSender, inIndex) {
        this.backAndForthPanel.setShowing(inIndex > 3);
        if (this.toggleButtonPanel1) {
            this.toggleButtonPanel1.setShowing(inIndex > 2);
        }
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
        
        /* TODO: Need to figure out how to bundle this data with phonegap builds.  Until then, just
        * assume they have a network connection.
        */
        if (wm.isPhonegap && false) {
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
        /* Uncomment if we reenable login
        if (!app.phonegapCredentialsVar.isEmpty()) {
            this.mainMenuLayer.update();
        } else {
            this.loginLayer.update();
        }*/
        
        if (this.layers1.layerIndex > 2) this.mainMenuLayer.activate();
    },
   
    mainMenuLayerShow: function(inSender) {
        if (!wm.isPhonegap && !this._addToHomeCalled) {         
            addToHome.show(); // if needed, show the prompt to add to home page for IOS users; http://cubiq.org/add-to-home-screen
            this._addToHomeCalled = true;
        }
	},
	_end: 0
});