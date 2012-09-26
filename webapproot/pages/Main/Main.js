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
  _end: 0
});