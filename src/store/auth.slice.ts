import {  createSlice, Slice } from "@reduxjs/toolkit";

export const createdAuthReducer: Slice = createSlice({
    name: 'authetication',
    initialState: {
        isAuth: false,
        username: null,
        email: null,
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
            state.username = null;
            state.email = null;
        }
    }
})

export const authAction = createdAuthReducer.actions;
