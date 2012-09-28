dojo.declare("Main", wm.Page, {
	"preferredDevice": "phone",
    diagnosis: {
        DispositionNextDay: "Hey ho",
        DispositionUrgentCare: "Ho Hum",
        DispositionHomeCare: "Home boy"
    },
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
  pageContainer1PageChanged: function(inSender, inNewPage, inPreviousPage) {
      if (inNewPage.name == "LoginPage") {

           this.registerButton.show();
          this.logoutButton.hide();
      } else {
                    this.registerButton.hide();
          this.logoutButton.show();
      }
    },
  backButtonClick: function(inSender) {
      if (this.endLayer.isActive()) {
          this.mainMenuVar.activate();
       } else if (app.historyVar.getCount() > 2) {
            this.pageContainer1.page.priorQuestion();
       } else {
            this.mainMenuLayer.activate();
       }
    },
    layers1Change: function(inSender, inIndex) {
        this.backButton.setDisabled(inIndex === 0);
    },
    endLayerShow: function(inSender) {
        var diagnosisId;
        for (var i = app.historyVar.getCount() -1; !diagnosisId && i >= 0; i--) {
            diagnosisId = app.historyVar.getItem(i).getValue("actionCode");
        }
        this.endHtml.setHtml("<div class='Complaint'>Complaint: " + this.mainMenuList.selectedItem.getValue("name") + "</div><hr/><div class='Diagnosis'>" + this.diagnosis[diagnosisId] + "</div>");
    },
    _end: 0
});