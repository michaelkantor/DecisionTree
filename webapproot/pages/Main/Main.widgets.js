Main.widgets = {
	mainMenuVar: ["wm.Variable", {"isList":true,"json":"[{\"name\":\"Cough\",\"dataValue\":\"cough\"},{\"name\":\"Cut Wound\",\"dataValue\":\"cut\"},{\"name\":\"Sore Throat\",\"dataValue\":\"throat\"}]","type":"EntryData"}, {}],
	layoutBox1: ["wm.Layout", {"_classes":{"domNode":["layoutBox1"]},"horizontalAlign":"left","styles":{},"verticalAlign":"top"}, {}, {
		headerPanel: ["wm.Panel", {"height":"48px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":{"direction":"vertical","startColor":"#525252","endColor":"#1d1d1d","colorStop":76},"backgroundColor":""},"verticalAlign":"top","width":"100%"}, {}, {
			spacer3: ["wm.Spacer", {"height":"1px","width":"100%"}, {}],
			titleLabel: ["wm.Label", {"align":"center","caption":"Exam Room","height":"100%","padding":"4","styles":{"color":"#ffffff","fontWeight":"bold","fontSize":"13px"},"width":"100px"}, {}],
			panel1: ["wm.Panel", {"height":"100%","horizontalAlign":"right","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				backAndForthPanel: ["wm.Panel", {"_classes":{"domNode":["BackAndForthToggleButtonPanel","backAndForthTogglePanel"]},"border":"1","borderColor":"","height":"35px","horizontalAlign":"left","layoutKind":"left-to-right","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100px"}, {}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":"Boolean(window[\"Studio\"])","targetProperty":"showing"}, {}]
					}],
					backButton: ["wm.Button", {"_classes":{"domNode":["StrongLeftRadius"]},"border":"0,1,0,0","caption":undefined,"height":"100%","iconHeight":"28px","iconUrl":"resources/images/buttons/left.png","iconWidth":"24px","margin":"0","padding":"0,0,0,10","width":"100%"}, {"onclick":"backButtonClick"}],
					togglePanelButton1: ["wm.Button", {"_classes":{"domNode":["StrongRightRadius"]},"border":"0","caption":undefined,"height":"100%","iconHeight":"28px","iconUrl":"resources/images/buttons/right.png","iconWidth":"24px","margin":"0","padding":"0,0,0,15","width":"100%"}, {}]
				}]
			}]
		}],
		layers1: ["wm.Layers", {"styles":{"backgroundColor":"","backgroundImage":"url(resources/images/pattern.png)","backgroundRepeat":"repeat"}}, {"onchange":"layers1Change"}, {
			loginLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"LoginPage","subpageEventlist":{"onParseLoginSVarSuccess":"parseLoginSVar.onSuccess"},"subpageMethodlist":{},"subpageProplist":{}}, {"onParseLoginSVarSuccess":"mainMenuLayer"}]
			}],
			mainMenuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","ButtonList"]},"border":"0","columns":[{"show":true,"field":"name","title":"Name","width":"100%","align":"center","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"dataValue","title":"DataValue","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"0","minDesktopHeight":60,"styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"mainMenuListSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuVar","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			questionsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"OneQuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"pageContainer1PageChanged"}]
			}],
			endLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"endLayerShow"}, {
				panel: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					drGenusPicturePanel: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
						drGenusPicture: ["wm.Picture", {"aspect":"h","height":"56px","source":"resources/images/drgenus.png","width":"100%"}, {}]
					}],
					questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"95px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						questionLabelPanel1: ["wm.Panel", {"borderColor":"","fitToContentHeight":true,"height":"95px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							upArrowBubblePicture: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftDown"]},"height":"21px","margin":"0,0,0,15","source":"resources/images/bubblearrowup.png","width":"36px"}, {}],
							dispositionLabel: ["wm.Label", {"_classes":{"domNode":["Question","curvedlist","NoSizeNode"]},"border":"1","borderColor":"#cccccc","caption":"","margin":"0,10,10,10","padding":"12","width":"100%"}, {}],
							endHtml: ["wm.Html", {"_classes":{"domNode":["NoSizeNode"]},"autoScroll":false,"autoSizeHeight":true,"borderColor":"#cccccc","height":"50px","html":"Synopsis","margin":"0,10,10,10","minDesktopHeight":15,"padding":"12","styles":{"color":"#036fad"}}, {}]
						}]
					}]
				}]
			}]
		}],
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"_classes":{"domNode":["NoRadius"]},"desktopHeight":"68px","height":"68px","horizontalAlign":"left","mobileHeight":"68px","styles":{"fontSize":""},"verticalAlign":"top"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"examRoomTglBtn","targetProperty":"currentButton"}, {}]
			}],
			examRoomTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/stethascope.png'/><br/>Exam Room","height":"100%","margin":"0","styles":{"fontSize":"","backgroundGradient":"","backgroundColor":""},"width":"100%"}, {}],
			carePacksTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"caption":"<img src='resources/images/buttons/heart.png'/><br/>Care Packs","height":"100%","margin":"0","width":"100%"}, {}],
			profileTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/profile.png'/><br/>Profile","height":"100%","margin":"0","width":"100%"}, {}],
			settingsTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,0","caption":"<img src='resources/images/buttons/settings.png'/><br/>Settings","height":"100%","margin":"0","width":"100%"}, {}],
			button5: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}]
		}]
	}]
}