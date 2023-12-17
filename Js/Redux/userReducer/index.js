import { combineReducers } from '@reduxjs/toolkit';
import { dashboardReducer } from './dashBoardReducer';
import { faqReducer } from './faqReducer';


export const userDetailsReducer = combineReducers({
    dashboardUser:dashboardReducer,
    faqUser:faqReducer
    
})