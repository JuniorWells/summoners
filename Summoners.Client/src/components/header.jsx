import React from 'react';
import { Link } from "react-router-dom";

import '../styles/header.css';

import { logo } from './images';

const Header = () => {
    return (
        <div className="header">
                <div className="header__logo">
                <Link to="/">
                    <img src={logo} alt="" />
                </Link>
                </div>
            <div className="header__inner">
                <ul className="header__nav">
                    <li>   
                    <Link to="/">
                    Home
                </Link>
                </li>
                    <li>
                    <Link to="/feed">
                    Feed
                </Link>
                    </li>
                    <li><Link to="/search">
                    Search
                </Link></li>
                    <li><Link to="/about">
                    AboutUs
                </Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header