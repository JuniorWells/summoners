import React from 'react'
import '../styles/home.css'
import HomeSlider from '../components/homeSlider';
import HomeText from '../components/homeText';
import SearchBar from '../components/searchBar';
import Header from '../components/header';


const Home = () => {
  return(
    <div className='home-background'>
  <Header/>
  <div className='home-container'>
    <div className='home-search'>
  <HomeText/>
  <SearchBar/>
    </div>
  </div>
    )
  }
  
  export default Home