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
    description: "HTML, CSS, Javascript, API",
  },
  {
    name: "Online School",
    image: School,
    description: "HTML, CSS, JavaScript, Bootstrap",
  },
  {
    name: "Bootstrap Portfolio",
    image: BootstrapPortfolio,
    description: "Bootstrap",
  },
  {
    name: "Calendar Events Scheduler",
    image: CalendarEvents,
    description: "Javascript",
  },
  {
    name: "Search Photo API",
    image: SearchPhoto,
    description: "JavaScript, Nodejs",
  },
  {
    name: "Team Profile Generator",
    image: TeamProfile,
    description: "CSS, Javascript, Nodejs",
  },
];

function ProjectItem({ image, name, description }) {
  return (
    <div className="projectItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {description} </p>
    </div>
  );
}

export default ProjectItem;
