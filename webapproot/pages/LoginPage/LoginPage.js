dojo.declare("LoginPage", wm.Page, {
	"preferredDevice": "phone",
    start: function() {    
        var data = app.phonegapCredentialsVar.getData();        
        if (data && data.name) {
            app.toastSuccess("Welcome back " + data.name);
            main.restoreLoginSession();
        }
    },
    
    parseLoginSVarSuccess: function(inSender, inDeprecated) {
      var data = inSender.getData();
      if (data.sessionToken) {
          app.phonegapCredentialsVar.setData({name: this.usernameEditor.getDataValue(),
                                               dataValue: data.objectId}); // datavalue is the userID
            dojo.cookie("sessionToken", data.sessionToken);
            //app.alert("sessionToken of " + data.sessionToken + " saved");
      } else {
          this.parseLoginSVarError(inSender, "");
      }
      
    },

  parseLoginSVarError: function(inSender, inError) {
              app.toastWarning("Username and password were not validated");

    },
  showRegistrationForm: function() {
          this.phoneEditor.show();
          this.loginButton.setCaption("Register");
          this.cancelButton.show();
    },
  loginButtonClick: function(inSender) {
  if (this.phoneEditor.showing) {
      this.parseRegisterSVar.update();
  } else {
      this.parseLoginSVar.update();
  }
    },

  cancelButtonClick: function(inSender) {
      this.cancelButton.hide();
      this.phoneEditor.hide();
          this.loginButton.setCaption("Login");

},
  _end: 0
});