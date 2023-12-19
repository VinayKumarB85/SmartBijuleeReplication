import { combineReducers } from '@reduxjs/toolkit';
import { dashboardReducer } from './dashBoardReducer';
import { faqReducer } from './faqReducer';
import { energytipsReducer } from './energytipsReducer';
import { personalInfoReducer } from './personalInfoReducer';


export const userDetailsReducer = combineReducers({
    dashboardUser:dashboardReducer,
    faqUser:faqReducer,
    energytipsUser:energytipsReducer,
    userPersonalInfo:personalInfoReducer
    
})