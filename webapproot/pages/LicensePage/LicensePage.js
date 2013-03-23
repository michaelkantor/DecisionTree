dojo.declare("LicensePage", wm.Page, {
	start: function() {
        /* Button panel sometimes fails to layout on phonegap app */
	    wm.job("FixLicenseButtons", 1000, this, function() {
		this.panel2.setPadding("1");
	    });
	},
	"preferredDevice": "phone",

	agreeButtonClick: function(inSender) {
		dojo.cookie("licenseAgreed", true, {expires: 10000});
	},
	_end: 0
});