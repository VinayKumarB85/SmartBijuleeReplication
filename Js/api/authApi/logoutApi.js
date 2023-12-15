import { logoutEndpoint } from "../../constants";
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiManager } from '../ApiManager';
import { useSelector } from "react-redux";


export const logoutApi = createAsyncThunk(logoutEndpoint,
    async (data, { getState, rejectWithValue, dispatch }) => {
        const params = {
            ...data
        }
        const request = {
            method: "delete",
            // header: at,
            url: logoutEndpoint,
            body: {},
        };

        const addHeaders = {
            "x-app-id": "1",
        }

        try {
            console.log("getstae", getState().auth.user.at, request)
            const res = await dispatch(ApiManager(getState().auth.user.at, request, addHeaders));
            return res
        } catch (error) {
            console.log("errror122", error)
            const data = {
            }
            return rejectWithValue(data)
        }
    })