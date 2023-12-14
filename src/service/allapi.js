import BASE_URL from "./baseurl";
import { commonRequest } from "./commonReq";

export const registerEmpl= async (body,headers)=>{
    return await commonRequest('POST',`${BASE_URL}/employees/register`,body,headers)
}