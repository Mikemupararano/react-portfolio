import React from 'react';
import { Link, link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';

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
        <button>
          <MenuIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
