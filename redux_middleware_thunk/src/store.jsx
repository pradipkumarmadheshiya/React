import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./coffeeSlice"
import logger from "redux-logger"
export default configureStore({
    reducer:{
        coffee:coffeeReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})