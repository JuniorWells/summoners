import React from 'react'
import '../styles/home.css'
import SearchBar from '../components/searchBar';
import Header from '../components/header';


const Home = () => {
  return(
    <div className='home-background'>
      <Header/>
      <div className='home-container'>
      <div className='home-search'>
      <SearchBar/>
         </div>
      </div>
    </div>
    );
  }
  
  export default Home;