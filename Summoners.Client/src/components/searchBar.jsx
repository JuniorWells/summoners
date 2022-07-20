import React, { useState } from 'react';
import getStats from '../utils/utils';
import { Link } from 'react-router-dom';

const SearchBar = () => {
        
    const [value, setValue] = useState('');
    const apiKey = 'RGAPI-a2457617-1432-4540-b46a-4cc0c9a00f6e';

    const formSubmit = (e) => {
        e.preventDefault();
        handleSearchResults();
    }

    const handleSearchResults = async () => {
        const userStats = await getStats(value, apiKey);
        // const filteredStats = allBlogs.filter((blog) =>
        //     blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        // );
        console.log(userStats);
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
            <Link to="/profile">
                <button className='btn-search' onClick={clearSearch}>Search</button>
            </Link>
            </form>
        </div>
)};

export default SearchBar;