import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [data, setData] = useState([]);
  const query = 'Unnerfed';

  const getSummoner = async (query) => {
    const response = await fetch(
      `https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${query}?api_key=RGAPI-f97de2dd-d6d4-4a9e-9815-8870413145f4`);
    const deserializedJSON = await response.json();
    setData(deserializedJSON);
  }
    useEffect(() => {
      getSummoner(query);
    },[])
    
        // const id = data.id;
        // console.log(id);

    // console.log(data.name);


  return (
    <div className="App">

      <h1>{data.name}</h1>
      <h2>{data.id}</h2>
    </div>
  );
}

export default App;
