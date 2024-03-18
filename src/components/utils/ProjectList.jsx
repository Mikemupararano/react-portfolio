import React from "react";
import WeatherDashboard from "./weather-dashboard.jpeg";
import School from "./online-school.jpeg";
import BootstrapPortfolio from "./bootstrap-portfolio.jpeg";
import CalendarEvents from "./calendar-events-scheduler.jpeg";
import SearchPhoto from "./search-photo-api.jpeg";
import TeamProfile from "./team-profile-generator.jpeg";

export const ProjectList = [
  {
    name: "Weather Dashboard",
    image: WeatherDashboard,
    text: "HTML, CSS, Javascript, API",
  },
  {
    name: "Online School",
    image: School,
    text: "HTML, CSS, JavaScript, Bootstrap",
  },
  {
    name: "Bootstrap Portfolio",
    image: BootstrapPortfolio,
    text: "Bootstrap",
  },
  {
    name: "Calendar Events Scheduler",
    image: CalendarEvents,
    text: "Javascript",
  },
  {
    name: "Search Photo API",
    image: SearchPhoto,
    text: "JavaScript, Nodejs",
  },
  {
    name: "Team Profile Generator",
    image: TeamProfile,
    text: "CSS, Javascript, Nodejs",
  },
];

function ProjectItem({ image, name, text }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {text} </p>
    </div>
  );
}

export default ProjectItem;
