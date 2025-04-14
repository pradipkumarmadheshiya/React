import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice"
import { actionTypeLogger, payloadLogger } from "./loggerMiddleware";

export default configureStore({
    reducer:{
        counter:counterReducer
    },
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(actionTypeLogger, payloadLogger)
    
})