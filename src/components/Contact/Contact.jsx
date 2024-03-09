import './Contact.css';
import React from 'react';
function ContactPage() {
  return (
    <div className="container">
      <div className="contact">
        <div className="leftSide">
          {/* Left side content (optional) */}
        </div>
        <div className="rightSide">
          <h1>Contact Me</h1>
          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              rows="6"
              placeholder="Enter message..."
              name="message"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="additional-info">
            {/* Additional information */}
            <p>
              <a href="./CV/Mike Thomas Data Science & Web Development CV 2024.pdf" download>
                Link to PDF version of your CV
              </a>
            </p>
            <p>
              <a href="https://github.com/Mikemupararano" target="_blank" rel="noopener noreferrer">
                Link to GitHub profile
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/mike-thomas-4a4b84287/" target="_blank" rel="noopener noreferrer">
                Link to LinkedIn page
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
