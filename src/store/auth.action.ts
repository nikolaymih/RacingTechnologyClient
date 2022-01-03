import { AppDispatch } from ".";
import { IUser } from "../interfaces/user.interface";
import { deleteSession, getUser } from "../service/user.service";
import { authAction } from "./auth.slice";

export const createAuthAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await getUser();
            const user: IUser = response.data;

            dispatch(authAction.configureAuth(user));
        } catch (error) {
            dispatch(authAction.removeAuthentication())
        }
    }
}

export const logoutAuthAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            //delete tokens from backend
            await deleteSession();
            //reset the user store to initial;    
            dispatch(authAction.removeAuthentication());
        } catch (error) {
            // write potential error pop up message.
            dispatch(authAction.removeAuthentication());
        }
    }
}

