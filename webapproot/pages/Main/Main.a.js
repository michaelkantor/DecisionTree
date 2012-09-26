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

Main.widgets = {
layoutBox1: ["wm.Layout", {"_classes":{"domNode":["layoutBox1"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
appTitlePanel: ["wm.Panel", {"_classes":{"domNode":["appTitle"]},"border":"0,0,1,0","borderColor":"#000000","desktopHeight":"37px","enableTouchHeight":true,"height":"49px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"49px","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#448f26","endColor":"#56d524","colorStop":87}},"verticalAlign":"top","width":"100%"}, {}, {
backButton: ["wm.MobileIconButton", {"border":"0","direction":"back","height":"100%","width":"71px"}, {"onclick":"pageContainer1.page.priorQuestion"}, {
binding: ["wm.Binding", {}, {}, {
wire: ["wm.Wire", {"expression":"${app.historyVar.count} <= 1","targetProperty":"disabled"}, {}]
}]
}],
spacer2: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
picture2: ["wm.Picture", {"aspect":"h","height":"48px","source":"resources/images/logos/mediumlogo.png","width":"48px"}, {}],
spacer1: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
logoutButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Logout","height":"100%","padding":"4","width":"60px"}, {"onclick":"logoutButtonClick"}],
registerButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Register","height":"100%","padding":"4","width":"60px"}, {"onclick":"registerButtonClick"}]
}],
pageContainer1: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"QuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainer1PageChanged"}]
}]
};

Main.prototype._cssText = '';
Main.prototype._htmlText = '';