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
        isUserLoading(state) {
            state.isUserLoading = !state.isUserLoading;
        },
        configureAuth(state, action) {
            state.isAuth = true;
            state.username = action.payload.name;
            state.email = action.payload.email;
        },
        removeAuthentication(state) {
            state.isAuth = false;
            state.username = '';
            state.email = '';
        }
    }
})

export const authAction = createdAuthReducer.actions;
