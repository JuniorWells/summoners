import {useState, useEffect} from 'react';
import React from "react";
import Home from './pages/home';
import Feed from './pages/feed';
import Search from './pages/search';
import About from './pages/about';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="feed" element={<Feed />} />
      <Route path="search" element={<Search />} />
      <Route path="about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
