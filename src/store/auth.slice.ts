import {  createSlice } from "@reduxjs/toolkit";

export const createdAuthReducer = createSlice({
    name: 'authetication',
    initialState: {
        isAuth: false,
        username: '',
        email: '',
        isUserLoading: true
    },
    reducers: {
        configureAuth(state, action) {
            state.isAuth = true;
            state.username = action.payload.name;
            state.email = action.payload.email;
            state.isUserLoading = !state.isUserLoading;
        },
        removeAuthentication(state) {
            state.isAuth = false;
            state.username = '';
            state.email = '';
            state.isUserLoading = !state.isUserLoading;
        }
    }
})

export const authAction = createdAuthReducer.actions;
