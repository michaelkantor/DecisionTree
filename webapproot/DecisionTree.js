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
	"projectSubVersion": "Alpha7", 
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
		"parse.com.AddMessageToSession": ["wm.XhrDefinition", {"contentType":"application/json","headers":{},"parameters":{"X-Parse-REST-API-Key":{"transmitType":0,"type":"String"},"X-Parse-Application-Id":{"transmitType":0,"type":"String"},"message":{"transmitType":0,"type":"parse.com.AddRelationshipType"},"objectId":{"transmitType":0,"type":"String"}},"requestType":"PUT","returnType":undefined,"url":"https://api.parse.com/1/classes/GameScore","useProxy":false}, {}], 
		"parse.com.CreateSession": ["wm.XhrDefinition", {"contentType":"application/json","headers":{},"parameters":{"notes":{"transmitType":0,"type":"String","bindable":true},"score":{"transmitType":0,"type":"Number","bindable":true},"modelDiagnosis":{"transmitType":0,"type":"String","bindable":true},"intermediateDiagnosis":{"transmitType":0,"type":"String","bindable":true},"finalDiagnosis":{"transmitType":0,"type":"String","bindable":true},"patient":{"transmitType":0,"type":"parse.com.Pointer","bindable":true},"provider":{"transmitType":0,"type":"parse.com.Pointer","bindable":true},"resolved":{"transmitType":0,"type":"Boolean","bindable":true},"X-Parse-REST-API-Key":{"transmitType":0,"type":"String","bindable":true},"X-Parse-Application-Id":{"transmitType":0,"type":"String","bindable":true}},"requestType":"POST","returnType":"parse.com.CreateSessionResponse","url":"https://api.parse.com/1/classes/Session","useProxy":false}, {}], 
		"parse.com.Login": ["wm.XhrDefinition", {"headers":{},"parameters":{"username":{"transmitType":0,"type":"string"},"password":{"transmitType":0,"type":"string"},"X-Parse-Application-Id":{"transmitType":0,"type":"string"},"X-Parse-REST-API-Key":{"transmitType":0,"type":"string"}},"returnType":"parse.com.LoginResponse","url":"https://api.parse.com/1/login","useProxy":false}, {}, {
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