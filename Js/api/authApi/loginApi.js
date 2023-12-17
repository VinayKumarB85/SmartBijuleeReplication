import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { loginEndpoint } from '../../Constants/SettingCardInfo/Apiurl';
import { otpEndpoint } from '../../Constants/SettingCardInfo/Apiurl';




// - - - - - Verify User API - - - - - //

export const userVerifyApi = createAsyncThunk(loginEndpoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        console.log('requestData',requestData)
        const request = {
            method: "post",
            url: loginEndpoint,
            data: {
                ...requestData
            }
        };
        try {
            const res = await dispatch(ApiManager(getState().auth, request))
            return fulfillWithValue(res)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const otpVerifyApi = createAsyncThunk(otpEndpoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        const request = {
            method: "post",
            url: otpEndpoint,
            data: {
                ...requestData
            }
        };
        console.log('request',request,requestData)
        try {
            const res = await dispatch(ApiManager(getState().auth, request))
            return fulfillWithValue(res)
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)
// - - - - - Login User API - - - - - //
// export const otpVerifyApi = createAsyncThunk(otpEndpoint,
//     async (data, {dispatch,rejectWithValue}) => {
//         const params = {
//             ...data
//         }
//         const request = {
//             method: "post",
//             url:otpEndpoint,
//             body: {...data},
//         };

//         const addHeaders = {
//             "x-app-id" : 4,
//         }
//         try{
//             const res = await dispatch(ApiManager({}, request));
//             return res;
//         } catch(error){
//             console.log("errorororor", error)
//             const data = {
//                 status : error.status,
//                 code: error.data.Code,
//                 message: error.data.Msg
//             }
//             return rejectWithValue(data)
//         }   
// })