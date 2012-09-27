QuestionPage.widgets = {
	currentQuestionVar: ["wm.Variable", {"json":"{\"answer\":\"Response to last question goes here\",\"question\":\"Current question goes here\",\"responses\":[{\"answer\":\"Answer number 1 goes here\",\"responses\":null},{\"answer\":\"Answer number 2 goes here\",\"responses\":null},{\"answer\":\"Answer number 3 goes here\",\"responses\":null}]}","type":"QueryResponse"}, {"onSetData":"currentQuestionVarSetData"}],
	designTimeSampleData: ["wm.Variable", {"json":"{\"answer\":\"Response to last question goes here\",\"question\":\"Current question goes here\",\"responses\":[{\"answer\":\"Answer number 1 goes here\",\"responses\":null},{\"answer\":\"Answer number 2 goes here\",\"responses\":null},{\"answer\":\"Answer number 3 goes here\",\"responses\":null}]}","type":"QueryResponse"}, {"onSetData":"designTimeSampleDataSetData"}],
	qaCompleteNav: ["wm.NavigationCall", {"operation":"gotoPage"}, {}, {
		input: ["wm.ServiceInput", {"type":"gotoPageInputs"}, {}]
	}],
	cameraQuestion: ["wm.Variable", {"json":"{\"question\":\"Do you want to use your phone to take a picture of the medical condition?\",\"responses\":[{\"answer\":\"Yes, take a picture for the nurse\",\"question\":\"\"},{\"answer\":\"No, send without picture\",\"question\":\"\"}]}","type":"QueryResponse"}, {}],
	cameraSVar: ["wm.PhoneGapCall", {"operation":"capture_picture"}, {"onError":"announcePath","onSuccess":"cameraSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"capture_pictureInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"Camera\"","targetProperty":"sourceType"}, {}]
			}]
		}]
	}],
	createSessionSVar: ["wm.ServiceVariable", {"operation":"parse.com.CreateSession","service":"xhrService","startUpdate":true}, {"onSuccess":"createSessionSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parse.com.CreateSessionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"patient.objectId"}, {}],
				wire3: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"patient.__type"}, {}],
				wire4: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"patient.className"}, {}]
			}]
		}]
	}],
	addMessagesToSessionSVar: ["wm.ServiceVariable", {"operation":"parse.com.AddMessageToSession","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"parse.com.AddMessageToSessionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"createSessionSVar.objectId","targetProperty":"objectId"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			historyList: ["wm.List", {"_classes":{"domNode":["curvedlist","MobileListStyle"]},"autoSizeHeight":true,"border":"0","columns":[{"show":false,"field":"picture","title":"Picture","width":"40px","align":"left","formatFunc":"wm_image_formatter","formatProps":{"prefix":"resources/images/","height":43},"expression":"","isCustomField":true,"mobileColumn":false},{"show":true,"field":"answer","title":"Answer","width":"100%","editorProps":{"restrictValues":true},"expression":"\n\nif (${question}) {\n\"<img class='Avatar' src='resources/images/doctorcroppedsmall.png'/><div class='Question'>\" + ${question} + \"</div>\";\n} else if (${answer}) {\n\"<img class='Avatar' src='resources/images/patientsmall.png'/><div class='Answer'>\" + ${answer} + \"</div>\";\n} else {\n  \"<img class='Avatar' src='resources/images/doctorcroppedsmall.png'/><img src='resources/images/spinner.gif' style='width:60%'>\";\n}","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"","mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false}],"headerVisible":false,"height":"4px","manageHistory":false,"margin":"0,2,2,2","minDesktopHeight":60,"renderVisibleRowsOnly":false,"styleAsGrid":false}, {"onSelect":"historyListSelect","onStyleRow":"historyListStyleRow"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"app.historyVar","targetProperty":"dataSet"}, {}]
				}]
			}],
			answersLabel: ["wm.Label", {"caption":"Answers","height":"20px","padding":"4","width":"100%"}, {}],
			responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle"]},"autoSizeHeight":true,"border":"0","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","displayType":"String","align":"left","formatFunc":""},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":true}],"headerVisible":false,"height":"139px","margin":"0,20,0,20","minDesktopHeight":60,"renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.responses","targetProperty":"dataSet"}, {}]
				}]
			}]
		}],
		inputPanel: ["wm.Panel", {"_classes":{"domNode":["inputPanel"]},"border":"1,0,0,0","desktopHeight":"38px","disabled":true,"enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","padding":"2,5","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"aspect":"h","height":"100%","source":"resources/images/dog.gif","width":"60px"}, {}],
			messageInput: ["wm.Text", {"borderColor":"#000000","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","padding":"0","width":"100%"}, {"onEnterKeyPress":"sendMessage"}],
			sendButton: ["wm.Button", {"caption":"Send","height":"100%","margin":"0,0,0,4"}, {"onclick":"sendMessage"}]
		}]
	}]
}