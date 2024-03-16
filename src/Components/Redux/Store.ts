import { configureStore } from "@reduxjs/toolkit/react";
import { StyleSlice } from "./StyleSlice";

const store = configureStore({
    reducer: {
        style: StyleSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store