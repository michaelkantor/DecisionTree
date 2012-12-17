
package com.genushealthdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  GenusHealthDB.Node
 *  12/16/2012 23:38:20
 * 
 */
public class Node {

    private Integer nodeId;
    private String answer;
    private String question;
    private Date createdAt;
    private Date updatedAt;
    private com.genushealthdb.data.Node parent;
    private Set<com.genushealthdb.data.Node> nodes = new HashSet<com.genushealthdb.data.Node>();
    private Set<com.genushealthdb.data.UserSessions> usersessionss = new HashSet<com.genushealthdb.data.UserSessions>();
    private Set<com.genushealthdb.data.NodeGroup> nodegroups = new HashSet<com.genushealthdb.data.NodeGroup>();

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

    public com.genushealthdb.data.Node getParent() {
        return parent;
    }

    public void setParent(com.genushealthdb.data.Node parent) {
        this.parent = parent;
    }

    public Set<com.genushealthdb.data.Node> getNodes() {
        return nodes;
    }

    public void setNodes(Set<com.genushealthdb.data.Node> nodes) {
        this.nodes = nodes;
    }

    public Set<com.genushealthdb.data.UserSessions> getUsersessionss() {
        return usersessionss;
    }

    public void setUsersessionss(Set<com.genushealthdb.data.UserSessions> usersessionss) {
        this.usersessionss = usersessionss;
    }

    public Set<com.genushealthdb.data.NodeGroup> getNodegroups() {
        return nodegroups;
    }

    public void setNodegroups(Set<com.genushealthdb.data.NodeGroup> nodegroups) {
        this.nodegroups = nodegroups;
    }

}
