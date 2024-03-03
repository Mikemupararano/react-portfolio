import React from 'react';
import { Link, link } from "react-router-dom";


function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <h1>Portfolio</h1>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About</Link>
        <Link to="/contact"> Contact </Link>
      </div>
    </div>
  );
}

export default Navbar;
