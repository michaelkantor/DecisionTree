Main.widgets = {
	getConditionsQuerySVar: ["wm.ServiceVariable", {"operation":"getConditionsQuery","saveInPhonegap":true,"service":"GenusHealthDB","startUpdate":true}, {}, {
		input: ["wm.ServiceInput", {"type":"getConditionsQueryInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"window[\"studio\"] || app.isTestVersion ? 1 : 2","targetProperty":"status"}, {}]
			}]
		}]
	}],
	getJsonLVar: ["wm.LiveVariable", {"autoUpdate":false,"maxResults":1,"orderBy":"desc: modifiedAt","startUpdate":false,"type":"com.genushealthdb.data.Jsonfiles"}, {"onSuccess":"getJsonLVarSuccess"}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"mainMenuList.selectedItem.name","targetProperty":"filter.name"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Jsonfiles","view":[{"caption":"FileId","sortable":true,"dataIndex":"fileId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.sql.Clob","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Name","sortable":true,"dataIndex":"name","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"ModifiedAt","sortable":true,"dataIndex":"modifiedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}],
		selectedItem: ["wm.Variable", {"type":"com.genushealthdb.data.Jsonfiles"}, {}]
	}],
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
		layers1: ["wm.Layers", {"defaultLayer":1,"styles":{"backgroundColor":"","backgroundImage":"url(resources/images/pattern.png)","backgroundRepeat":"repeat"}}, {"onchange":"layers1Change"}, {
			loginLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer2: ["wm.PageContainer", {"deferLoad":true,"pageName":"LoginPage","subpageEventlist":{"onParseLoginSVarSuccess":"parseLoginSVar.onSuccess"},"subpageMethodlist":{},"subpageProplist":{}}, {"onParseLoginSVarSuccess":"mainMenuLayer"}]
			}],
			mainMenuLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				mainMenuList: ["wm.List", {"_classes":{"domNode":["MobileListStyle","ButtonList"]},"border":"0","columns":[{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>Name: \" + ${name} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"nodegroupId","title":"NodegroupId","width":"80px","align":"left","formatFunc":"","mobileColumn":false},{"show":true,"field":"name","title":"Name","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"status","title":"Status","width":"80px","align":"left","formatFunc":"","mobileColumn":false}],"headerVisible":false,"height":"100%","isNavigationMenu":true,"margin":"10","minDesktopHeight":60,"padding":"4","styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"mainMenuListSelect"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"getConditionsQuerySVar","targetProperty":"dataSet"}, {}]
					}]
				}]
			}],
			questionsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				questionsPageContainer: ["wm.PageContainer", {"deferLoad":true,"margin":"4","pageName":"OneQuestionPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {"onPageChanged":"questionsPageContainerPageChanged"}]
			}],
			diagnosisLayer: ["wm.Layer", {"autoScroll":true,"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {"onShow":"diagnosisLayerShow"}, {
				diagnosisPanel: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"center","verticalAlign":"top","width":"100%"}, {}, {
					drGenusPicturePanel2: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
						drGenusPicture2: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
					}],
					questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"78px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						questionLabelPanel4: ["wm.Panel", {"fitToContentHeight":true,"height":"76px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							upArrow: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
							dispositionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","caption":"","height":"50px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}]
						}]
					}],
					endHtml: ["wm.Html", {"_classes":{"domNode":["NoSizeNode"]},"autoScroll":false,"autoSizeHeight":true,"borderColor":"#cccccc","height":"52px","html":"Synopsis","margin":"0,10,10,10","minDesktopHeight":15,"padding":"12","styles":{"color":"#036fad"}}, {}],
					chatWithDrButton: ["wm.Button", {"caption":"Talk to Nurse Online","height":"40px","margin":"4","showing":false,"width":"151px"}, {"onclick":"chatLayer"}],
					wrapupLabel: ["wm.Label", {"_classes":{"domNode":["Question","curvedlist"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","caption":"Feedback helps us improve our service: was this information helpful?","height":"62px","margin":"0,10,10,10","padding":"12","singleLine":false,"width":"100%"}, {}],
					feedbackUseAgainEditorPanel: ["wm.Panel", {"desktopHeight":"91px","enableTouchHeight":true,"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"100px","verticalAlign":"top","width":"346px"}, {}, {
						label1: ["wm.Label", {"caption":"Did this save you a trip to the doctor?","height":"100%","padding":"30,0,0,5","singleLine":false}, {}],
						feedbackUseAgainEditor: ["wm.RadioSet", {"caption":undefined,"captionSize":"60%","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","editorBorder":false,"height":"100%","options":"Yes,No","width":"114px"}, {"onchange":"saveFeedback"}]
					}],
					feedbackUseAgainEditorPanel1: ["wm.Panel", {"desktopHeight":"91px","enableTouchHeight":true,"height":"100px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"100px","verticalAlign":"top","width":"316px"}, {}, {
						label2: ["wm.Label", {"caption":"Would you use this service again?","height":"100%","padding":"30,0,0,5","singleLine":false}, {}],
						feedbackSaveTripEditor: ["wm.RadioSet", {"caption":undefined,"captionSize":"60%","dataField":"dataValue","dataValue":undefined,"displayField":"dataValue","displayValue":"","editorBorder":false,"height":"100%","options":"Yes,No","width":"114px"}, {"onchange":"saveFeedback"}]
					}],
					facebookLikeButton: ["wm.gadget.FacebookLikeButton", {"action":"recommend","font":"segoe ui","href":"http://genushealth.cloudfoundry.com"}, {}]
				}]
			}],
			endLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				panel2: ["wm.Panel", {"autoScroll":true,"borderColor":"","height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					drGenusPicturePanel1: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
						drGenusPicture1: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
					}],
					questionLabelPanel2: ["wm.Panel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
						questionLabelPanel5: ["wm.Panel", {"fitToContentHeight":true,"height":"89px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
							upArrow1: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
							dispositionLabel2: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","caption":"Thank you for your feedback!","height":"63px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}]
						}]
					}]
				}]
			}],
			carePackLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer1: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			profilesLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer3: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			settingsLayer: ["wm.Layer", {"borderColor":"","caption":"layer1","horizontalAlign":"left","themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer4: ["wm.PageContainer", {"deferLoad":true,"pageName":"NotImplementedPage","subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}],
			chatLayer: ["wm.Layer", {"borderColor":"","caption":"Chat","horizontalAlign":"left","showing":false,"themeStyleType":"","verticalAlign":"top"}, {}, {
				pageContainer5: ["wm.PageContainer", {"deferLoad":true,"subpageEventlist":{},"subpageMethodlist":{},"subpageProplist":{}}, {}]
			}]
		}],
		toggleButtonPanel1: ["wm.ToggleButtonPanel", {"_classes":{"domNode":["NoRadius"]},"desktopHeight":"68px","height":"68px","horizontalAlign":"left","mobileHeight":"68px","styles":{"fontSize":""},"verticalAlign":"top"}, {"onChange":"toggleButtonPanel1Change"}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"examRoomTglBtn","targetProperty":"currentButton"}, {}]
			}],
			examRoomTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","styles":{"fontSize":"","backgroundGradient":"","backgroundColor":""},"width":"100%"}, {"onclick":"examRoomTglBtnClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${examRoomTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/scope.png'/><br/>Exam Room\"","targetProperty":"caption"}, {}]
				}]
			}],
			carePacksTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"carePackLayer"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${carePacksTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/heart.png'/><br/>Care Packs\"","targetProperty":"caption"}, {}]
				}]
			}],
			profileTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"profilesLayer"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${profileTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/person.png'/><br/>Profile\"","targetProperty":"caption"}, {}]
				}]
			}],
			settingsTglBtn: ["wm.Button", {"_classes":{"domNode":["BottomButton"]},"border":"0,1,0,1","height":"100%","margin":"0","width":"100%"}, {"onclick":"settingsLayer"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"\"<img src='resources/images/buttons/bottombar/\" + (${settingsTglBtn.clicked} ? \"selected\" : \"unselected\") + \"/gear.png'/><br/>Settings\"","targetProperty":"caption"}, {}]
				}]
			}],
			button5: ["wm.Button", {"border":"0,1,0,0","height":"100%","margin":"0","showing":false,"width":"100%"}, {}]
		}]
	}]
}