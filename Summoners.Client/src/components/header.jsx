import React from 'react';

import '../styles/header.css';

import { logo } from '../assets/images';

const Header = () => {
    return (
        <div className="header">
            <div className="header__inner container">
                <div className="header__logo">
                    <img src={logo} alt="" />
                </div>
                <ul className="header__nav">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Feed</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header