import { createSlice } from '@reduxjs/toolkit';
import { otpVerifyApi, userVerifyApi } from '../../api/authApi';

// import { drawerApi } from '../api/drawer/drawerApi';


export const userReducer = createSlice({
        name: "userReducer",
        initialState: {
            loading: false,
            error: null,
            data: "",
            status: "",
        },
        extraReducers: builder => {
            builder
                .addCase(otpVerifyApi.pending, (state) => {
                    state.loading = true;
                })
                .addCase(otpVerifyApi.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload.data;
                    state.status = action.payload.status
                    state.error = '';
                })
                .addCase(otpVerifyApi.rejected, (state, action) => {
                    console.log('action',action)
                    state.data = "";
                    state.loading = false;
                    state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                    state.status = action.payload.status
                });
        },
    }).reducer

    export const userVerifyReducer = createSlice({
        name: "userVerifyReducer",
        initialState: {
            loading: false,
            error: null,
            data: "",
            status: "",
        },
        extraReducers: builder => {
            builder
                .addCase(userVerifyApi.pending, (state) => {
                    state.loading = true;
                })
                .addCase(userVerifyApi.fulfilled, (state, action) => {
                    state.loading = false;
                    state.data = action.payload.data;
                    state.status = action.payload.status
                    state.error = '';
                })
                .addCase(userVerifyApi.rejected, (state, action) => {
                    console.log('action',action)
                    state.data = "";
                    state.loading = false;
                    state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                    state.status = action.payload.status
                });
        },
    }).reducer