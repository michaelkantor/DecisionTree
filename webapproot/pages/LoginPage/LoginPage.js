dojo.declare("LoginPage", wm.Page, {
    start: function() {    
        var data = app.phonegapCredentialsVar.getData();        
        if (data && data.name) {
            app.toastSuccess("Welcome back " + data.name);
            wm.onidle(this, function() {
                main.pageContainer1.setPageName("QuestionPage");
                this.usernameEditor.focus();
            });
        }
    },
    
    parseLoginSVarSuccess: function(inSender, inDeprecated) {
      var data = inSender.getData();
      if (data.sessionToken) {
          app.phonegapCredentialsVar.setData({name: this.usernameEditor.getDataValue(),
                                               dataValue: data.objectId}); // datavalue is the userID
            dojo.cookie("sessionToken", data.sessionToken);
            //app.alert("sessionToken of " + data.sessionToken + " saved");
            main.pageContainer1.setPageName("QuestionPage");
      } else {
          this.parseLoginSVarError(inSender, "");
      }
      
    },

  parseLoginSVarError: function(inSender, inError) {
      alert("ERROR");
              app.toastWarning("Username and password were not validated:" + inError);

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