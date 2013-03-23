
package com.genushealthdb.data;

import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Feedbackquestionset
 *  03/21/2013 17:01:30
 * 
 */
public class Feedbackquestionset {

    private Integer feedbackquestionsetid;
    private String name;
    private Set<com.genushealthdb.data.Feedbackquestions> feedbackquestionss = new HashSet<com.genushealthdb.data.Feedbackquestions>();
    private Set<com.genushealthdb.data.Dispositions> dispositionss = new HashSet<com.genushealthdb.data.Dispositions>();

    public Integer getFeedbackquestionsetid() {
        return feedbackquestionsetid;
    }

    public void setFeedbackquestionsetid(Integer feedbackquestionsetid) {
        this.feedbackquestionsetid = feedbackquestionsetid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Set<com.genushealthdb.data.Feedbackquestions> getFeedbackquestionss() {
        return feedbackquestionss;
    }

    public void setFeedbackquestionss(Set<com.genushealthdb.data.Feedbackquestions> feedbackquestionss) {
        this.feedbackquestionss = feedbackquestionss;
    }

    public Set<com.genushealthdb.data.Dispositions> getDispositionss() {
        return dispositionss;
    }

    public void setDispositionss(Set<com.genushealthdb.data.Dispositions> dispositionss) {
        this.dispositionss = dispositionss;
    }

}
