import React from 'react'
import '../styles/home.css'
import { useState, useEffect } from "react";
import SearchBar from '../components/searchBar';

import Header from '../components/header';

import {
    bg1,
    sliderData
} from '../components/images'

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 4000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
  
    function auto() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);

    return (
      <>
      <Header/>
        <div className='background-image' style={{ backgroundImage: `url(${bg1})` }}>
                <div className="welcome__content">
                    <div className="welcome__title">
                        <span>Welcome To</span>
                        <h2 className="title__name">Summoners</h2>
                    </div>
                    <div className="description">
                        Team up with friends and test your skills in League of Legends combat. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
                    </div>
                    <div>

                        <SearchBar />
                    </div>
                    {/* <div className="btns">
                        <button className="btn-main">SIGN IN RIOT ID</button>
                    </div> */}
                </div>
            
            <div className="welcome__img">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
            >
            {index === currentSlide && (
              <div className="welcome__img__slide">
                 
                <div className="welcome__img__content">
                  <h2>{slide.heading}</h2>
                  {/* <p>{slide.desc}</p> */}
                  <hr />
                </div>
                <div className='image'>
                <img src={slide.image} alt="slide" />
                </div>
             
              </div>
            )}
          </div>
        );
      })}

      </div>
    </div>
    </>
    )
  }
  
  export default Home