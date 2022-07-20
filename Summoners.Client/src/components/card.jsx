
const Card = ( { data }) => {

// 1. Tier
// 2. Rank
// 3. Summoner Name
// 4. League Points
// 5. Wins
// 6. Losses
// 7. Win ratio 

    let index = 0;
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].queueType === "RANKED_SOLO_5x5")
        {
            index = i;
        }
    }


    return (
        <div>
            <h1>{data[index].summonerName}</h1>
            <h1>{data[index].tier}</h1>
            <h1>{data[index].rank}</h1>
            <h1>{data[index].leaguePoints}</h1>
            <h1>{data[index].wins}</h1>
            <h1>{data[index].losses}</h1>
            
        </div>
    );
}

export default Card;