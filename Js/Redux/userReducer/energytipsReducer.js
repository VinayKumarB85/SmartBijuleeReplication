import { createSlice } from '@reduxjs/toolkit';
import { faqApi } from '../../api/userApi/faqApi';
import { energyTipsApi } from '../../api/userApi/energyTipsApi';


export const energytipsReducer = createSlice({
    name: "energytipsReducer",
    initialState: {
        loading: false,
        error: null,
        data: "",
        status: "",
    },
    extraReducers: builder => {
        builder
            .addCase(energyTipsApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(energyTipsApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status
                state.error = '';
            })
            .addCase(energyTipsApi.rejected, (state, action) => {
                console.log('action',action)
                state.data = "";
                state.loading = false;
                state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                state.status = action.payload.status
            });
    },
}).reducer