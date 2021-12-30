import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { createAuthAction } from '../../store/auth.action';

import { IUser } from '../../interfaces/user.interface';
import './Header.css';

const HeaderApp: React.FC = () => {
    const { isAuth, username } = useSelector<RootState, IUser>(state => state);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(createAuthAction());

    }, [isAuth, dispatch])

    return (
        <>
            <div className='information'>
                <div className="contacts">
                    <span>+359-887393652</span>
                    <span>d.dancho@gmail.com</span>
                    <span>Mon-Saturday: 8:30-20:00</span>
                </div>
                <div>
                    <span>search</span>
                </div>
            </div>
            <nav className='container'>
                <h2>Racing Technology</h2>
                <div className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/appointment">Gallery</Link>
                    <Link to="/appointment">Personal Blog</Link>
                    <Link to="/ourteam">Our Team</Link>
                </div>
                <div className="authetication">
                    {isAuth
                        ? (
                            <>
                                <Link to="/createBlogPost">Create Blog</Link>
                                <Link to="/profile">{username}</Link>
                                <Link to="/">Logout</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )
                    }
                </div>
            </nav>
        </>
    )
}

export default HeaderApp;