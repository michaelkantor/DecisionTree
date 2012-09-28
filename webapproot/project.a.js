wm.JsonRpcService.smdCache['runtimeService.smd'] = {
	"methods": [{
		"name": "delete",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToDelete",
			"type": "java.lang.Object"
		}],
		"returnType": null
	}, {
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getProperty",
		"operationType": null,
		"parameters": [{
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "type",
			"type": "java.lang.String"
		}, {
			"name": "propertyName",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.Object"
	}, {
		"name": "getRuntimeAccess",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.RuntimeAccess"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "insert",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToInsert",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "read",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "instance",
			"type": "java.lang.Object"
		}, {
			"name": "propertyOptions",
			"type": "com.wavemaker.runtime.service.PropertyOptions"
		}, {
			"name": "pagingOptions",
			"type": "com.wavemaker.runtime.service.PagingOptions"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setRuntimeAccess",
		"operationType": null,
		"parameters": [{
			"name": "runtimeAccess",
			"type": "com.wavemaker.runtime.RuntimeAccess"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}, {
		"name": "shiftDeserializedProperties",
		"operationType": null,
		"parameters": [{
			"name": "index",
			"type": "int"
		}],
		"returnType": null
	}, {
		"name": "update",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}, {
			"name": "objectToUpdate",
			"type": "java.lang.Object"
		}],
		"returnType": "com.wavemaker.runtime.service.TypedServiceReturn"
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "runtimeService.json"
};
wm.JsonRpcService.smdCache['wavemakerService.smd'] = {
	"methods": [{
		"name": "echo",
		"operationType": null,
		"parameters": [{
			"name": "contents",
			"type": "java.lang.String"
		}, {
			"name": "contentType",
			"type": "java.lang.String"
		}, {
			"name": "fileName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.server.DownloadResponse"
	}, {
		"name": "getInternalRuntime",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.server.InternalRuntime"
	}, {
		"name": "getLocalHostIP",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getServerTimeOffset",
		"operationType": null,
		"parameters": null,
		"returnType": "int"
	}, {
		"name": "getServiceEventNotifier",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
	}, {
		"name": "getServiceManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.ServiceManager"
	}, {
		"name": "getServiceWire",
		"operationType": null,
		"parameters": [{
			"name": "serviceName",
			"type": "java.lang.String"
		}, {
			"name": "typeName",
			"type": "java.lang.String"
		}],
		"returnType": "com.wavemaker.runtime.service.ServiceWire"
	}, {
		"name": "getSessionId",
		"operationType": null,
		"parameters": null,
		"returnType": "java.lang.String"
	}, {
		"name": "getTypeManager",
		"operationType": null,
		"parameters": null,
		"returnType": "com.wavemaker.runtime.service.TypeManager"
	}, {
		"name": "hostToDomain",
		"operationType": null,
		"parameters": [{
			"name": "host",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "proxyCheck",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}],
		"returnType": null
	}, {
		"name": "remoteRESTCall",
		"operationType": null,
		"parameters": [{
			"name": "remoteURL",
			"type": "java.lang.String"
		}, {
			"name": "params",
			"type": "java.lang.String"
		}, {
			"name": "method",
			"type": "java.lang.String"
		}],
		"returnType": "java.lang.String"
	}, {
		"name": "setInternalRuntime",
		"operationType": null,
		"parameters": [{
			"name": "internalRuntime",
			"type": "com.wavemaker.runtime.server.InternalRuntime"
		}],
		"returnType": null
	}, {
		"name": "setServiceEventNotifier",
		"operationType": null,
		"parameters": [{
			"name": "serviceEventNotifier",
			"type": "com.wavemaker.runtime.service.events.ServiceEventNotifier"
		}],
		"returnType": null
	}, {
		"name": "setServiceManager",
		"operationType": null,
		"parameters": [{
			"name": "serviceManager",
			"type": "com.wavemaker.runtime.service.ServiceManager"
		}],
		"returnType": null
	}, {
		"name": "setTypeManager",
		"operationType": null,
		"parameters": [{
			"name": "typeManager",
			"type": "com.wavemaker.runtime.service.TypeManager"
		}],
		"returnType": null
	}],
	"serviceType": "JSON-RPC",
	"serviceURL": "waveMakerService.json"
};
wm.types = {
	"types": {
		"boolean": {
			"internal": true,
			"primitiveType": "Boolean"
		},
		"byte": {
			"internal": true,
			"primitiveType": "Number"
		},
		"char": {
			"internal": true,
			"primitiveType": "String"
		},
		"double": {
			"internal": true,
			"primitiveType": "Number"
		},
		"float": {
			"internal": true,
			"primitiveType": "Number"
		},
		"int": {
			"internal": true,
			"primitiveType": "Number"
		},
		"java.lang.Boolean": {
			"internal": false,
			"primitiveType": "Boolean"
		},
		"java.lang.Byte": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Character": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.Double": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Float": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Integer": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Long": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.Short": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.lang.String": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.lang.StringBuffer": {
			"internal": false,
			"primitiveType": "String"
		},
		"java.math.BigDecimal": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.math.BigInteger": {
			"internal": false,
			"primitiveType": "Number"
		},
		"java.sql.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Time": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.sql.Timestamp": {
			"internal": false,
			"primitiveType": "Date"
		},
		"java.util.Date": {
			"internal": false,
			"primitiveType": "Date"
		},
		"long": {
			"internal": true,
			"primitiveType": "Number"
		},
		"short": {
			"internal": true,
			"primitiveType": "Number"
		}
	}
};
wm.Application.themeData['wm_default'] = {"wm.ToggleButton":{"border":"1","borderColor":"#333333"},"wm.ToggleButtonPanel":{"border":"1","borderColor":"#333333"},"wm.Button":{"border":"1","borderColor":"#333333","height":"32px"},"wm.Layout":{"border":"0","borderColor":"#333333"},"wm.Bevel":{"bevelSize":"10","border":"1","borderColor":"#333333"},"wm.Splitter":{"bevelSize":"4","border":"1","borderColor":"#333333"},"wm.AccordionDecorator":{"captionBorder":"1","captionBorderColor":"#333333"},"wm.AccordionLayers":{"border":"0","borderColor":"#333333","captionBorder":"2","layerBorder":"1","captionHeight":"30"},"wm.FancyPanel":{"margin":"2","border":"0","borderColor":"#999999","innerBorder":"2","labelHeight":"24"},"wm.TabLayers":{"layersType":"Tabs","margin":"0,2,0,2","clientBorder":"1","border":"0","clientBorderColor":"#999999","headerHeight":"29px","borderColor":"#999999","mobileHeaderHeight":"38px"},"wm.WizardLayers":{"margin":"0,2,0,2","border":"0","clientBorder":"1","clientBorderColor":"#333333"},"wm.Layer":{},"wm.Dialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","containerClass":"MainContent","titlebarHeight":"22"},"wm.GenericDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.RichTextDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.PageDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","noBevel":true,"containerClass":"MainContent"},"wm.DesignableDialog":{"border":"1","borderColor":"#333333","titlebarBorder":"0,0,1,0","titlebarBorderColor":"#333333","footerBorder":"1,0,0,0","footerBorderColor":"#333333","containerClass":"MainContent"},"wm.DojoMenu":{"padding":"0","border":"0","borderColor":"#333333"},"wm.List":{"margin":"0,2,0,2","border":"2","borderColor":"#333333"},"wm.dijit.ProgressBar":{"border":"0","borderColor":"#333333"},"wm.RichText":{"border":"0","borderColor":"#333333"},"wm.RoundedButton":{"border":"0","borderColor":"#333333"},"wm.DataGrid":{"border":"2","borderColor":"#333333"},"wm.Label":{},"wm.Picture":{},"wm.Spacer":{},"wm.Layers":{"border":"0"},"wm.PageContainer":{},"wm.Panel":{"borderColor":"#333333","border":"0"},"wm.CheckBoxEditor":{},"wm.CurrencyEditor":{},"wm.Text":{"border":"0"},"wm.SelectMenu":{"border":"0"},"wm.dijit.Calendar":{},"wm.DojoGrid":{"border":"1","borderColor":"#999999"},"wm.Control":{"borderColor":"#333333"},"wm.BusyButton":{"border":"1","borderColor":"#333333"},"wm.Checkbox":{"border":"0"},"wm.ColorPicker":{"border":"0"},"wm.Currency":{"border":"0"},"wm.Date":{"border":"0"},"wm.Number":{"border":"0"},"wm.RadioButton":{"border":"0"},"wm.Slider":{"border":"0"},"wm.LargeTextArea":{"border":"0"},"wm.Time":{"border":"0"},"wm.WidgetsJsDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.FileUploadDialog":{"containerClass":"MainContent","border":"1","borderColor":"#333333"},"wm.ColorPickerDialog":{"border":"1","borderColor":"#333333"},"wm.MainContentPanel":{"border":"1","borderColor":"#ffffff"},"wm.HeaderContentPanel":{"border":"1","borderColor":"#888888"},"wm.EmphasizedContentPanel":{"border":"1","borderColor":"#333333"},"wm.WidgetList":{},"wm.PopupMenuButton":{}};
dojo.declare("DecisionTree", wm.Application, {
	"dialogAnimationTime": 350, 
	"disableDirtyEditorTracking": false, 
	"eventDelay": 0, 
	"i18n": false, 
	"isSecurityEnabled": false, 
	"main": "Main", 
	"manageHistory": true, 
	"manageURL": true, 
	"name": "", 
	"phoneGapLoginPage": "Login", 
	"phoneMain": "", 
	"projectSubVersion": "Alpha9", 
	"projectVersion": 1, 
	"showIOSPhoneGapBackButton": false, 
	"studioVersion": "6.5.0.RC1", 
	"tabletMain": "", 
	"theme": "wm_default", 
	"toastPosition": "br", 
	"touchToClickDelay": 500, 
	"touchToRightClickDelay": 1500,
	"widgets": {
		silkIconList: ["wm.ImageList", {"colCount":39,"height":16,"iconCount":90,"url":"lib/images/silkIcons/silk.png","width":16}, {}], 
		"parse.com.AddRelationshipType": ["wm.TypeDefinition", {}, {}, {
			__op: ["wm.TypeDefinitionField", {"fieldName":"__op"}, {}],
			objects: ["wm.TypeDefinitionField", {"fieldName":"objects","fieldType":"parse.com.AddRelationshipType.objects","isList":true}, {}]
		}], 
		"parse.com.AddRelationshipType.objects": ["wm.TypeDefinition", {}, {}, {
			__type: ["wm.TypeDefinitionField", {"fieldName":"__type"}, {}],
			className: ["wm.TypeDefinitionField", {"fieldName":"className"}, {}],
			objectId: ["wm.TypeDefinitionField", {"fieldName":"objectId"}, {}]
		}], 
		"parse.com.CreateSessionResponse": ["wm.TypeDefinition", {}, {}, {
			createdAt: ["wm.TypeDefinitionField", {"fieldName":"createdAt"}, {}],
			objectId: ["wm.TypeDefinitionField", {"fieldName":"objectId"}, {}]
		}], 
		"parse.com.LoginResponse": ["wm.TypeDefinition", {}, {}, {
			username: ["wm.TypeDefinitionField", {"fieldName":"username"}, {}],
			phone: ["wm.TypeDefinitionField", {"fieldName":"phone"}, {}],
			createdAt: ["wm.TypeDefinitionField", {"fieldName":"createdAt"}, {}],
			updatedAt: ["wm.TypeDefinitionField", {"fieldName":"updatedAt"}, {}],
			objectId: ["wm.TypeDefinitionField", {"fieldName":"objectId"}, {}],
			sessionToken: ["wm.TypeDefinitionField", {"fieldName":"sessionToken"}, {}]
		}], 
		"parse.com.Pointer": ["wm.TypeDefinition", {}, {}, {
			__type: ["wm.TypeDefinitionField", {"fieldName":"__type"}, {}],
			className: ["wm.TypeDefinitionField", {"fieldName":"className"}, {}],
			objectId: ["wm.TypeDefinitionField", {"fieldName":"objectId"}, {}]
		}], 
		"parse.com.RegistrationResponse": ["wm.TypeDefinition", {}, {}, {
			createdAt: ["wm.TypeDefinitionField", {"fieldName":"createdAt"}, {}],
			objectId: ["wm.TypeDefinitionField", {"fieldName":"objectId"}, {}],
			sessionToken: ["wm.TypeDefinitionField", {"fieldName":"sessionToken"}, {}]
		}], 
		HistoryResponse: ["wm.TypeDefinition", {}, {}, {
			question: ["wm.TypeDefinitionField", {"fieldName":"question"}, {}],
			answer: ["wm.TypeDefinitionField", {"fieldName":"answer"}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"queryResponse","fieldType":"QueryResponse"}, {}]
		}], 
		QueryResponse: ["wm.TypeDefinition", {}, {}, {
			answer: ["wm.TypeDefinitionField", {"fieldName":"answer"}, {}],
			question: ["wm.TypeDefinitionField", {"fieldName":"question"}, {}],
			response: ["wm.TypeDefinitionField", {"fieldName":"responses","fieldType":"QueryResponse","isList":true}, {}],
			field1: ["wm.TypeDefinitionField", {"fieldName":"actionCode"}, {}]
		}], 
		"parse.com.AddMessageToSession": ["wm.XhrDefinition", {"contentType":"application/json","headers":{"X-Parse-REST-API-Key":"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC","X-Parse-Application-Id":"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr"},"parameters":{"messages":{"transmitType":0,"type":"parse.com.AddRelationshipType"},"Session":{"transmitType":"path","type":"String"}},"requestType":"PUT","returnType":"parse.com.AddRelationshipType","url":"https://api.parse.com/1/classes/","useProxy":false}, {}], 
		"parse.com.CreateMessage": ["wm.XhrDefinition", {"contentType":"application/json","headers":{"X-Parse-REST-API-Key":"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC","X-Parse-Application-Id":"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr"},"parameters":{"from":{"transmitType":0,"type":"String"},"message":{"transmitType":0,"type":"String"}},"requestType":"POST","returnType":"parse.com.CreateSessionResponse","url":"https://api.parse.com/1/classes/Message","useProxy":false}, {}], 
		"parse.com.CreateSession": ["wm.XhrDefinition", {"contentType":"application/json","headers":{"X-Parse-REST-API-Key":"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC","X-Parse-Application-Id":"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr"},"parameters":{"notes":{"transmitType":0,"type":"String","bindable":true},"score":{"transmitType":0,"type":"Number","bindable":true},"modelDiagnosis":{"transmitType":0,"type":"String","bindable":true},"intermediateDiagnosis":{"transmitType":0,"type":"String","bindable":true},"finalDiagnosis":{"transmitType":0,"type":"String","bindable":true},"patient":{"transmitType":0,"type":"parse.com.Pointer","bindable":true},"provider":{"transmitType":0,"type":"parse.com.Pointer","bindable":true},"resolved":{"transmitType":0,"type":"Boolean","bindable":true}},"requestType":"POST","returnType":"parse.com.CreateSessionResponse","url":"https://api.parse.com/1/classes/Session","useProxy":false}, {}], 
		"parse.com.Login": ["wm.XhrDefinition", {"headers":{"X-Parse-Application-Id":"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr","X-Parse-REST-API-Key":"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC"},"parameters":{"username":{"transmitType":"queryString","type":"string"},"password":{"transmitType":"queryString","type":"string"}},"returnType":"parse.com.LoginResponse","url":"https://api.parse.com/1/login","useProxy":false}, {}, {
			"parse.com.LoginResponse": ["wm.TypeDefinition", {}, {}, {
				"parse.com.LoginResponse.username": ["wm.TypeDefinitionField", {"fieldName":"username","fieldType":"string"}, {}],
				"parse.com.LoginResponse.phone": ["wm.TypeDefinitionField", {"fieldName":"phone","fieldType":"string"}, {}],
				"parse.com.LoginResponse.createdAt": ["wm.TypeDefinitionField", {"fieldName":"createdAt","fieldType":"Date"}, {}],
				"parse.com.LoginResponse.updatedAt": ["wm.TypeDefinitionField", {"fieldName":"updatedAt","fieldType":"Date"}, {}],
				"parse.com.LoginResponse.objectId": ["wm.TypeDefinitionField", {"fieldName":"objectId","fieldType":"string"}, {}],
				"parse.com.LoginResponse.sessionToken": ["wm.TypeDefinitionField", {"fieldName":"sessionToken","fieldType":"string"}, {}]
			}]
		}], 
		"parse.com.Registration": ["wm.XhrDefinition", {"contentType":"application/json","headers":{},"parameters":{"username":{"transmitType":0,"type":"string"},"password":{"transmitType":0,"type":"string"},"phone":{"transmitType":0,"type":"string"},"X-Parse-Application-Id":{"transmitType":0,"type":"string"},"X-Parse-REST-API-Key":{"transmitType":0,"type":"string"}},"requestType":"POST","returnType":"parse.com.RegistrationResponse","url":"https://api.parse.com/1/users","useProxy":false}, {}, {
			"parse.com.RegistrationResponse": ["wm.TypeDefinition", {}, {}, {
				"parse.com.RegistrationResponse.createdAt": ["wm.TypeDefinitionField", {"fieldName":"createdAt","fieldType":"Date"}, {}],
				"parse.com.RegistrationResponse.objectId": ["wm.TypeDefinitionField", {"fieldName":"objectId","fieldType":"string"}, {}],
				"parse.com.RegistrationResponse.sessionToken": ["wm.TypeDefinitionField", {"fieldName":"sessionToken","fieldType":"string"}, {}]
			}]
		}], 
		decisionTreeVar: ["wm.Variable", {"json":"{\"question\":\"When did the laceration occur?\",\"responses\":[{\"answer\":\"<3hours\",\"question\":\"Human or animal bite\",\"responses\":[{\"answer\":\"No\",\"question\":\"Location of injury?\",\"responses\":[{\"answer\":\"Head / Face \"},{\"answer\":\"Arm \",\"responses\":null,\"actionCode\":\"DispositionHomeCare\"},{\"answer\":\"Leg \",\"responses\":null,\"actionCode\":\"DispositionHomeCare\"},{\"answer\":\"Multiple Locations\",\"question\":\"Does the part work as before \",\"responses\":[{\"answer\":\"Yes\",\"responses\":null,\"actionCode\":\"DispositionHomeCare\"},{\"answer\":\"No \",\"responses\":null,\"actionCode\":\"DispositionHomeCare\"}]},{\"answer\":\"Hand\",\"question\":\"Does the part work as before \",\"responses\":[{\"answer\":\"Yes\",\"question\":\"Is there Numbness ? \",\"responses\":[{\"answer\":\"Yes\",\"question\":\"Is there a Foreign Body ? \",\"responses\":[{\"answer\":\"Yes\"},{\"answer\":\"No \"}]},{\"answer\":\"No \"}]},{\"answer\":\"No \"}],\"actionCode\":\"DispositionHomeCare\"}]},{\"answer\":\"Yes\",\"responses\":null,\"actionCode\":\"DispositionHomeCare\"}]},{\"answer\":\"=>24 hours\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"13-24 hours\",\"question\":\"Location ?\",\"responses\":[{\"answer\":\"Arm\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"Leg\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"Hand\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"Foot\",\"question\":\"Foreign Body\",\"responses\":[{\"answer\":\"Yes \",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"No \",\"question\":\"Numbness\",\"responses\":[{\"answer\":\"yes\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"},{\"answer\":\"no\",\"responses\":null,\"actionCode\":\"DispositionUrgentCare\"}]}]}]},{\"answer\":\"3-12 hours\",\"question\":\"Human or animal bite?\",\"responses\":[{\"answer\":\"Yes\",\"responses\":null,\"actionCode\":\"DispositionNextDay\"},{\"answer\":\"No\",\"question\":\"Does the part work as before\",\"responses\":[{\"answer\":\"No\",\"responses\":null,\"actionCode\":\"DispositionNextDay\"},{\"answer\":\"Yes\",\"responses\":null,\"actionCode\":\"DispositionNextDay\"}]}]}]}","type":"QueryResponse"}, {}], 
		historyVar: ["wm.Variable", {"isList":true,"type":"QueryResponse"}, {}], 
		phonegapCredentialsVar: ["wm.Variable", {"saveInPhonegap":true,"type":"EntryData"}, {}]
	},
	_end: 0
});

DecisionTree.extend({
     announcePath: function() {
         main.endLayer.activate();
         return;
         var path = [];
          var historyCount = app.historyVar.getCount();
          for (var i = 0; i < historyCount; i++) {
              var currentItem = app.historyVar.getItem(i);              
              if (currentItem.getValue("question")) {
                    path.push("Q: " + currentItem.getValue("question"));
              } else {
                  var response = currentItem.getValue("answer");
                  if (response.match(/\<img /)) {
                      ;
                  } else {
                      path.push("A: " + response);
                  }
              }
          }
          var html = "Finished interview with path:<ol><li>" + path.join("</li><li>") + "</li></ol>";
         
          //alert("Here it is...");
          app.alert(html); 
    },
	takePictureSVarSuccess: function(inSender, inDeprecated) {
      this.announcePath(inSender.getValue("dataValue"));
    },
  _end: 0
});
DecisionTree.prototype._css = 'html.WMApp body .AnswersMenu .wmlist-item {\
border: solid 1px black;\
text-align: center;\
background: -webkit-gradient(linear, center top, center bottom, from(#aaaaaa), color-stop(18%,#555555), to(#555555));\
background: -moz-linear-gradient(top, #aaaaaa 0%,#555555 18%,#555555 100%);\
background: -o-linear-gradient(top, #aaaaaa 0%,#555555 18%,#555555 100%);\
background: -ms-linear-gradient(top, #aaaaaa 0%,#555555 18%,#555555 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#aaaaaa", endColorstr="#555555",GradientType=0);\
}\
.curvedlist .wmlist-item, .inputPanel, .Question, .Answer {\
color: black !important;\
background: -webkit-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#dcdbcf), to(#b2b2aa));\
background: -moz-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -ms-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -o-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
}\
div .Answer {\
background: -webkit-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#F8F8A5), to(#D1CA76));\
background: -moz-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -ms-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -o-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
}\
.Question, .Answer {\
padding: 10px 15px;\
border: solid 1px #333;\
border-radius: 4px;\
-webkit-border-radius: 4px;\
} .NoSizeNode .wmSizeNode {\
display: block;\
} .NoSizeNode .wmSizeNode {\
display: block;\
}\
';
