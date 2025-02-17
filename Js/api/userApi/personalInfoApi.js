
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { persoanlInfoEndPoint } from '../../Constants/Apiurl';



export const personalInfoApi = createAsyncThunk(persoanlInfoEndPoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        const request = {
            method: "post",
            url: persoanlInfoEndPoint,
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