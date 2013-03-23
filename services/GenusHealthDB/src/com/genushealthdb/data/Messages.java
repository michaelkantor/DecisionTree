
package com.genushealthdb.data;

import java.util.Date;


/**
 *  GenusHealthDB.Messages
 *  03/21/2013 17:01:30
 * 
 */
public class Messages {

    private Integer messageId;
    private String sender;
    private String text;
    private Date createdAt;
    private Integer node_id;
    private UserSessions userSessions;

    public Integer getMessageId() {
        return messageId;
    }

    public void setMessageId(Integer messageId) {
        this.messageId = messageId;
    }

    public String getSender() {
        return sender;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Integer getNode_id() {
        return node_id;
    }

    public void setNode_id(Integer node_id) {
        this.node_id = node_id;
    }

    public UserSessions getUserSessions() {
        return userSessions;
    }

    public void setUserSessions(UserSessions userSessions) {
        this.userSessions = userSessions;
    }

}
