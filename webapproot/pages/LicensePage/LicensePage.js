dojo.declare("LicensePage", wm.Page, {
	start: function() {
        /* Button panel sometimes fails to layout on phonegap app */
		wm.job("ReflowLicensePage", 1000, this, function() {
            this.root.reflow();
            this.panel1.reflow();
            this.panel2.reflow();
		});
	},
	"preferredDevice": "phone",

	agreeButtonClick: function(inSender) {
		dojo.cookie("licenseAgreed", true, {expires: 10000});
	},
	_end: 0
});