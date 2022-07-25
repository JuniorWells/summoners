import React from 'react'
import '../styles/home.css'
import SearchBar from '../components/homeSearch';
import Header from '../components/header';
import HomeSlider from "../components/homeSlider";
import "../styles/homeSlider.css";

const Home = () => {
  return(
    <div className='home-background'>
      <Header/>
      <HomeSlider/>
      <div className='home-container'>
      <div className='home-search'>
        <h2 className='search-Heading'>Please Enter A Summoner Name to Search</h2>
      <SearchBar/>
         </div>
      </div>
    </div>
    );
  }
  
  export default Home;
