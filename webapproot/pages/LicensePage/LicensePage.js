dojo.declare("LicensePage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "phone",

	agreeButtonClick: function(inSender) {
		dojo.cookie("licenseAgreed", true);
	},
	_end: 0
});