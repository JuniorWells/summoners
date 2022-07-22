import Header from '../components/header';
import '../styles/search.css';
import '../styles/profile.css';
import Card from '../components/card';
import { bg2 } from '../components/images';
import SearchBar from '../components/searchBar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {getStats, getLevelIcon} from '../utils/utils';


const Profile = () => {

    const apiKey = 'RGAPI-593c2563-4ba7-4bfe-be06-1870fd5f64bf';
    const location = useLocation();
    const [ data, setData ] = useState(location.state.value);
    const [ fixedData, setFixedData ] = useState(null);
    const [ extraData, setExtraData ] = useState(null);
 
    const handleSearchResults = async () => {
        const userStats = await getStats(location.state.value, apiKey);
        const temp = await getLevelIcon(location.state.value, apiKey);
        setExtraData(temp);
        setData(userStats);
        setFixedData(userStats);
    }

    const dataCheck = () => {
        if (fixedData === null || fixedData.length === 0 || fixedData === undefined)
        {
            return false;
        }
        return true;
    }

    useEffect(() => {
        handleSearchResults();
    }, [location.state.value]);

    return (
      <>
        <Header/>
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>
          </div>
            {dataCheck() ? <Card data={ data } extraData = {extraData}/> : <h1>No results found</h1>}
          </div>
      </>
    );
  }

export default Profile;
