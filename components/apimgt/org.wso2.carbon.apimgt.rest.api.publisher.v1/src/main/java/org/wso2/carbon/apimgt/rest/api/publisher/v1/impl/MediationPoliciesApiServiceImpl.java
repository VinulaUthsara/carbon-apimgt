package org.wso2.carbon.apimgt.rest.api.publisher.v1.impl;

import org.wso2.carbon.apimgt.rest.api.publisher.v1.*;
import org.wso2.carbon.apimgt.rest.api.publisher.v1.dto.*;


import org.wso2.carbon.apimgt.rest.api.publisher.v1.dto.MediationListDTO;
import org.wso2.carbon.apimgt.rest.api.publisher.v1.dto.ErrorDTO;

import java.util.List;

import java.io.InputStream;
import org.apache.cxf.jaxrs.ext.multipart.Attachment;

import javax.ws.rs.core.Response;

public class MediationPoliciesApiServiceImpl extends MediationPoliciesApiService {
    @Override
    public Response mediationPoliciesGet(Integer limit,Integer offset,String query,String ifNoneMatch){
        // do some magic!
        return Response.ok().entity(new ApiResponseMessage(ApiResponseMessage.OK, "magic!")).build();
    }
}