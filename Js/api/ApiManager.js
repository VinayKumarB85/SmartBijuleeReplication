import { useSelector } from "react-redux";
import { apiClient } from "./ApiClient";
// import { clearToken } from "../redux/authReducer/loginReducer";

export const ApiManager = (auth, { method, url, data }, additionalHeaders) => {
    return async (dispatch) => {
        return new Promise(async (resolve, reject) => {
            const defaultBody = {
                LoginID: auth.user.data.CANumber,
                MeterID: auth.user.data.MID,
                Phase: auth.user.data.PHASE,

            }

            const body = { ...defaultBody, ...data }


            console.log("API Manager Request Log", auth, method, data,body);

            try {
                let resp = await apiClient[method](url, auth.user.data.token, body, additionalHeaders);
                console.log("ApiManager Response ", JSON.parse(JSON.stringify(resp)));
                return resolve(resp);
            } catch (err) {
                console.log("API Manager Catch Error", err);
                if (err.code === "ECONNABORTED") {
                    return reject("Timeout error")
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


