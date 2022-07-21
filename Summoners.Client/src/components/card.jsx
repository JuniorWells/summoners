import {getLevelIcon} from "../utils/utils";

const Card = ( { data, extraData }) => {

    let index = 0;
    for (let i = 0; i < data.length; i++)
    {
        if (data[i].queueType === "RANKED_SOLO_5x5")
        {
            index = i;
        }
    }

    const profileIcon = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/profileicon/${extraData.profileIconId}.png`

    return (
        <div>
            <h1>{data[index].summonerName}</h1>
            <h1>{data[index].tier}</h1>
            <h1>{data[index].rank}</h1>
            <h1>{data[index].leaguePoints}</h1>
            <h1>{data[index].wins}</h1>
            <h1>{data[index].losses}</h1>
            <h1>{extraData.summonerLevel}</h1>
            <img src={profileIcon}></img>
            
        </div>
    );
}

export default Card;