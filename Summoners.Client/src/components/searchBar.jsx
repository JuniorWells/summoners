import React, { useState } from 'react';
// import getPosts from '../utils/postsApi';
import "../styles/search.css";

import { Link } from "react-router-dom";

const SearchBar = ({keyName}) => {
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
                <Link to="/profile" state={{ value }}>
            <input
                type='text'
                placeholder='Enter summoner name'
                value={value}
                className = 'search__input'
                onChange={e => setValue(e.target.value)}
            />
            {value && <span onSubmit={clearSearch}></span>}
            {keyName === false
                ? <button className='custom' onClick={clearSearch}>{keyName}</button>
                : <button className='btn-search' onClick={clearSearch}>{keyName}</button>
            }
            </Link>
            </form>
        </div>
)};

export default SearchBar;