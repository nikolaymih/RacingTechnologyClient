import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../interfaces/user.interface";
import { RootState, AppDispatch } from '../../store';
import { createAuthAction } from "../../store/auth.action";

type Props = {
    children: JSX.Element,
}

const PublicGuard = ({ children }: Props) => {
    const { isAuth } = useSelector<RootState, IUser>(state => state)
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(createAuthAction());
        console.log('test');
    }, [isAuth, dispatch])

    return children
}

export default PublicGuard;