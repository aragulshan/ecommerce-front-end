import { configureStore } from "@reduxjs/toolkit";
import authRecucer from './slices/authenticationSlice'
import registrationReducer from './slices/registrationSlice';


const store = configureStore({
    reducer :{
        auth:authRecucer,
        registration: registrationReducer,
    },
})

export default store;