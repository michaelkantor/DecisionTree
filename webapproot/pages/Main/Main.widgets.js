Main.widgets = {
	mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Cough\",\"dataValue\":\"cough\"},{\"name\":\"Cut Wound\",\"dataValue\":\"cut\"},{\"name\":\"Sore Throat\",\"dataValue\":\"throat\"}]","type":"EntryData"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["layoutBox1"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		appTitlePanel: ["wm.Panel", {"_classes":{"domNode":["appTitle"]},"border":"0,0,1,0","borderColor":"#000000","desktopHeight":"37px","enableTouchHeight":true,"height":"49px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"49px","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#448f26","endColor":"#56d524","colorStop":87}},"verticalAlign":"top","width":"100%"}, {}, {
			backButton: ["wm.MobileIconButton", {"border":"0","direction":"back","height":"100%","width":"71px"}, {"onclick":"backButtonClick"}],
			spacer2: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
			picture2: ["wm.Picture", {"aspect":"h","height":"48px","source":"resources/images/logos/mediumlogo.png","width":"48px"}, {}],
			spacer1: ["wm.Spacer", {"height":"0px","width":"100%"}, {}],
			logoutButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Logout","height":"100%","padding":"4","width":"60px"}, {"onclick":"logoutButtonClick"}],
			registerButton: ["wm.Label", {"_classes":{"domNode":["headerButton"]},"caption":"Register","height":"100%","padding":"4","width":"60px"}, {"onclick":"registerButtonClick"}]
		}],
		layers1: ["wm.Layers", {}, {"onchange":"layers1Change"}, {
			loginLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"LoginPage","subpageEventlist":{"onParseLoginSVarSuccess":"parseLoginSVar.onSuccess"},"subpageMethodlist":{},"subpageProplist":{}}, {"onParseLoginSVarSuccess":"mainMenuLayer"}]
			}],
			mainMenuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {"onSelect":"mainMenuListSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			questionsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"QuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainer1PageChanged"}]
			}],
			endLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"endLayerShow"}, {
				picture1: ["wm.Picture", {"height":"59px","source":"resources/images/doctorcroppedsmall.png","width":"55px"}, {}],
				endHtmlPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"79px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10","verticalAlign":"top","width":"100%"}, {}, {
					endHtml: ["wm.Html", {"_classes":{"domNode":["Question","curvedlist","NoSizeNode"]},"autoScroll":false,"autoSizeHeight":true,"height":"59px","html":"You suck\n<hr/>\nI suck more","minDesktopHeight":15}, {}]
				}]
			}]
		}],
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"_classes":{"domNode":["NoRadius"]},"height":"68px","horizontalAlign":"left","mobileHeight":"68px","styles":{"fontSize":""},"verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"button1","targetProperty":"currentButton"}, {}]
			}],
			button4: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}],
			button1: ["wm.Button", {"_classes":{"domNode":["BottomButton","button1","button1"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/stethascope.png'/><br/>Exam Room","height":"100%","margin":"0","styles":{"fontSize":"","backgroundGradient":"","backgroundColor":""},"width":"100%"}, {}],
			togglePanelButton1: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"caption":"<img src='resources/images/buttons/heart.png'/><br/>Care Packs","height":"100%","margin":"0","width":"100%"}, {}],
			button2: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/profile.png'/><br/>Profile","height":"100%","margin":"0","width":"100%"}, {}],
			button3: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/settings.png'/><br/>Settings","height":"100%","margin":"0","width":"100%"}, {}],
			button5: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}]
		}]
	}]
}