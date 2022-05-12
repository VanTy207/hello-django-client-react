import axios from "axios";
import { ApiResponse } from "./api_response";

export function getAllWards(code) {
    const req = axios.get(process.env.REACT_APP_BASE_DOMAIN_API + "address-data?type=district&province_code=" + code, {}).then(res => {
        let data = ApiResponse(data);
        console.log(req);
        return data;
    }).catch(error => {

    });
}