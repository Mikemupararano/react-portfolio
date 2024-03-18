

 import PropTypes from 'prop-types'; // Importing PropTypes library for type checking

function ProjectItem({ image, name, description }) { // Defining a functional component named ProjectItem and destructuring props
   return (
     <div className="projectItem"> {/* Creating a div element with class name 'projectItem' */}
       <div style={{ backgroundImage: `url(${image})` }}> </div> {/* Creating a div element with background image */}
       <h1> {name} </h1> {/* Creating an h1 element with project name */}
       <p> {description} </p> {/* Creating a p element with project description */}
     </div>
  );
 }

ProjectItem.propTypes = { // Setting propTypes for ProjectItem component to ensure type checking
image: PropTypes.string.isRequired, // image prop is required and should be a string
name: PropTypes.string.isRequired, // name prop is required and should be a string
description: PropTypes.string.isRequired, // description prop is required and should be a string
};
export default ProjectItem; // Exporting the ProjectItem component as default
