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
        if (app.historyVar.getCount() > 1) {
            this.pageContainer1.page.priorQuestion();
        } else {
            this.mainMenuLayer.activate();
        }
    },
    layers1Change: function(inSender, inIndex) {
        this.backButton.setDisabled(inIndex === 0);
    },
    _end: 0
});