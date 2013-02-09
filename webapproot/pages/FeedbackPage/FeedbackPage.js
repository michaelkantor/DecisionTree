dojo.declare("FeedbackPage", wm.Page, {
    start: function() {
        
    },
    onShow: function() {
        
        
    },
    "preferredDevice": "phone",

    responseListSelect: function(inSender, inItem) {
        this.feedbackHistoryVar.addItem({name: this.currentQuestion.getValue("feedbackquestionid"),
                                        dataValue: inSender.selectedItem.getValue("feedbackresponseid")
        });
        if (this.feedbackquestionsLiveVariable1.cursor + 1 ==
            this.feedbackquestionsLiveVariable1.getCount()) {
            this.showEnd();       
        } else {
            this.feedbackquestionsLiveVariable1.setNext();
            this.currentQuestion.setData(this.feedbackquestionsLiveVariable1.getCursorItem().getData());
        }        
    },
    feedbackquestionsLiveVariable1Success: function(inSender, inDeprecated) {
        if (inSender.getCount() == 0) {
            this.showEnd();            
        } else {
            this.responseListPanel.show();
            inSender.cursor = 0;
            this.feedbackHistoryVar.clearData();
            this.currentQuestion.setData(inSender.getCursorItem().getData());
        }
    },
    showEnd: function() {
        this.questionLabel.setCaption("Thank you for your feedback!");
        this.responseListPanel.hide();
        this.saveFeedback();
    },
    saveFeedback: function() {
        var p = wm.getPage("OneQuestionPage");
        p.updateSessionLVar.sourceData.setValue("feedback", dojo.toJson(this.feedbackHistoryVar.getData()));
        p.updateSessionLVar.update();
    },

    _end: 0
});