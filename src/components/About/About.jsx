import React from "react";
import profileImage from "./about-images/mike.jpeg";
import "./About.css";

function About() {
  return (
    <div className="about-container bg-primary">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <p className="lead">
            Hi there! I'm Mike Thomas, a passionate web developer with a
            strong background in creating innovative and responsive websites
            and applications.
          </p>
          <p className="lead">
            My journey in web development began with self-taught tutorials
            before switching to three courses. Initially I studied python
              and then later front-end.Throughout my career, I have worked on
              a diverse range of projects, including Bootstrap portfolio, school,
              console finances, password
            generator, weather dashboard, search photo API, team profile
            generator and my react portfolio. 
          </p>
          <p className="lead">
            I specialise in front-end development and I am proficient in
            HTML, CSS, JavaScript, Bootstrap, Day.js, Node.js, JQuery, API, Inquirer,
            Chart.js and React.js. 
          </p>
           <p className="lead">
            Having completed a frontend developer course, I am currently working
            on a Data Science course with the intention of brining all together
            as a fully qualified fullstack developer with Data Science skills.
            I'm always open to new opportunities and collaborations, so feel free
            to people can get in touch with me through email, LinkedIn, or Github.
            </p>
          <p className="lead">
            Thank you for visiting my portfolio! I look forward to connecting
            with you and discussing how we can work together to bring your web
            development projects to life.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
