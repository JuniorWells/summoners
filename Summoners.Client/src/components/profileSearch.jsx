import React, { useState } from 'react';
import "../styles/search.css";

import { Link } from "react-router-dom";

const SearchBar = () => {
        
    const [value, setValue] = useState('');

    const formSubmit = (e) => {
        e.preventDefault();
    }

    const clearSearch = () => {
        setValue('');
    };

    return (
        <div className='searchBar__wrap'>
            <form  className = 'searchform' onSubmit={formSubmit}>
            <input
                type='text'
                placeholder='Enter summoner name'
                value={value}
                className = 'search__input'
                onChange={e => setValue(e.target.value)}
            />
            <Link to="/profile" state={{ value }}>
            {value && <span onClick={clearSearch}></span>}
            </Link>
            </form>
        </div>
)};

export default SearchBar;