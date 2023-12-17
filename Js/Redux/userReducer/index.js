import { combineReducers } from '@reduxjs/toolkit';
import { dashboardReducer } from './dashBoardReducer';


export const userDetailsReducer = combineReducers({
    dashboardUser:dashboardReducer
})