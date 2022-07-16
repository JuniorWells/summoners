import { useEffect } from 'react'
import '../styles/welcome.css'

import HomeSection from './homeSection';
import hoverEffect from 'hover-effect';

import {
    bg1,
    champAshe,
    champAhri,
    champGaren,
    distortion
} from '../assets/images'

const champImgs = [champAshe, champAhri, champGaren]

const Welcome = props => {

    return (
        <HomeSection
            className={`welcome ${props.isActive ? 'active' : ''}`}
            contentClassName="overlay welcome__content"
            bgImage={bg1}
        >
            <div className="welcome__info relative">
                <div className="welcome__info__content">
                    <div className="title">
                        <span>Welcome To</span>
                        <h2 className="main-color">Summoners</h2>
                    </div>
                    <div className="description m-t-4">
                        Team up with friends and test your skills in League of Legends combat. Then dive into the community of gamers, cosplayers, musicians, and content creators who are waiting for you to join them.
                    </div>
                    <div className="btns m-t-4">
                        <button className="btn-main"> SIGN UP</button>
                        <button className="btn-second"> SIGN IN</button>
                    </div>
                </div>
            </div>
            <div className="welcome__img relative">
                <div className="welcome__img__slide" id="welcome__img__slide">
                    {
                        champImgs.map((item, index) => (
                            <img src={item} key={index}/>
                        ))
                    }
                </div>
            </div>
        </HomeSection>
    )
}

export default Welcome