dojo.declare("LicensePage", wm.Page, {
	start: function() {
		
	},
	"preferredDevice": "phone",

	agreeButtonClick: function(inSender) {
		dojo.cookie("licenseAgreed", true, {expires: 10000});
	},
	_end: 0
});