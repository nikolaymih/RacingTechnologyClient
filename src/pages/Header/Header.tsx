import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../store';
import {useDispatch} from 'react-redux';
import {createAuthAction, logoutAuthAction} from '../../store/auth.action';
import {useNavigate} from 'react-router-dom';

import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import {IUser} from '../../interfaces/user.interface';
import './Header.css';

const HeaderApp: React.FC = () => {
    const {isAuth, username} = useSelector<RootState, IUser>(state => state);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(createAuthAction());

    }, [isAuth, dispatch])

    const logoutHandler = async (e: React.MouseEvent) => {
        e.preventDefault();

        await dispatch(logoutAuthAction());

        navigate('/login');
    }

    return (
        <>
            <div className='information'>
                <div className="contacts">
                    <span>+359-887393652</span>
                    <span>d.dancho@gmail.com</span>
                    <span>Mon-Saturday: 8:30-20:00</span>
                </div>
                <div>
                    <Link to="/shoppingCard" >
                        <ShoppingCartOutlinedIcon className="shoppingCard"/>
                    </Link>
                </div>
            </div>
            <nav className='container'>
                <h2>Racing Technology</h2>
                <div className='navigation'>
                    <Link to="/">Home</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/appointment">Appointment</Link>
                    <Link to="/appointment">Gallery</Link>
                    <Link to="/appointment">Personal Blog</Link>
                    <Link to="/our-team">Our Team</Link>
                </div>
                <div className="authetication">
                    {isAuth
                        ? (
                            <>
                                <Link to="/createBlogPost">Create Service</Link>
                                <Link to="/createProduct">Create Product</Link>
                                <Link to="/profile">{username}</Link>
                                <button className="logout" onClick={logoutHandler.bind(this)}>Logout</button>
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