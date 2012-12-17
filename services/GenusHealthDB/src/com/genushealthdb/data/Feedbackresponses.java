
package com.genushealthdb.data;



/**
 *  GenusHealthDB.Feedbackresponses
 *  12/16/2012 23:38:20
 * 
 */
public class Feedbackresponses {

    private Integer feedbackresponseid;
    private String answer;
    private Feedbackquestions feedbackquestion;

    public Integer getFeedbackresponseid() {
        return feedbackresponseid;
    }

    public void setFeedbackresponseid(Integer feedbackresponseid) {
        this.feedbackresponseid = feedbackresponseid;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public Feedbackquestions getFeedbackquestion() {
        return feedbackquestion;
    }

    public void setFeedbackquestion(Feedbackquestions feedbackquestion) {
        this.feedbackquestion = feedbackquestion;
    }

}
