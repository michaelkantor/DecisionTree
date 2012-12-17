
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.UserSessions
 *  11/20/2012 21:55:17
 * 
 */
public class UserSessions {

    private Integer sessionId;
    private String conditionType;
    private String modelDiagnosis;
    private String patientId;
    private Date createdAt;
    private Date updatedAt;
    private String feedback;
    private Node node;
    private Set<com.genushealthdb.data.Messages> messageses = new HashSet<com.genushealthdb.data.Messages>();

    public Integer getSessionId() {
        return sessionId;
    }

    public void setSessionId(Integer sessionId) {
        this.sessionId = sessionId;
    }

    public String getConditionType() {
        return conditionType;
    }

    public void setConditionType(String conditionType) {
        this.conditionType = conditionType;
    }

    public String getModelDiagnosis() {
        return modelDiagnosis;
    }

    public void setModelDiagnosis(String modelDiagnosis) {
        this.modelDiagnosis = modelDiagnosis;
    }

    public String getPatientId() {
        return patientId;
    }

    public void setPatientId(String patientId) {
        this.patientId = patientId;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }

    public Set<com.genushealthdb.data.Messages> getMessageses() {
        return messageses;
    }

    public void setMessageses(Set<com.genushealthdb.data.Messages> messageses) {
        this.messageses = messageses;
    }

}
