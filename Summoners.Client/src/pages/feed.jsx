import React from 'react'
import Header from '../components/header';
import '../styles/feed.css';
import {
  bg3
} from '../components/images'

export default function Feed() {
  
    return (
      <>
        <Header/>
        <div className='feed-background' style={{ backgroundImage: `url(${bg3})` }}>
          <div>
            <h2 className='feed__contents'>
              This is our Feed Page
            </h2>
          </div>
        </div>
      </>
    );
  }