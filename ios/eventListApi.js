import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiManager } from "../../ApiManager";
import { eventEndPoint } from "../../../constants";

export const eventlistApi= createAsyncThunk(eventEndPoint,
    async (data, {getState,rejectWithValue, dispatch}) => {
        const params = {
            ...data
        }
        const request = {
            method: "get",
            url: `${eventEndPoint}`,
            body: {},
        };
        try{
            // const res = await ApiManager({}, request)
            console.log("getstate", getState().auth.user.at, request)
            const res = await dispatch(ApiManager(getState().auth.user.at, request));
            return res
        } catch(error){
            console.log("error in punch in api", error)
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})