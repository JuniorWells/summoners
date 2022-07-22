import React from 'react';
import { Link } from "react-router-dom";
import HomeSlider from '../components/homeSlider';

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
                <h2 className="title__name">Summoners</h2>
            </div>
    )
}

export default Header