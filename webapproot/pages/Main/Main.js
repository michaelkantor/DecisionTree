dojo.declare("Main", wm.Page, {
	"preferredDevice": "phone",
    
    start: function() {
            if (wm.device == "desktop") {
               window.location.search = djConfig.isDebug ? "?debug&wmmobile=tablet" : "?wmmobile=tablet";
            }
    },

    logoutButtonClick: function(inSender) {
      app.phonegapCredentialsVar.setData(null);
      this.pageContainer1.setPageName("LoginPage");
    },

  registerButtonClick: function(inSender) {
      var page = wm.Page.getPage("LoginPage");
      if (page) page.showRegistrationForm();
    },
  backButtonClick: function(inSender) {
      if (this.endLayer.isActive()) {
          this.mainMenuLayer.activate();
       } else if (app.historyVar.getCount() > 1) {
            this.pageContainer1.page.priorQuestion();
       } else {
            this.mainMenuLayer.activate();
       }
    },
    layers1Change: function(inSender, inIndex) {
        this.backAndForthPanel.setShowing(inIndex > 1);        
    },
    endLayerShow: function(inSender) {
        var diagnosisId;
        for (var i = app.historyVar.getCount() -1; !diagnosisId && i >= 0; i--) {
            diagnosisId = app.historyVar.getItem(i).getValue("actionCode");
        }
        var item = app.diagnosisVar.query({name: diagnosisId});
        this.endHtml.setHtml("<div class='Complaint'>Complaint: " + this.mainMenuList.selectedItem.getValue("name") + "</div><hr/><div class='Diagnosis'>" + item.getValue("dataValue") + "</div>");
    },
    mainMenuListSelect: function(inSender, inItem) {
        var json = wm.load("resources/data/" + inSender.selectedItem.getValue("dataValue") + ".js");
        app.decisionTreeVar.setData(dojo.fromJson(json));
        this.questionsLayer.update();
    },
    _end: 0
});