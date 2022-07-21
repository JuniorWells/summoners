// import {getLevelIcon} from "../utils/utils";
import '../styles/card.css';

const Card = ( { data, extraData }) => {

    let index = 0;
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].queueType === "RANKED_SOLO_5x5")
        {
            index = i;
        }
    }

    const wins = parseInt(data[index].wins);
    const losses = parseInt(data[index].losses);
    const ratio = (wins /(wins + losses)) * 100;
    const ourRatio = Math.round(ratio * 100) / 100;

    const profileIcon = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${extraData.profileIconId}.png`

    return (
        <div> 
                <div class="center">
                <div class="card green">
                <div class="additional">
                    <div class="user-card">
                    {/* <div class="level center">
                        Level
                    </div> */}
                        <div className='IconDiv'>
                            <img className='Icon' src={profileIcon}/>
                        </div>
                    </div>
                    <div class="more-info">
                    <h1>{data[index].summonerName}</h1>
                    <div class="coords">
                        <span>Rank:</span>
                        <span>{data[index].tier} {data[index].rank} </span>
                    </div>
                    <div class="coords">
                        <span>Summoner Level:</span>
                        <span>{extraData.summonerLevel}</span>
                    </div>
                    <div class="stats">
                        <div>
                        <div class="title">Wins</div>
                        <i class="fa fa-trophy"></i>
                        <div class="value">{data[index].wins}</div>
                        </div>
                        <div>
                        <div class="title">Losses</div>
                        <i class="fa fa-gamepad"></i>
                        <div class="value">{data[index].losses}</div>
                        </div>
                        <div>
                        <div class="title">Win Ratio</div>
                        <i class="fa fa-group"></i>
                        <div class="value">{ourRatio} %</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            
            </div>
        </div>
    );
}

export default Card;