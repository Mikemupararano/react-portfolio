import React from 'react';
import './Footer.css';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import FacebookIcon from '@material-ui/icons/Facebook';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://x.com/kudath_mike?s=11&t=SB3edN3yxLGQtkYNX3LEiQ" target="_blank" rel="noopener noreferrer">
          <XIcon />
        </a>
        <a href="https://www.linkedin.com/in/mike-thomas-4a4b84287/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p>&copy; 2024 MT Designs</p>
    </div>
  );
}

export default Footer;

