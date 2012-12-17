
package com.genushealthdb;

import java.util.List;
import com.genushealthdb.data.NodeGroup;
import com.wavemaker.json.type.TypeDefinition;
import com.wavemaker.runtime.data.DataServiceManager;
import com.wavemaker.runtime.data.DataServiceManagerAccess;
import com.wavemaker.runtime.data.TaskManager;
import com.wavemaker.runtime.service.LiveDataService;
import com.wavemaker.runtime.service.PagingOptions;
import com.wavemaker.runtime.service.PropertyOptions;
import com.wavemaker.runtime.service.TypedServiceReturn;


/**
 *  Operations for service "GenusHealthDB"
 *  11/20/2012 21:55:21
 * 
 */
@SuppressWarnings("unchecked")
public class GenusHealthDB
    implements DataServiceManagerAccess, LiveDataService
{

    private DataServiceManager dsMgr;
    private TaskManager taskMgr;

    public List<NodeGroup> getConditionsQuery(Byte status, PagingOptions pagingOptions) {
        return ((List<NodeGroup> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getConditionsQueryQueryName), status, pagingOptions));
    }

    public com.genushealthdb.data.Messages getMessagesById(Integer id, PagingOptions pagingOptions) {
        List<com.genushealthdb.data.Messages> rtn = ((List<com.genushealthdb.data.Messages> ) dsMgr.invoke(taskMgr.getQueryTask(), (GenusHealthDBConstants.getMessagesByIdQueryName), id, pagingOptions));
        if (rtn.isEmpty()) {
            return null;
        } else {
            return rtn.get(0);
        }
    }

    public Object insert(Object o) {
        return dsMgr.invoke(taskMgr.getInsertTask(), o);
    }

    public TypedServiceReturn read(TypeDefinition rootType, Object o, PropertyOptions propertyOptions, PagingOptions pagingOptions) {
        return ((TypedServiceReturn) dsMgr.invoke(taskMgr.getReadTask(), rootType, o, propertyOptions, pagingOptions));
    }

    public Object update(Object o) {
        return dsMgr.invoke(taskMgr.getUpdateTask(), o);
    }

    public void delete(Object o) {
        dsMgr.invoke(taskMgr.getDeleteTask(), o);
    }

    public void begin() {
        dsMgr.begin();
    }

    public void commit() {
        dsMgr.commit();
    }

    public void rollback() {
        dsMgr.rollback();
    }

    public DataServiceManager getDataServiceManager() {
        return dsMgr;
    }

    public void setDataServiceManager(DataServiceManager dsMgr) {
        this.dsMgr = dsMgr;
    }

    public TaskManager getTaskManager() {
        return taskMgr;
    }

    public void setTaskManager(TaskManager taskMgr) {
        this.taskMgr = taskMgr;
    }

}
