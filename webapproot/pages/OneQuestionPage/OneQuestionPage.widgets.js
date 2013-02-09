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
	parseUserPointer: ["wm.Variable", {"type":"parse.com.Pointer"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":"\"Pointer\"","targetProperty":"dataSet.__type"}, {}],
			wire1: ["wm.Wire", {"expression":"\"_User\"","targetProperty":"dataSet.className"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"app.phonegapCredentialsVar.dataValue","targetProperty":"dataSet.objectId"}, {}]
		}]
	}],
	messageRelationshipVar: ["wm.Variable", {"type":"parse.com.AddRelationshipType"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"messageRelationshipsObjectsVar","targetProperty":"dataSet.objects"}, {}],
			wire1: ["wm.Wire", {"expression":"\"AddRelation\"","targetProperty":"dataSet.__op"}, {}]
		}]
	}],
	messageRelationshipsObjectsVar: ["wm.Variable", {"isList":true,"type":"parse.com.AddRelationshipType.objects"}, {}],
	updateSessionLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"update","startUpdate":false,"type":"com.genushealthdb.data.UserSessions"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire3: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.updatedAt"}, {}],
			wire: ["wm.Wire", {"expression":undefined,"source":"createSessionLVar.sessionId","targetProperty":"sourceData.sessionId"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.UserSessions","view":[{"caption":"Feedback","sortable":true,"dataIndex":"feedback","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	createMessageLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeAll","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.Messages"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.Messages","view":[{"caption":"MessageId","sortable":true,"dataIndex":"messageId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Sender","sortable":true,"dataIndex":"sender","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null},{"caption":"Text","sortable":true,"dataIndex":"text","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":2,"subType":null},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":3,"subType":null},{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":4,"subType":null}]}, {}]
	}],
	createSessionLVar: ["wm.LiveVariable", {"autoUpdate":false,"inFlightBehavior":"executeLast","operation":"insert","startUpdate":false,"type":"com.genushealthdb.data.UserSessions"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire1: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.createdAt"}, {}],
			wire2: ["wm.Wire", {"expression":undefined,"source":"[main].mainMenuList.selectedItem.name","targetProperty":"sourceData.conditionType"}, {}],
			wire3: ["wm.Wire", {"expression":"new Date()","targetProperty":"sourceData.updatedAt"}, {}],
			wire: ["wm.Wire", {"expression":"${parseUserPointer.objectId} || \"Unregistered User\"","targetProperty":"sourceData.patientId"}, {}]
		}],
		liveView: ["wm.LiveView", {"dataType":"com.genushealthdb.data.UserSessions","view":[{"caption":"Feedback","sortable":true,"dataIndex":"feedback","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":6,"subType":null},{"caption":"SessionId","sortable":true,"dataIndex":"sessionId","type":"java.lang.Integer","displayType":"Number","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":1000,"subType":null,"widthUnits":"px"},{"caption":"ConditionType","sortable":true,"dataIndex":"conditionType","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1001,"subType":null,"widthUnits":"px"},{"caption":"ModelDiagnosis","sortable":true,"dataIndex":"modelDiagnosis","type":"java.lang.String","displayType":"Text","required":false,"readonly":false,"includeLists":true,"includeForms":true,"order":1002,"subType":null,"widthUnits":"px"},{"caption":"PatientId","sortable":true,"dataIndex":"patientId","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1003,"subType":null,"widthUnits":"px"},{"caption":"CreatedAt","sortable":true,"dataIndex":"createdAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1004,"subType":null,"widthUnits":"px"},{"caption":"UpdatedAt","sortable":true,"dataIndex":"updatedAt","type":"java.util.Date","displayType":"Date","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1005,"subType":null,"widthUnits":"px"}]}, {}]
	}],
	layoutBox1: ["wm.Layout", {"autoScroll":false,"horizontalAlign":"left","styles":{"backgroundGradient":""},"verticalAlign":"top"}, {}, {
		panel: ["wm.Panel", {"autoScroll":true,"height":"100%","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
			drGenusPicturePanel2: ["wm.Panel", {"_classes":{"domNode":["drgenus"]},"border":"2","borderColor":"#808385","height":"76px","horizontalAlign":"left","layoutKind":"left-to-right","margin":"2,10","padding":"10","styles":{"backgroundGradient":""},"verticalAlign":"top","width":"100%"}, {}, {
				drGenusPicture2: ["wm.Picture", {"aspect":"h","borderColor":"","height":"45px","source":"resources/images/drgenus.png","width":"100%"}, {}]
			}],
			questionLabelPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"78px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				questionLabelPanel1: ["wm.Panel", {"fitToContentHeight":true,"height":"76px","horizontalAlign":"left","verticalAlign":"top","width":"100%"}, {}, {
					upArrow: ["wm.Label", {"_classes":{"domNode":["topArrow"]},"caption":"","margin":"0,0,0,60","padding":"4","styles":{"backgroundColor":""},"width":"84px"}, {}],
					questionLabel: ["wm.Label", {"_classes":{"domNode":["Question"]},"autoSizeHeight":true,"border":"8","borderColor":"#323232","height":"50px","margin":"0,10,10,10","padding":"12","singleLine":false,"styles":{"backgroundColor":"#f8f8f8"},"width":"100%"}, {}, {
						binding: ["wm.Binding", {}, {}, {
							wire: ["wm.Wire", {"expression":undefined,"source":"currentQuestionVar.question","targetProperty":"caption"}, {}]
						}]
					}]
				}]
			}],
			responseListPanel: ["wm.Panel", {"fitToContentHeight":true,"height":"87px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"bottom","width":"100%"}, {}, {
				responseList: ["wm.List", {"_classes":{"domNode":["AnswersMenu","MobileListStyle","ButtonList","responseList"]},"autoSizeHeight":true,"border":"1","borderColor":"#cccccc","columns":[{"show":true,"field":"answer","title":"Answer","width":"100%","mobileColumn":false},{"show":false,"field":"question","title":"Question","width":"100%","mobileColumn":false},{"show":false,"field":"MOBILE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","isCustomField":true,"mobileColumn":false},{"show":false,"field":"actionCode","title":"ActionCode","width":"100%","align":"left","formatFunc":"","mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>Answer: \" + ${answer} + \"</div>\"\n","mobileColumn":false},{"show":false,"field":"nodeId","title":"NodeId","width":"80px","displayType":"Number","align":"left","formatFunc":""}],"headerVisible":false,"height":"20px","margin":"0,0,6,0","minDesktopHeight":60,"padding":"5,10,5,10","renderVisibleRowsOnly":false,"styleAsGrid":false,"styles":{"backgroundGradient":""}}, {"onSelect":"responseListSelect","onStyleRow":"responseListStyleRow"}, {
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