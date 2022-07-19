import React, { useState, useEffect } from "react";
import '../styles/home.css'

import {
    sliderData
} from '../components/images';

const HomeSlider = () => {
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
                  {/* <h2>{slide.heading}</h2> */}
                  {/* <p>{slide.desc}</p> */}
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
    )
  }
  
  export default HomeSlider