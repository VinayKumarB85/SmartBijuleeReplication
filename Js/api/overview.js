// import {apiClient} from "SmartBijulee/js/api";
// import {overviewApiConstant} from "SmartBijulee/js/constants";
import { baseurl } from "../Constants";
import { apiClient } from "./ApiClient";

export const overviewApi = () => {
    return (token, userid, MeterID, Phase) => {
        let params = {};

        params = {
            LoginID: userid,
            MeterID, Phase,
        };
        let urlString = overviewApiConstant;

        return new Promise(async (resolve, reject) => {

            try {

                let resp = await apiClient.httpPost(urlString, token, params, {});

                console.log("overview response is", JSON.parse(JSON.stringify(resp)));
                return resolve(resp);
            } catch (err) {
                console.warn(err.response || err.code);
                if (err.code === "ECONNABORTED") {
                    return reject("Timeout error")
                } else {
                    return reject(err.response || err);
                }
            }
        })
    }
};
