
import { combineReducers } from '@reduxjs/toolkit';
import { webSocketConnectionReducer } from "./webSocketReducer";
import { userReducer,userVerifyReducer } from "./userReducer";

export const authReducer = combineReducers({
    userVerify:userVerifyReducer,
    user:userReducer

    // user: otpVerifyReducer,
    // userVerify: userVerifyReducer,
    // webSocket: webSocketConnectionReducer
})