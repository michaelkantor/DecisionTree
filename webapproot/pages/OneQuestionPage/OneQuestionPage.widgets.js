OneQuestionPage.widgets = {
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
	createSessionSVar: ["wm.ServiceVariable", {"operation":"parse.com.CreateSession","service":"xhrService"}, {"onSuccess":"createSessionSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parse.com.CreateSessionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"patient.objectId"}, {}],
				wire3: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"patient.__type"}, {}],
				wire4: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"patient.className"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"parseUserPointer","targetProperty":"patient"}, {}],
				wire6: ["wm.Wire", {"expression":"\"test\"","targetProperty":"notes"}, {}],
				wire7: ["wm.Wire", {"expression":"\"none\"","targetProperty":"modelDiagnosis"}, {}],
				wire8: ["wm.Wire", {"expression":"\"none\"","targetProperty":"intermediateDiagnosis"}, {}],
				wire9: ["wm.Wire", {"expression":"\"none\"","targetProperty":"finalDiagnosis"}, {}],
				wire10: ["wm.Wire", {"expression":"1","targetProperty":"score"}, {}]
			}]
		}]
	}],
	addMessagesToSessionSVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"parse.com.AddMessageToSession","service":"xhrService"}, {}, {
		input: ["wm.ServiceInput", {"type":"parse.com.AddMessageToSessionInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire1: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"createSessionSVar.objectId","targetProperty":"objectId"}, {}],
				wire3: ["wm.Wire", {"expression":undefined,"source":"createSessionSVar.objectId","targetProperty":"GameScore"}, {}],
				wire4: ["wm.Wire", {"expression":undefined,"source":"messageRelationshipVar","targetProperty":"messages"}, {}],
				wire5: ["wm.Wire", {"expression":undefined,"source":"createSessionSVar.objectId","targetProperty":"Session"}, {}]
			}]
		}]
	}],
	parseUserPointer: ["wm.Variable", {"type":"parse.com.Pointer"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"dataSet.__type"}, {}],
			wire1: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"dataSet.className"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"dataSet.objectId"}, {}]
		}]
	}],
	createMessageSVar: ["wm.ServiceVariable", {"inFlightBehavior":"executeAll","operation":"parse.com.CreateMessage","service":"xhrService"}, {"onSuccess":"createMessageSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parse.com.CreateMessageInputs"}, {}]
	}],
	messageRelationshipVar: ["wm.Variable", {"type":"parse.com.AddRelationshipType"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"messageRelationshipsObjectsVar","targetProperty":"dataSet.objects"}, {}],
			wire1: ["wm.Wire", {"expression":"\"AddRelation\"","targetProperty":"dataSet.__op"}, {}]
		}]
	}],
	messageRelationshipsObjectsVar: ["wm.Variable", {"isList":true,"type":"parse.com.AddRelationshipType.objects"}, {}],
	layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","styles":{"backgroundGradient":""},"verticalAlign":"top"}, {}, {
		panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			drGenusPicturePanel: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
				drGenusPicture: ["wm.Picture", {"aspect":"h","height":"56px","source":"resources/images/drgenus.png","width":"100%"}, {}]
			}],
			questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				questionLabelPanel1: ["wm.Panel", {"fitToContentHeight":true,"height":"57px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					upArrowBubblePicture: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftDown"]},"height":"21px","margin":"0,0,0,15","source":"resources/images/bubblearrowup.png","width":"36px"}, {}],
					questionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","height":"36px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.question","targetProperty":"caption"}, {}]
						}]
					}]
				}]
			}],
			responseListPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"85px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
				responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle","ButtonList","responseList"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":false}],"headerVisible":false,"height":"20px","margin":"0,0,6,0","minDesktopHeight":60,"padding":"5,10,5,10","renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
					binding: ["wm.Binding", {}, {}, {
						wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.responses","targetProperty":"dataSet"}, {}]
					}]
				}],
				picture2Panel: ["wm.Panel", {"_classes":{"domNode":["OverflowNotHidden"]},"height":"85px","horizontalAlign":"left","verticalAlign":"top","width":"64px"}, {}, {
					picture4: ["wm.Picture", {"_classes":{"domNode":["OverflowNotHidden","ShiftLeft"]},"height":"21px","source":"resources/images/bubblearrowright.png","width":"21px"}, {}],
					picture2: ["wm.Picture", {"height":"64px","source":"resources/images/patientcircle.png","width":"100%"}, {}]
				}]
			}]
		}],
		inputPanel: ["wm.Panel", {"_classes":{"domNode":["inputPanel"]},"border":"1,0,0,0","desktopHeight":"38px","disabled":true,"enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","padding":"2,5","showing":false,"verticalAlign":"top","width":"100%"}, {}, {
			picture1: ["wm.Picture", {"height":"62px","source":"resources/images/patientcircle.png","width":"49px"}, {}],
			messageInput: ["wm.Text", {"borderColor":"#000000","caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","padding":"0","width":"100%"}, {"onEnterKeyPress":"sendMessage"}],
			sendButton: ["wm.Button", {"caption":"Send","height":"100%","margin":"0,0,0,4"}, {"onclick":"sendMessage"}]
		}]
	}]
}