import React from 'react';
import { Link } from "react-router-dom";
// import mike from './home-images/mike.jpeg'
import './Home.css'; // Importing the CSS module
// import DubaiImage from './home-images/dubai.jpeg'
function HomePage() {
  return (
    <div className="home">
      {/* <img src={DubaiImage} alt="background image" /> */}
      <div className="headerContainer">
        {/* <img src={mike} alt="Mike's photo." /> */}
        <p className="home-description lead">Hi, I am Mike Thomas! I am a web developer.</p>
        
              </div>
      
    </div>
  );
}

export default HomePage;
