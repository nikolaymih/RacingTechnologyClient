import axios from 'axios';

import {LoginUserInput, RegisterUserInput} from "../validation/authValidation";

const url = `${process.env.REACT_APP_SERVERENDPOINT}`;

export const createUser = async (values: RegisterUserInput) => {
    await axios({
        method: 'POST',
        baseURL: `${url}/api/user`,
        data: {
            name: values.username,
            email: values.email,
            password: values.password,
            passwordConfirmation: values.rePassword
        }
    });
}

export const loginUser = async (values: LoginUserInput) => {
    await axios({
        method: 'POST',
        baseURL: `${url}/api/sessions`,
        data: {
            email: values.email,
            password: values.password,
        },
        withCredentials: true
    });
}

export const getUser = async () => {
    const user = await axios({
        method: 'GET',
        baseURL: `${url}/api/user`,
        withCredentials: true
    });

    if (user.status !== 200) {
        throw new Error('Forbidden');
    }

    return user;
}

export const deleteSession = () => {
    return axios({
        method: 'DELETE',
        baseURL: `${url}/api/sessions`,
        withCredentials: true
    })
}