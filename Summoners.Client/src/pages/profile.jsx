import Header from '../components/header';
import '../styles/search.css';
import '../styles/profile.css';
import Card from '../components/card';
import { bg2 } from '../components/images'
import SearchBar from '../components/searchBar';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import getStats from '../utils/utils';


const Profile = () => {

    const apiKey = 'RGAPI-996997d7-dad1-4328-9f8c-23d3179ffe60';
    const location = useLocation();
    const { stats } = location.state;
    const [ data, setData ] = useState(location.state.value);
 
    const handleSearchResults = async () => {
      const userStats = await getStats(location.state.value, apiKey);
      console.log(userStats);
      setData(userStats);
    }

    useEffect(() => {
      handleSearchResults();
      console.log(`data: ${data}`);
    }, [location.state.value]);

    return (
      <>
        <Header/>
        <div className="profile-background" style={{ backgroundImage: `url(${bg2})` }}>
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>
          </div>
          <Card data={data} />
          </div>
        </div>
      </>
    );
  }

export default Profile;