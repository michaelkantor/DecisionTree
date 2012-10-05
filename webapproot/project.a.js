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
	"projectSubVersion": "Alpha15", 
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
		decisionTreeVar: ["wm.Variable", {"json":"{\n    \"question\": \"When did you get cut?\",\n\t\"responses\": [{\n\t\t\"answer\": \"Less than 3 hours ago\",\n\t\t\"question\": \"Is this related to a human or animal bite?\",\n\t\t\"responses\": [{\n\t\t\t\"answer\": \"No\",\n\t\t\t\"question\": \"Where on the body is the cut?\",\n\t\t\t\"responses\": [{\n\t\t\t\t\"answer\": \"Head or Face \",\n\t\t\t\t\"responses\": null,\n\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t}, {\n\t\t\t\t\"answer\": \"Arm \",\n\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\"responses\": [{\n\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t}]\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t}]\n\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"Leg \",\n\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}]\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"Multiple Locations\",\n\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, ]\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"Hand\",\n\t\t\t\t\t\t\"question\": \"Does the part where the cut is work as before? \",\n\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t},\n\n\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutHomeCare\"\n\t\t\t\t\t}]\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\"actionCode\": \"DispositionCutBiteNoSuturesUrgentCare\"\n\t\t\t\t}, ]\n\t\t\t}, {\n\t\t\t\t\"answer\": \"Over 24 hours ago\",\n\t\t\t\t\"question\": \"Is this related to a human or animal bite?\",\n\t\t\t\t\"responses\": [{\n\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\"actionCode\": \"DispositionCutBiteNoSutureUrgentCare\"\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"No\",\n\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\"actionCode\": \"DispositionCutHomeCare\"\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"About 13 to 24 hours ago\",\n\t\t\t\t\t\"question\": \"Where on the body is the cut?\",\n\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\"answer\": \"Head or Face \",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\t\t\t\t\t},\n\n\t\t\t\t\t{\n\t\t\t\t\t\t\"answer\": \"Arm\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"Leg\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"Hand\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutHomeCare\"\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"Foot\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutHomeCare\"\n\t\t\t\t\t}, ]\n\t\t\t\t}, {\n\t\t\t\t\t\"answer\": \"About 3 to 12 hours ago\",\n\t\t\t\t\t\"question\": \"Is this related to a human or animal bite?\",\n\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\"actionCode\": \"DispositionCutBiteNoSutureUrgentCare\"\n\t\t\t\t\t}, {\n\t\t\t\t\t\t\"answer\": \"No\",\n\t\t\t\t\t\t\"question\": \"Where on the body is the cut?\",\n\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\"answer\": \"Head or Face \",\n\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\"answer\": \"Arm \",\n\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\"answer\": \"Leg \",\n\t\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"Multiple Locations\",\n\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\"answer\": \"Hand\",\n\t\t\t\t\t\t\t\t\t\"question\": \"Does the part where the cut is work as before? \",\n\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\"question\": \"Is there any numbness beyond the cut? \",\n\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\"question\": \"Do you think there is any type of foreign body (gravel, dirt, glass, etc) in the cut? \",\n\t\t\t\t\t\t\t\t\t\t\t\"responses\": [{\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"Yes\",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, {\n\t\t\t\t\t\t\t\t\t\t\t\t\"answer\": \"No \",\n\t\t\t\t\t\t\t\t\t\t\t\t\"responses\": null,\n\t\t\t\t\t\t\t\t\t\t\t\t\"actionCode\": \"DispositionCutUrgentCare\"\n\n\t\t\t\t\t\t\t\t\t\t\t}, ]\n\n\t\t\t\t\t\t\t\t\t\t}, ]\n\t\t\t\t\t\t\t\t\t},\n\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t\t}]\n\t\t\t\t\t\t}]\n\t\t\t\t\t}]\n\t\t\t\t}]\n\t\t\t}]\n\t\t}]\n\t}]\n\n\n\t\t\t}","type":"QueryResponse"}, {}], 
		diagnosisVar: ["wm.Variable", {"isList":true,"json":"[\n    {\n\t\t\"name\": \"DispositionCutUrgentCare\", \n\t\t\"dataValue\": \"<p>Wounds like yours typically need stitches. You should go to your nearest ER or urgent care (hyperlink ER and Urgent Care so when you click on it - it shows a Google Map with closest ER and Urgent Care)</p><p>Call 911 if:</p><ul><li>The bleeding is severe, spurting, or cannot be stopped (for example, after 10 minutes of pressure).</li><li>There is impaired function or feeling from the cut.</li><li>The person is seriously injured.</li></ul><p><a href='http://www.nlm.nih.gov/medlineplus/ency/article/000043.htm'>Click to learn more</a></p>\"\n\t}, \n\t{\n\t\t\"name\": \"DispositionCutHomeCare\", \n\t\t\"dataValue\": \"<p>Wounds like your typically do not need stitches.</p><p>Minor cuts and puncture wounds can be treated at home. Take the following steps.FOR MINOR CUTS - Click <a href='http://www.nlm.nih.gov/medlineplus/tutorials/burns/htm/_yes_50_no_0.htm'>here</a> to watch a video.</p><ol><li>Wash your hands with soap or antibacterial cleanser to prevent infection.</li><li>Wash the cut thoroughly with mild soap and water.</li><li>Use direct pressure to stop the bleeding.</li><li>Apply antibacterial ointment and a clean bandage that will not stick to the wound.</li></ol><p>FOR MINOR PUNCTURES - Click <a href='http://www.nlm.nih.gov/medlineplus/tutorials/burns/htm/_yes_50_no_0.htm'>here</a> to watch a video.</p><ol><li>Wash your hands with soap or antibacterial cleanser to prevent infection.</li><li>Use a stream of water for at least 5 minutes to rinse the puncture wound, then wash with soap.</li><li>Look (but do NOT probe) for objects inside the wound. If found, DO NOT remove -- go to the Emergency Department. If you cannot see anything inside the wound, but a piece of the object that caused the injury is missing, also seek medical attention.</li><li>Apply antibacterial ointment and a clean bandage that will not stick to the wound.</li></ol><p>If the wound gets infected (white with pus), see a doctor within the next 24 hours.</p><p><a href='http://www.nlm.nih.gov/medlineplus/ency/article/000043.htm'>Click to learn more</a>.</p>\"\n\t}, \n\t{\n\t\t\"name\": \"DispositionCutBiteNoSuturesUrgentCare\", \n\t\t\"dataValue\": \"Wounds like yours typically need do not need stitches. However, you should go to your nearest ER or urgent care (hyperlink ER and Urgent Care so when you click on it - it shows a Google Map with closest ER and Urgent Care) as there is a risk of an infection.\"\n\t}, \n\t{\n\t\t\"name\": \"DispositionCoughHomeCare\", \n\t\t\"dataValue\": \"<p>Your cough is likely due to viral illness or cold - you can try home remedies to improve symptoms.</p><p>To learn more about coughs you can watch <a href='http://www.nlm.nih.gov/medlineplus/ency/anatomyvideos/000039.htm'>this video</a></p><p>To ease your cough, try these tips:</p><ol><li>Suck cough drops or hard candies. They may ease a dry cough and soothe an irritated throat. Don't give them to a child under age 3, however, because they can cause choking.</li><li>Moisturize the air. Use a vaporizer or take a hot, steamy shower.</li><li>Drink fluids. Liquid helps thin the mucus in your throat. Warm liquids, such as broth or tea, can soothe your throat.</li></ol><p>If your cough does not improve in the next 3 days, please see a doctor.</p><p>Click <a href='http://www.nlm.nih.gov/medlineplus/cough.html'>here</a> to learn more.</p>\"\n\t}, \n\t{\n\t\t\"name\": \"DispositionCoughNextDayVisit\", \n\t\t\"dataValue\": \"<p>your cough is not an emergency, but your symptoms suggest if could be a problem that needs treatment. Please call your doctor on the next business day for earliest available appointment.</p><p>If you do not have a doctor consider going to a Urgent Care or Pharmacy Clinic in the area.</p><p><a href='http://www.minuteclinic.com/'>CVC Minute Clinic</a></p><p><a href='http://takecarehealth.com/'>Walgreens Take Care Health Clinic</a></p><p>You can also try the online tool ZOCDOC to find a doctor.  www.zocdoc.com </p><p>To learn more about coughs you can watch <a href='http://www.nlm.nih.gov/medlineplus/ency/anatomyvideos/000039.htm'>this video</a></p><p>Call your doctor if you or your child is:</p><ul><li>Coughing up thick, greenish-yellow phlegm</li><li>Wheezing</li><li>Experiencing a fever over 100 F (38 C)</li><li>Experiencing shortness of breath</li></ol><p>Click <a href='http://www.nlm.nih.gov/medlineplus/cough.html'>here<a/> to learn more </p>\"\n\t}, \n\t{\n\t\t\"name\": \"DispositionCoughUrgentCare\", \n\t\t\"dataValue\": \"<p>The symptoms of your cough are concerning and should be evaluated as soon as possible - You should go to your nearest ER or urgent care (hyperlink ER and Urgent Care so when you click on it - it shows a Google Map with closest ER and Urgent Care)</p><p><b>Seek emergency care</b></p><p>Seek emergency care if you or your child is:</p><ul><li>Having difficulty breathing or swallowing</li><li>Coughing up bloody or pink-tinged phlegm</li></ul><p>Click <a href='http://www.nlm.nih.gov/medlineplus/cough.html'>here</a> to learn more </p>\"\n\t}\n]","type":"EntryData"}, {}], 
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
DecisionTree.prototype._css = 'html.WMApp body .ButtonList .wmlist-item,\
html.WMApp body .ButtonList .wmlist-item-selected {\
border: solid 3px rgb(108,176,205);\
text-align: center;\
padding: 0px;\
font-size: 14pt;\
font-weight: bold;\
color: white;\
-webkit-border-radius: 16px;\
-moz-border-radius: 16px;\
border-radius: 16px;\
}\
html.WMApp body .ButtonList .wmlist-item {\
background: -webkit-gradient(linear, center top, center bottom, from(#4f8ddb), color-stop(50%,#0fa1e7), to(#4f8ddb));\
background: -moz-linear-gradient(top, #4f8ddb 0%,#0fa1e7 42%,#0fa1e7 58%,#4f8ddb 100%);\
background: -o-linear-gradient(top, #4f8ddb 0%,#0fa1e7 42%,#0fa1e7 58%,#4f8ddb 100%);\
background: -ms-linear-gradient(top, #4f8ddb 0%,#0fa1e7 42%,#0fa1e7 58%,#4f8ddb 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#4f8ddb", endColorstr="#0fa1e7",GradientType=0);\
}\
html.WMApp body .ButtonList .wmlist-item-selected {\
background: -webkit-gradient(linear, center top, center bottom, from(#0fa1e7), color-stop(50%,#4f8ddb), to(#0fa1e7));\
background: -moz-linear-gradient(top, #0fa1e7 0%,#4f8ddb 42%,#4f8ddb 58%,#0fa1e7 100%);\
background: -o-linear-gradient(top, #0fa1e7 0%,#4f8ddb 42%,#4f8ddb 58%,#0fa1e7 100%);\
background: -ms-linear-gradient(top, #0fa1e7 0%,#4f8ddb 42%,#4f8ddb 58%,#0fa1e7 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#4f8ddb", endColorstr="#0fa1e7",GradientType=0);\
border-color: #333333;\
color: white !important;\
}\
div .Answer {\
background: -webkit-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#F8F8A5), to(#D1CA76));\
background: -moz-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -ms-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
background: -o-linear-gradient(top, #F8F8A5 0%,#D1CA76 20%,#D1CA76 100%);\
}\
*/\
.NoSizeNode .wmSizeNode {\
display: block;\
}\
.NoSizeNode .wmSizeNode {\
display: block;\
}\
html.WMApp body .BottomButton img {\
margin-bottom:8px;\
height: 40%;\
}\
html.WMApp body div .wmtogglebuttonpanel .wmbutton.BottomButton {\
font-size: 11px;\
color: #a7a7a7;\
background: -webkit-gradient(linear, center top, center bottom, from(#434343), color-stop(89%,#19191a), to(#19191a));\
background: -moz-linear-gradient(top, #434343 0%,#19191a 89%,#19191a 100%);\
background: -o-linear-gradient(top, #434343 0%,#19191a 89%,#19191a 100%);\
background: -ms-linear-gradient(top, #434343 0%,#19191a 89%,#19191a 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#434343", endColorstr="#19191a",GradientType=0);\
-webkit-border-radius: 0px !important;\
border-radius: 0px !important;\
-webkit-border-top-left-radius: 0px !important;\
-webkit-border-bottom-left-radius: 0px !important;\
-moz-border-radius-topleft: 0px !important;\
-moz-border-radius-bottomleft: 0px !important;\
border-top-left-radius: 0px !important;\
border-bottom-left-radius: 0px !important;\
}\
html.WMApp body div .wmtogglebuttonpanel .wmbutton.BottomButton.toggleButtonDown {\
color: white;\
background: -webkit-gradient(linear, center top, center bottom, from(#2d2d2d), color-stop(89%,#444444), to(#444444));\
background: -moz-linear-gradient(top, #2d2d2d 0%,#444444 89%,#444444 100%);\
background: -o-linear-gradient(top, #2d2d2d 0%,#444444 89%,#444444 100%);\
background: -ms-linear-gradient(top, #2d2d2d 0%,#444444 89%,#444444 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#2d2d2d", endColorstr="#444444",GradientType=0);\
}\
html.WMApp body .NoRadius {\
-webkit-border-radius: 0px !important;\
-moz-border-radius: 0px !important;\
-ms-border-radius: 0px !important;\
-o-border-radius: 0px !important;\
border-radius: 0px !important;\
}html.WMApp body .BackAndForthToggleButtonPanel {\
-webkit-border-radius: 16px;\
-moz-border-radius: 16px;\
border-radius: 16px;\
border-color: rgb(14,14,14) rgb(79,79,79) #6e6e6e rgb(79,79,79);\
}\
html.WMApp body .BackAndForthToggleButtonPanel {\
-webkit-border-radius: 16px;\
-moz-border-radius: 16px;\
border-radius: 16px;\
border-color: rgb(14,14,14) rgb(79,79,79) #6e6e6e rgb(79,79,79);\
}\
html.WMApp body .BackAndForthToggleButtonPanel .wmbutton {\
background: -webkit-gradient(linear, center top, center bottom, from(#727272), color-stop(60%,#010101), to(#010101));\
background: -moz-linear-gradient(top, #727272 0%,#010101 60%,#010101 100%);\
background: -o-linear-gradient(top, #727272 0%,#010101 60%,#010101 100%);\
background: -ms-linear-gradient(top, #727272 0%,#010101 60%,#010101 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#727272", endColorstr="#010101",GradientType=0);\
}\
html.WMApp body div div .StrongLeftRadius,\
html.WMApp body div div  .wmbutton.StrongLeftRadius:first-child {\
-webkit-border-top-left-radius: 14px !important;\
-webkit-border-bottom-left-radius: 14px !important;\
-moz-border-radius-topleft: 14px !important;\
-moz-border-radius-bottomleft: 14px !important;\
border-top-left-radius: 14px !important;\
border-bottom-left-radius: 14px !important;\
-webkit-border-top-right-radius: 0px !important;\
-webkit-border-bottom-right-radius: 0px !important;\
-moz-border-radius-topright: 0px !important;\
-moz-border-radius-bottomright: 0px !important;\
border-top-right-radius: 0px !important;\
border-bottom-right-radius: 0px !important;\
}\
html.WMApp body div div .StrongRightRadius,\
html.WMApp body div div  .wmbutton.StrongRightRadius:last-child {\
-webkit-border-top-right-radius: 14px !important;\
-webkit-border-bottom-right-radius: 14px !important;\
-moz-border-radius-topright: 14px !important;\
-moz-border-radius-bottomright: 14px !important;\
border-top-right-radius: 14px !important;\
border-bottom-right-radius: 14px !important;\
-webkit-border-top-left-radius: 0px !important;\
-webkit-border-bottom-left-radius: 0px !important;\
-moz-border-radius-topleft: 0px !important;\
-moz-border-radius-bottomleft: 0px !important;\
border-top-left-radius: 0px !important;\
border-bottom-left-radius: 0px !important;\
}\
html.WMApp body .responseList {\
background: -webkit-gradient(linear, center top, center bottom, from(#cdeffd), color-stop(20%,#e2f6fe), to(#e2f6fe));\
background: -moz-linear-gradient(top, #cdeffd 0%,#e2f6fe 20%,#e2f6fe 100%);\
background: -o-linear-gradient(top, #cdeffd 0%,#e2f6fe 20%,#e2f6fe 100%);\
background: -ms-linear-gradient(top, #cdeffd 0%,#e2f6fe 20%,#e2f6fe 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#cdeffd", endColorstr="#e2f6fe",GradientType=0);\
-webkit-border-radius: 8px;\
-moz-border-radius: 8px;\
webkit-border-radius: 8px;\
-moz-box-shadow: 2px 4px 4px #888;\
-webkit-box-shadow: 2px 4px 4px #888;\
box-shadow: 2px 4px 4px #888;\
}\
html.WMApp body .responseList .wmlist-item-selected,\
html.WMApp body .responseList .wmlist-item {\
font-size: 10pt;\
}\
html.WMApp body .rounded {\
-webkit-border-radius: 8px;\
-moz-border-radius: 8px;\
-ms-border-radius: 8px\
border-radius: 8px;\
}html.WMApp body .OverflowNotHidden {\
overflow: visible !important;\
}\
html.WMApp body .OverflowNotHidden a {\
position: relative;\
z-index: 100;\
}\
html.WMApp body .OverflowNotHidden.ShiftLeft a {\
left: -1px;\
}\
html.WMApp body .OverflowNotHidden.ShiftDown a {\
bottom: -1px;\
}\
html.WMApp body .drgenus {\
background: -webkit-gradient(linear, center top, center bottom, from(#5597da), color-stop(20%,#03a5dc), color-stop(80%,#03a5dc),to(#5597da));\
background: -moz-linear-gradient(top, #5597da 0%,#03a5dc 20%,#03a5dc 80%,#5597da 100%);\
background: -o-linear-gradient(top, #5597da 0%,#03a5dc 20%,#03a5dc 80%,#5597da 100%);\
background: -ms-linear-gradient(top, #5597da 0%,#03a5dc 20%,#03a5dc 80%,#5597da 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#5597da", endColorstr="#03a5dc",GradientType=0);\
}\
.Question {\
-webkit-border-radius: 6px;\
-moz-border-radius: 6px;\
border-radius: 6px;\
background: -webkit-gradient(linear, center top, center bottom, from(#f8f8f8), color-stop(20%,#f8f8f8), to(#e6e6e6));\
background: -moz-linear-gradient(top, #f8f8f8 0%,#f8f8f8 20%,#e6e6e6 100%);\
background: -o-linear-gradient(top, #f8f8f8 0%,#f8f8f8 20%,#e6e6e6 100%);\
background: -ms-linear-gradient(top, #f8f8f8 0%,#f8f8f8 20%,#e6e6e6 100%);\
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr="#f8f8f8", endColorstr="#e6e6e6",GradientType=0);\
-moz-box-shadow: 2px 4px 4px #888;\
-webkit-box-shadow: 2px 4px 4px #888;\
box-shadow: 2px 4px 4px #888;\
font-weight: bold;\
}\
/*\
.curvedlist .wmlist-item, .inputPanel, .Question, .Answer {\
color: black !important;\
background: -webkit-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -webkit-gradient(linear, left top, left bottom, from(#dcdbcf), to(#b2b2aa));\
background: -moz-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -ms-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
background: -o-linear-gradient(top, #dcdbcf 0%,#b2b2aa 20%,#b2b2aa 100%);\
}\
.Question, .Answer {\
border: solid 1px #333;\
border-radius: 4px;\
-webkit-border-radius: 4px;\
}\
.wmlist .Question, .wmlist .Answer {\
padding: 10px 15px;\
}\
';
