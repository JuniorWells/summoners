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
        <div className='entire-card'> 
                <div className="center">
                <div className="card green">
                <div className="additional">
                    <div className="user-card">
                    {/* <div class="level center">
                        Level
                    </div> */}
                        <div className='IconDiv'>
                            <img className='Icon' src={profileIcon}/>
                        </div>
                    </div>
                    <div className="more-info">
                    <h1>{data[index].summonerName}</h1>
                    <div className="coords">
                        <span>Rank:   {data[index].tier} {data[index].rank}</span>
                        <span>Summoner Level:    {extraData.summonerLevel}</span>
                    </div>
                    <div className="coords">
                        <span>LP:    {data[index].leaguePoints}</span>
                    </div>
                    <div className="stats">
                        <div>
                        <div className="title">Wins</div>
                        <i className="fa fa-trophy"></i>
                        <div className="value">{data[index].wins}</div>
                        </div>
                        <div>
                        <div className="title">Losses</div>
                        <i className="fa fa-gamepad"></i>
                        <div className="value">{data[index].losses}</div>
                        </div>
                        <div>
                        <div className="title">Win Ratio</div>
                        <i className="fa fa-group"></i>
                        <div className="value">{ourRatio} %</div>
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