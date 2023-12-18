
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { energyTipsEndPoint } from '../../Constants/Apiurl';


export const energyTipsApi = createAsyncThunk(energyTipsEndPoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        const request = {
            method: "post",
            url: energyTipsEndPoint,
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