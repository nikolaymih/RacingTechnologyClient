import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerInputSchema, RegisterUserInput } from '../../validation/auth.validation';
import { createUser } from '../../service/user.service';

import { Button } from 'antd';
import './Register.css';

const Register = () => {
    let [errorMessage, setErrorMessage] = useState('');
    const { register, formState: { errors }, handleSubmit } = useForm<RegisterUserInput>({
        resolver: zodResolver(registerInputSchema)
    });
    const navigate = useNavigate();

    const onSubmit = async (values: RegisterUserInput) => {
        try {
            await createUser(values);
            navigate('/login');
        } catch (e: unknown) {
            if (e instanceof Error) {
                setErrorMessage('Email or username already exists');
            }
        }
    };

    return (
        <section className='register-section-wrapper'>
            <form className='form-register' onSubmit={handleSubmit(onSubmit)}>
                <h2><b>Register Your Account</b></h2>
                <p className="registerInputErrors">{errorMessage}</p>
                <div>
                    <label htmlFor="username"><span style={{ color: 'red' }}>*</span>USERNAME</label>
                    <input type="text" id='username' {...register('username')} />
                    <p className="registerInputErrors">{errors.username?.message}</p>
                </div>
                <div>
                    <label htmlFor="text"><span style={{ color: 'red' }}>*</span>EMAIL</label>
                    <input type="email" id='email' {...register('email')} />
                    <p className="registerInputErrors">{errors.email?.message}</p>
                </div>
                <div>
                    <label htmlFor="password"><span style={{ color: 'red' }}>*</span>PASSWORD</label>
                    <input type="password" id='password' {...register('password')} />
                    <p className="registerInputErrors">{errors.password?.message}</p>
                </div>
                <div>
                    <label htmlFor="rePassword"><span style={{ color: 'red' }}>*</span>REPASSWORD</label>
                    <input type="password" id='rePassword' {...register('rePassword')} />
                    <p className="registerInputErrors">{errors.rePassword?.message}</p>
                </div>
                <p>Fields which have <b style={{ color: 'red' }}>*</b> in front of them are obligatory!</p>
                <Button type="primary" htmlType="submit" className='registerSubmitter' >
                    Register
                </Button>
            </form>
        </section>
    );
}

export default Register;


