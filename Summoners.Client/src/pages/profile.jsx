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

    const apiKey = 'RGAPI-996997d7-dad1-4328-9f8c-23d3179ffe60';
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
    <header className='header'> 
    <div class="center">
    <div class="card green">
      <div class="additional">
        <div class="user-card">
          {/* <div class="level center">
            Level
          </div> */}
            <div className='IconDiv'>
                <img className='Icon' src={Summoner}/>
            </div>
        </div>
        <div class="more-info">
          <h1>@Unnerfed</h1>
          <div class="coords">
            <span>Rank:</span>
            <span>Diamond II</span>
          </div>
          <div class="coords">
            <span>Summoner Level:</span>
            <span>357</span>
          </div>
          <div class="stats">
            <div>
              <div class="title">Wins</div>
              <i class="fa fa-trophy"></i>
              <div class="value">0</div>
            </div>
            <div>
              <div class="title">Losses</div>
              <i class="fa fa-gamepad"></i>
              <div class="value">4001</div>
            </div>
            <div>
              <div class="title">Win Ratio</div>
              <i class="fa fa-group"></i>
              <div class="value">-4001</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  </header>
  <gallery> 
    <ul> 
        
    </ul>
  </gallery>
  </>
    );
  }

export default Profile;
