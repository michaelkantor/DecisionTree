
package com.genushealthdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Feedbackquestions
 *  12/16/2012 23:38:20
 * 
 */
public class Feedbackquestions {

    private Integer feedbackquestionid;
    private String question;
    private Integer ordernumber;
    private Dispositions disposition;
    private Set<com.genushealthdb.data.Feedbackresponses> feedbackresponsess = new HashSet<com.genushealthdb.data.Feedbackresponses>();

    public Integer getFeedbackquestionid() {
        return feedbackquestionid;
    }

    public void setFeedbackquestionid(Integer feedbackquestionid) {
        this.feedbackquestionid = feedbackquestionid;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    public Integer getOrdernumber() {
        return ordernumber;
    }

    public void setOrdernumber(Integer ordernumber) {
        this.ordernumber = ordernumber;
    }

    public Dispositions getDisposition() {
        return disposition;
    }

    public void setDisposition(Dispositions disposition) {
        this.disposition = disposition;
    }

    public Set<com.genushealthdb.data.Feedbackresponses> getFeedbackresponsess() {
        return feedbackresponsess;
    }

    public void setFeedbackresponsess(Set<com.genushealthdb.data.Feedbackresponses> feedbackresponsess) {
        this.feedbackresponsess = feedbackresponsess;
    }

}
