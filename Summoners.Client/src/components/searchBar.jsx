import React, { useState } from 'react';

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
            <form onSubmit={formSubmit}>
            <input
                type='text'
                placeholder='Enter summoner name'
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            {value && <span onClick={clearSearch}></span>}
            <Link to="/profile" state={{ value }}>
                <button className='btn-search' onClick={clearSearch}>Login</button>
            </Link>
            </form>
        </div>
)};

export default SearchBar;