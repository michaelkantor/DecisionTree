
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Node
 *  11/20/2012 21:55:17
 * 
 */
public class Node {

    private Integer nodeId;
    private String answer;
    private String question;
    private Date createdAt;
    private Date updatedAt;
    private com.genushealthdb.data.Node node;
    private Set<com.genushealthdb.data.Node> nodes = new HashSet<com.genushealthdb.data.Node>();
    private Set<com.genushealthdb.data.NodeGroup> nodeGroups = new HashSet<com.genushealthdb.data.NodeGroup>();
    private Set<com.genushealthdb.data.UserSessions> userSessionses = new HashSet<com.genushealthdb.data.UserSessions>();

    public Integer getNodeId() {
        return nodeId;
    }

    public void setNodeId(Integer nodeId) {
        this.nodeId = nodeId;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
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

    public com.genushealthdb.data.Node getNode() {
        return node;
    }

    public void setNode(com.genushealthdb.data.Node node) {
        this.node = node;
    }

    public Set<com.genushealthdb.data.Node> getNodes() {
        return nodes;
    }

    public void setNodes(Set<com.genushealthdb.data.Node> nodes) {
        this.nodes = nodes;
    }

    public Set<com.genushealthdb.data.NodeGroup> getNodeGroups() {
        return nodeGroups;
    }

    public void setNodeGroups(Set<com.genushealthdb.data.NodeGroup> nodeGroups) {
        this.nodeGroups = nodeGroups;
    }

    public Set<com.genushealthdb.data.UserSessions> getUserSessionses() {
        return userSessionses;
    }

    public void setUserSessionses(Set<com.genushealthdb.data.UserSessions> userSessionses) {
        this.userSessionses = userSessionses;
    }

}
