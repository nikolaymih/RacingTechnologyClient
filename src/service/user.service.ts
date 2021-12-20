import axios from 'axios';

import { LoginUserInput, RegisterUserInput } from "../validation/authValidation";

const url = `${process.env.REACT_APP_SERVERENDPOINT}`;

export const createUser = async (values: RegisterUserInput) => {
    const createdUser = await axios({
        method: 'POST',
        baseURL: `${url}/api/user`,
        data: {
            name: values.username,
            email: values.email,
            password: values.password,
            passwordConfirmation: values.rePassword
        }
    });

    return createdUser;
}

export const loginUser = async (values: LoginUserInput) => {
    const user = await axios({
        method: 'POST',
        baseURL: `${url}/api/sessions`,
        data: {
            email: values.email,
            password: values.password,
        },
        withCredentials: true
    });

    return user;
}

export const getUser = async () => {
    const user = await axios({
        method: 'GET',
        baseURL: `${url}/api/user`,
        withCredentials: true
    });

    return user;
}