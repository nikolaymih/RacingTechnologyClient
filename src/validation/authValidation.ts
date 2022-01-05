import { object, string, TypeOf } from 'zod';

export const registerInputSchema = object({
    email: string().email('Not a valid email').nonempty({
        message: 'Email should not be empty'
    }),
    username: string().min(1, {
        message: 'Username should not be empty'
    }),
    password: string().min(6, {
        message: 'Password should be at least 6 characters'
    }),
    rePassword: string().min(6, {
        message: 'Password should be at least 6 characters'
    })
}).refine((data) => data.password === data.rePassword, {
    message: 'Passwords should match',
    path: ['rePassword']
})

export type RegisterUserInput = TypeOf<typeof registerInputSchema>;

export const loginInputSchema = object({
    email: string().min(1, {
        message: 'Email is required'
    }),
    password: string().min(6, {
        message: 'Password should be at least 6 symbols'
    })
})

export type LoginUserInput = TypeOf<typeof loginInputSchema>;