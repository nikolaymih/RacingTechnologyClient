import {  createSlice, Slice } from "@reduxjs/toolkit";
import { AppDispatch } from ".";
import { getUser } from "../service/user.service";

export interface IUser {
    _id: string
    name: string,
    email: string
}

export const createdAuthReducer: Slice = createSlice({
    name: 'authetication',
    initialState: {
        isAuth: false,
        username: null,
        email: null
    },
    reducers: {
        configureAuth(state, action) {
            state.isAuth = true;
            state.username = action.payload.name;
            state.email = action.payload.email;
        }
    }
})

export const createAuthAction = () => {
    return async (dispatch: AppDispatch) => {
        const response = await getUser();
        const user: IUser = response.data;

        dispatch(authAction.configureAuth(user));
    }
}

export const authAction = createdAuthReducer.actions;
