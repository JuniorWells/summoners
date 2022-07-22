import Header from '../components/header';
import '../styles/profile.css';
import Card from '../components/card';
import SearchBar from '../components/searchBar';
import { useLocation } from 'react-router-dom';
import { useState , useEffect } from 'react';
import { getStats, getLevelIcon } from '../utils/utils';
import { usePromiseTracker, trackPromise } from "react-promise-tracker";
import Loading from '../components/loading';
import PostList from '../components/postList';


const Profile = () => {

    const apiKey = 'RGAPI-a31b222f-6265-4cda-a017-e4304cddec19';
    const location = useLocation();
    const [ data, setData ] = useState(location.state.value);
    const [ extraData, setExtraData ] = useState({});
    const { promiseInProgress } = usePromiseTracker();
    const sleep = ms => new Promise(r => setTimeout(r, ms));
 
    const handleSearchResults = async () => {
        await sleep(1000);
        const userStats = await getStats(location.state.value, apiKey);
        const temp = await getLevelIcon(location.state.value, apiKey);
        setExtraData(temp);
        setData(userStats);
    }

     const isDataValid = extraData.hasOwnProperty('name')

    useEffect(() => {
        trackPromise(handleSearchResults());
        setData({});
        setExtraData({});
    }, [location.state.value]);

    return (
      <>
        <Header/>
        <div className='profile-wrapper'>
          <div className='profile__search'>
            <SearchBar/>
          </div>
          {promiseInProgress
              ? <Loading />
              :  isDataValid ? <Card data={ data } extraData={ extraData } /> : <h1 className='error-message'>"This SummonerName does not exist! Check your spelling idiot!"</h1> }
          <PostList />

        </div>
      </>
    );
  }

export default Profile;
