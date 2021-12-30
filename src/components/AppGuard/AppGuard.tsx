import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Navigate } from "react-router-dom";
import { IUser } from "../../interfaces/user.interface";
import { AppDispatch, RootState } from '../../store';
import { createAuthAction } from "../../store/auth.action";

type Props = {
    children: JSX.Element
}

const AppGuard = ({ children }: Props) => {
    const { isAuth, isUserLoading } = useSelector<RootState, IUser>(state => state);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(createAuthAction());

    }, [isAuth, dispatch])

    if (!isAuth && !isUserLoading) {
        return <Navigate to="/login" />
    }

    return children;
}

export default AppGuard;