LoginPage.widgets = {
	parseLoginSVar: ["wm.ServiceVariable", {"operation":"parse.com.Login","service":"xhrService"}, {"onError":"parseLoginSVarError","onResult":"parseLoginSVarResult","onSuccess":"parseLoginSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parse.com.LoginInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameEditor.dataValue","targetProperty":"username"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordEditor.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":"true","targetProperty":"noProxy"}, {}],
				wire3: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire4: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}]
			}]
		}]
	}],
	loadingDialog1: ["wm.LoadingDialog", {"caption":"Signing in...","captionWidth":"100px"}, {}, {
		binding: ["wm.Binding", {}, {}, {
			wire: ["wm.Wire", {"expression":undefined,"source":"formPanel1","targetProperty":"widgetToCover"}, {}],
			wire1: ["wm.Wire", {"expression":undefined,"source":"parseLoginSVar","targetProperty":"serviceVariableToTrack"}, {}]
		}]
	}],
	parseRegisterSVar: ["wm.ServiceVariable", {"operation":"parse.com.Registration","service":"xhrService"}, {"onError":"parseLoginSVarError","onSuccess":"parseLoginSVarSuccess"}, {
		input: ["wm.ServiceInput", {"type":"parse.com.RegistrationInputs"}, {}, {
			binding: ["wm.Binding", {}, {}, {
				wire3: ["wm.Wire", {"expression":"\"QS1yDzKQNakBesD2zm8QbYKZKNcCHhF3II7IFBhr\"","targetProperty":"X-Parse-Application-Id"}, {}],
				wire4: ["wm.Wire", {"expression":"\"nkRl8lPEzOH3jtZVJJE2AA0oZVj6t1jZclZSYRyC\"","targetProperty":"X-Parse-REST-API-Key"}, {}],
				wire1: ["wm.Wire", {"expression":undefined,"source":"passwordEditor.dataValue","targetProperty":"password"}, {}],
				wire2: ["wm.Wire", {"expression":undefined,"source":"phoneEditor.dataValue","targetProperty":"phone"}, {}],
				wire: ["wm.Wire", {"expression":undefined,"source":"usernameEditor.dataValue","targetProperty":"username"}, {}]
			}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"left","padding":"0,5,0,5","verticalAlign":"top"}, {}, {
		formPanel1: ["wm.FormPanel", {"_classes":{"domNode":["rounded"]},"captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"164px","editorHeight":"80px","fitToContentHeight":true,"height":"180px","margin":"8","mobileHeight":"244px","type":"wm.FormPanel"}, {"onEnterKeyPress":"loginButtonClick"}, {
			usernameEditor: ["wm.Text", {"caption":"Username","captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"54px","displayValue":"","height":"80px","mobileHeight":"80px","width":"100%"}, {}],
			passwordEditor: ["wm.Text", {"caption":"Password","captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"54px","displayValue":"","height":"80px","mobileHeight":"80px","password":true,"width":"100%"}, {}],
			phoneEditor: ["wm.Text", {"caption":"Phone number","captionAlign":"left","captionPosition":"top","captionSize":"28px","desktopHeight":"54px","displayValue":"","height":"80px","mobileHeight":"80px","showing":false,"width":"100%"}, {}]
		}],
		panel1: ["wm.Panel", {"height":"60px","horizontalAlign":"right","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
			spacer1: ["wm.Spacer", {"height":"1px","width":"100%"}, {}],
			loginButton: ["wm.Button", {"caption":"Login","desktopHeight":"60px","height":"60px","mobileHeight":"60px","width":"100px"}, {"onclick":"loginButtonClick"}],
			cancelButton: ["wm.Button", {"caption":"Cancel","desktopHeight":"60px","height":"60px","mobileHeight":"60px","width":"100px"}, {"onclick":"cancelButtonClick"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":"Boolean(window[\"studio\"])","targetProperty":"showing"}, {}]
				}]
			}]
		}]
	}]
}