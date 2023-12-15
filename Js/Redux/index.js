import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
// import { systemReducer } from './systemReducer';

export const reducer = combineReducers({
    auth: authReducer,
    // system: systemReducer,
})