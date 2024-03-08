import React from 'react';
import { Link } from "react-router-dom";
import mike from './home-images/mike.jpeg'
import './Home.css'; // Importing the CSS module
function HomePage() {
  return (
    <div className="home">
      <div className="headerContainer">
        <img src={mike} alt="Mike's photo." />
        <p className="home-description lead">Hi, I am Mike Thomas! I am a web developer.</p>
        
              </div>
      
    </div>
  );
}

export default HomePage;
