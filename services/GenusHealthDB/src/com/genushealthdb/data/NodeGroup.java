
package com.genushealthdb.data;



/**
 *  GenusHealthDB.NodeGroup
 *  12/16/2012 23:38:20
 * 
 */
public class NodeGroup {

    private Integer nodegroupId;
    private String name;
    private Byte status;
    private Node node;

    public Integer getNodegroupId() {
        return nodegroupId;
    }

    public void setNodegroupId(Integer nodegroupId) {
        this.nodegroupId = nodegroupId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

    public Node getNode() {
        return node;
    }

    public void setNode(Node node) {
        this.node = node;
    }

}
