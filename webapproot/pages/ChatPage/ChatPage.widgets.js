ChatPage.widgets = {
	//pubNub: ["com.pubnub.PubNubPresence", {"channel":undefined,"pubKey":"pub-382b3d34-a169-45f9-bd56-7288c5c649e6","subKey":"sub-e866dc21-334c-11e2-838a-17ed96270136","type":"PubNubMessage"}, {"onMessageReceived":"pubNubMessageReceived"}],
	conversationVar: ["wm.Variable", {"isList":true,"type":"PubNubMessage"}, {}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","verticalAlign":"top"}, {}, {
		conversationList: ["wm.List", {"_classes":{"domNode":[
"MobileListStyle"
]},"border":"0","columns":[
{"show":true,"field":"message","title":"Message","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"\"<div class='MobileRowTitle'>\" + ${sender} +\n\"</div><div class='MobileRow'>\" +${message} + \n\"</div>\"","mobileColumn":false},
{"show":false,"field":"sender","title":"Sender","width":"100%","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"expression":"","mobileColumn":false},
{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>\" +\n\"Message: \" + ${wm.runtimeId}.formatCell(\"message\", ${message}, ${this}, ${wm.rowId}) +\n\"</div>\"\n\n","mobileColumn":false},
{"show":true,"controller":"rightarrow","width":"20px","title":"-","field":"_rightArrow","mobileColumn":true}
],"headerVisible":false,"height":"100%","margin":"0","minDesktopHeight":60,"rightNavArrow":true,"styleAsGrid":false}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"conversationVar","targetProperty":"dataSet"}, {}]
			}]
		}],
		sendTextEditorPanel: ["wm.Panel", {"desktopHeight":"35px","enableTouchHeight":true,"height":"40px","horizontalAlign":"left","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
			sendTextEditor: ["wm.Text", {"caption":undefined,"dataValue":undefined,"displayValue":"","height":"100%","width":"100%"}, {"onEnterKeyPress":"sendButton.click"}],
			sendButton: ["wm.Button", {"caption":"Send","height":"40px","margin":"4"}, {"onclick":"sendButtonClick"}]
		}]
	}]
}