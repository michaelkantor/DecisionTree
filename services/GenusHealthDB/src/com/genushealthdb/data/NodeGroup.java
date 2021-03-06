
package com.genushealthdb.data;



/**
 *  GenusHealthDB.NodeGroup
 *  03/21/2013 17:01:30
 * 
 */
public class NodeGroup {

    private Integer nodegroupId;
    private String name;
    private Integer rootNodeId;
    private Byte status;

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

    public Integer getRootNodeId() {
        return rootNodeId;
    }

    public void setRootNodeId(Integer rootNodeId) {
        this.rootNodeId = rootNodeId;
    }

    public Byte getStatus() {
        return status;
    }

    public void setStatus(Byte status) {
        this.status = status;
    }

}
