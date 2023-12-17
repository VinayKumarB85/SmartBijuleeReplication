import { createSlice } from '@reduxjs/toolkit';
import { dashBoardApi } from '../../api/userApi';


export const dashboardReducer = createSlice({
    name: "dashboardReducer",
    initialState: {
        loading: false,
        error: null,
        data: "",
        status: "",
    },
    extraReducers: builder => {
        builder
            .addCase(dashBoardApi.pending, (state) => {
                state.loading = true;
            })
            .addCase(dashBoardApi.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload.data;
                state.status = action.payload.status
                state.error = '';
            })
            .addCase(dashBoardApi.rejected, (state, action) => {
                console.log('action',action)
                state.data = "";
                state.loading = false;
                state.error = action.payload.status ===400? action.payload.data.errorDescription : action.payload.data.ErrorDescription ;
                state.status = action.payload.status
            });
    },
}).reducer