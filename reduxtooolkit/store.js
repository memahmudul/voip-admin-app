import { configureStore } from "@reduxjs/toolkit";

import authReducer from './authSlice'
import balanceRequestReducer from './balanceRequestSlice'
import userReducer from './userSlice'
import orderReducer from './orderSlice'
import offerReducer from './offerSlice'

const store = configureStore({
    reducer:{
        auth:authReducer,
        balanceRequest:balanceRequestReducer,
        user: userReducer,
        order: orderReducer,
        offer: offerReducer
    }
})


export default store