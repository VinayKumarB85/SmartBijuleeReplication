import { createAsyncThunk } from '@reduxjs/toolkit';
import { changePasswordEndpoint, emailVerifyEndpoint } from '../../../constants';
import { ApiManager } from '../../ApiManager';

export const changePasswordApi = createAsyncThunk(changePasswordEndpoint,
    async (data, {rejectWithValue, dispatch}) => {
         console.log("cakhdbcajdshbcakhjsdbcajd", data)
        const params = {
            ...data
        }
        const request = {
            method: "put",
            url:  changePasswordEndpoint,
            body: data,
        };

        const addHeaders = {
            "x-app-id" : 1,
        }
        try{
            const res = await dispatch(ApiManager({}, request, addHeaders));
            return res;
        } catch(error){
            console.log("errorororor", error)
            const data = {
                status : error.status,
                code: error.data.Code,
                message: error.data.Msg
            }
            return rejectWithValue(data)
        }   
})