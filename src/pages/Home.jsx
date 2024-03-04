import React from 'react';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/hero.png';

function Home() {
  return (
    <div className="home">
      <div className="headerContainer" style={{backgroundImage: `url(${BannerImage})` }}>
        <h1>Mike's Portfolio</h1>
        <p>I am a web developer!</p>
        <Link to="/menu">
          <button>Explore my portfolio!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
