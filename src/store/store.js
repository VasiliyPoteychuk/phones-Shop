import {configureStore} from '@reduxjs/toolkit'
import productReducer from "./productSlice";
import  usersReducer  from './usersSlice'

export const store = configureStore({
    reducer: {
       product: productReducer,
       users: usersReducer,
    },
})