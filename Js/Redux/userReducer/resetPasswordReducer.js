import { createSlice } from '@reduxjs/toolkit';
 import {resetPasswordApi} from '../../api/userApi/resetPasswordApi' 


export const resetPasswordReducer = createSlice({
    name: "resetPasswordReducer",
    initialState: {
        loading: false,
        error: null,
        data: "",
        status: "",
    },
    extraReducers: builder => {
        builder
            .addCase(resetPasswordApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(resetPasswordApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status
                state.error = '';
            })
            .addCase(resetPasswordApi.rejected, (state, action) => {
                console.log('action',action)
                state.data = "";
                state.loading = false;
                state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                state.status = action.payload.status
            });
    },
}).reducer