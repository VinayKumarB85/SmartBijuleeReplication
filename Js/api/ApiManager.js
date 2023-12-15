import { useSelector } from "react-redux";
import { apiClient } from "./ApiClient";
// import { clearToken } from "../redux/authReducer/loginReducer";

export const ApiManager = (token, { method, url, body, contentType }, addHeaders) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const data = {
                method, url, body
            }

            console.log("API Manager Request Log", url, token, body, method);
            let formHeaders;
            if (contentType == "form") {
                formHeaders = { 'Content-Type': 'multipart/form-data' }
            }
            try {
                let resp = await apiClient[method](url, token, body, contentType == "form" ? formHeaders : addHeaders,);
                console.log("ApiManager Response ", resp);
                console.log("ApiManager Response ", JSON.parse(JSON.stringify(resp)));
                return resolve(resp);
            } catch (err) {
                console.log("API Manager Catch Error", err);
                if (err.response.status == 403) {
                    // dispatch(clearToken());
                    console.log("API Manager Catch Error", err);
                }
                else if (err.code === "ECONNABORTED") {
                    return reject("Timeout error");
                } else {
                    return reject(err.response || err);
                }
            }
        })
    }
};


export const UserApiManager = (token, { method, url, body, contentType }, addHeaders) => {
    
    return new Promise(async (resolve, reject) => {
        const data = {
            method, url, body
        }

        let formHeaders;
        if (contentType == "form") {
            formHeaders = [{ 'Content-Type': 'multipart/form-data' }];
        }
        console.log("API Manager Request Log", token, token, data);
        try {
            let resp = await apiClient[method](url, token, body, addHeaders);
            console.log("ApiManager Response ", JSON.parse(JSON.stringify(resp)));
            return resolve(resp);
        } catch (err) {
            console.log("API Manager Catch Error", err);
            if (err.code === "ECONNABORTED") {
                return reject("Timeout error");
            } else {
                return reject(err.response || err);
            }
        }
    })
};


