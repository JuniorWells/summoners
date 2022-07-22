import '../styles/post.css';

const Post = () => {

    return (
        <div> 
                <div className="center">
                <div className="card green">
                <div className="additional">
                    <div className="user-card">

                    </div>
                    <div className="more-info">
                    <h1>{data[index].summonerName}</h1>
                    <div className="coords">
                        <span>Rank:   {data[index].tier} {data[index].rank}</span>
                        <span>Summoner Level:    {extraData.summonerLevel}</span>
                    </div>
                    {/* <div className="coords"> */}
                        {/* <span>Summoner Level:</span> */}
                        {/* <span>{extraData.summonerLevel}</span> */}
                    {/* </div> */}
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