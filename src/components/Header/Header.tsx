import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const HeaderApp: React.FC = () => {
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
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                    <Link to="/">Logout</Link>
                </div>
            </nav>
        </>
    )
}

export default HeaderApp;