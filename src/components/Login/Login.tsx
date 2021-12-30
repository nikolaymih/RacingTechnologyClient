import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from 'antd';

import './Login.css';
import { loginInputSchema, LoginUserInput } from '../../validation/authValidation';
import { loginUser } from '../../service/user.service';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import { createAuthAction } from '../../store/auth.action';

const Login = () => {
    const dispatch = useDispatch<AppDispatch>();
    let [errorMessage, setErrorMessage] = useState('');
    let { register, formState: { errors }, handleSubmit } = useForm<LoginUserInput>({
        resolver: zodResolver(loginInputSchema)
    })
    const navigate = useNavigate();

    const loginSubmitHandler = async (values: LoginUserInput) => {
        try {
            await loginUser(values);

            dispatch(createAuthAction());
            
            navigate('/');
        } catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage('Email or password is incorect');
            }
        }
    }

    return (
        <section className="loginFormWrapper">
            <form className="loginUserForm" onSubmit={handleSubmit(loginSubmitHandler)}>
                <h2>Please enter your account credentials</h2>
                <p className="loginInputErrors">{errorMessage}</p>
                <div>
                    <label htmlFor="email" style={{ color: "darkgray" }}>
                        Email
                    </label>
                    <input type="text" id="email" {...register('email')} />
                    <p className="loginInputErrors">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password" style={{ color: "darkgray" }}>
                        Password
                    </label>
                    <input type="password" id="password" {...register('password')} />
                    <p className="loginInputErrors">{errors.password?.message}</p>
                </div>
                <Button type="primary" htmlType="submit" className='loginSubmitter' >
                    Login
                </Button>
            </form>
        </section>
    );
}

export default Login;

