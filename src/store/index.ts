import { rootWatcher } from "./saga"
import createSagaMiddleware from 'redux-saga'
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
    devTools: process.env.NODE_ENV != "production",
    reducer: rootReducer, 
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
})

sagaMiddleware.run(rootWatcher)