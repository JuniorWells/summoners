import {useState, useEffect} from 'react';
import './styles/profile.css';
import Summoner from './SummonerIcon.png'

function Profile() {
    
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
