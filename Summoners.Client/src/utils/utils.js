// import fetch from 'node-fetch';
// const apiKey = 'RGAPI-f97de2dd-d6d4-4a9e-9815-8870413145f4';
// const query = 'Unnerfed';

const getSummonerId = async (query, apiKey) => {
    const response = await fetch(
        `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=${apiKey}`);
    const deserializedJSON = await response.json();
    return deserializedJSON.id;
}

const getSummonerStats = async (id, apiKey) => {
    const response = await fetch(
        `https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${apiKey}`
    );
    const deserializedJSON = await response.json();
    return deserializedJSON;
}

const getStats = async(query, apiKey) => {
    const temp = await getSummonerId(query, apiKey);
    const final = await getSummonerStats(temp, apiKey);
    return final;
}

export default getStats;