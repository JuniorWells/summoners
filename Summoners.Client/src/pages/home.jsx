import React from 'react'
import '../styles/home.css'
import HomeSlider from '../components/homeSlider';
import HomeText from '../components/homeText';
import SearchBar from '../components/searchBar';
import Header from '../components/header';
import { bg1 } from '../components/images'

const Home = () => {
  return(
  <div className='background-image' style={{ backgroundImage: `url(${bg1})` }}>
    <Header/>
    <div className='home-container'>
      <div className='home-search'>
        <HomeText/>
        <SearchBar/>
      </div>
      <HomeSlider/>
    </div>
  </div>
    )
  }
  
  export default Home