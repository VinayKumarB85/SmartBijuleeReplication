import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './authReducer';
import { systemReducer } from './SystemReducer';
import { userDetailsReducer } from './userReducer';

export const reducer = combineReducers({
    auth: authReducer,
    system: systemReducer,
    userDetails:userDetailsReducer
})