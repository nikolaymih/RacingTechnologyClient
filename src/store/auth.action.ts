import { AppDispatch } from ".";
import { IUser } from "../interfaces/user.interface";
import { getUser } from "../service/user.service";
import { authAction } from "./auth.slice";

export const createAuthAction = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await getUser();
            const user: IUser = response.data;

            dispatch(authAction.configureAuth(user), );
            dispatch(authAction.isUserLoading({}));
        } catch (error) {
            dispatch(authAction.removeAuthentication({}))
            dispatch(authAction.isUserLoading({}));
        }
    }
}