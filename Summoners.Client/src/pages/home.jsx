import React from 'react'
import '../styles/home.css'
import { useState, useEffect } from "react";

import {
    bg1,
    sliderData
} from '../components/images'

// const champImgs = [champGaren]

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;
  
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 4000;
  
    const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
      console.log("next");
    };
  
    const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
      console.log("prev");
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
        <div className='background-image' style={{ backgroundImage: `url(${bg1})` }}>

        <div className="welcome__info">
                <div className="welcome__info__content">
                    <div className="welcome__title">
                        <span>Welcome To</span>
                        <h2 className="title__name">Summoners</h2>
                    </div>
                    <div className="description m-t-4">
                        Team up with friends and test your skills in League of Legends combat. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
                    </div>
                    <div className="btns">
                        <button className="btn-main"> SIGN UP</button>
                        <button className="btn-second"> SIGN IN</button>
                    </div>
                </div>
            
            <div className="welcome__img">
            <div className="welcome__img__slide">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <div className="welcome__img__content">
                  <h3>{slide.heading}</h3>
                  <p>{slide.desc}</p>
                  <hr />
                </div>
                <img src={slide.image} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}


                </div>
            </div>
    </div>
    </div>
    )
}

export default Home