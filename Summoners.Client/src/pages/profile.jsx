import Header from '../components/header';
import '../styles/search.css';
import '../styles/profile.css';
import Card from '../components/card';
import SearchBar from '../components/searchBar';
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';
import {getStats, getLevelIcon} from '../utils/utils';


const Profile = () => {

    const apiKey = 'RGAPI-593c2563-4ba7-4bfe-be06-1870fd5f64bf';
    const location = useLocation();
    const [ data, setData ] = useState(location.state.value);
    const [ extraData, setExtraData ] = useState({});
 
    const handleSearchResults = async () => {
        const userStats = await getStats(location.state.value, apiKey);
        const temp = await getLevelIcon(location.state.value, apiKey);
        setExtraData(temp);
        setData(userStats);
        
    }

     const isDataValid = extraData.hasOwnProperty('name')

    useEffect(() => {

        handleSearchResults();
        
    }, [location.state.value]);

    return (
      <>
        <Header/>
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>

           { isDataValid ? <Card data={ data } extraData={ extraData } /> : <h1>"This SummonerName does not exist! Check your spelling idiot!"</h1>}
          
      </>
    );
  }

export default Profile;
