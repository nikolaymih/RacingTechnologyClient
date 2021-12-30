import { configureStore} from "@reduxjs/toolkit";
import { createdAuthReducer } from "./auth.slice";

const store = configureStore({
    reducer: createdAuthReducer.reducer
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;