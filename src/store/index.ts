import { configureStore} from "@reduxjs/toolkit";
import { createdAuthReducer } from "./authSlice";

const store = configureStore({
    reducer: createdAuthReducer.reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;