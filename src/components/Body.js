import React from 'react';
import './Body.css'
import image from '../images/home.png';

const Body = () => {
  return (
    <div>
        <img class="main-body" src={image} alt="home"/>
    </div>
  )
}

export default Body;