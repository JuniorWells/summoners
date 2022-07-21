import Header from '../components/header';
import '../styles/search.css';
import '../styles/profile.css';
import Card from '../components/card';
import { bg2 } from '../components/images'
import SearchBar from '../components/searchBar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import {getStats, getLevelIcon} from '../utils/utils';


const Profile = () => {

    const apiKey = 'RGAPI-2201aa3d-a713-4b7e-8c11-5a0ebd727be0';
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
        <div className="profile-background" style={{ backgroundImage: `url(${bg2})` }}>
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>
          </div>
          {dataCheck() ? <Card data={ data } extraData = {extraData}/> : <h1>No results found</h1>}
          </div>
        </div>
      </>
    );
  }

export default Profile;
