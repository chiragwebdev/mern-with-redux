import { configureStore } from '@reduxjs/toolkit'
import customslice from "./Slicecreate";
import dataapi from "./Dataapi";
import { postapi } from './api'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        custom: customslice,
        dataapi: dataapi,
        [postapi.reducerPath]: postapi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postapi.middleware),
});

setupListeners(store.dispatch)

export default store;