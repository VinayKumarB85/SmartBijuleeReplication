
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { resetPasswordEndPoint } from '../../Constants/Apiurl';


export const resetPasswordApi = createAsyncThunk(resetPasswordEndPoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        const request = {
            method: "post",
            url: resetPasswordEndPoint,
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