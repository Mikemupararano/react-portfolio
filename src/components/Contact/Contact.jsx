import './Contact.css';
import React from 'react';
function ContactPage() {
  return (
    <div className="contact-container">
      <div className="contact">
        <div className="topSide bg-primary">
          <h1 className="contact-me">Contact Me</h1>
          <form id="contact-form" method="POST">
            <label htmlFor="name">Full Name</label>
            <input id="name" name="name" placeholder="Enter full name..." type="text" />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" placeholder="Enter email..." type="email" />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
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
              <a href="./CV/Mike Thomas CV.pdf" download >
                Link to PDF version of my CV
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
            <p> <a href="mailto:kudath@yahoo.co.uk">kudath@yahoo.co.uk</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
