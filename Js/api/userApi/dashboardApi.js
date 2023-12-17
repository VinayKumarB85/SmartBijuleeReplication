
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { dashBoardEndPoint } from '../../Constants/SettingCardInfo/Apiurl';


export const dashBoardApi = createAsyncThunk(dashBoardEndPoint,
    async (requestData, { getState, fulfillWithValue, rejectWithValue, dispatch }) => {
        const request = {
            method: "post",
            url: dashBoardEndPoint,
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