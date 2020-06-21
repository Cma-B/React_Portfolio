import React, {Component} from "react";
import axios from "axios";
import ProjectCard from "./ProjectCard";
import { UndrawDashboard } from "react-undraw-illustrations";

class Projects extends Component {
  state = {
    projects: []
  };
  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    };

  return (
    <div className="ui main container">
       <div className="ui stackable two column grid">
         <div className="column">
           <UndrawDashboard primaryColor='12283a' height='200px' />
         </div>
         <div className="column">
           <h1 className="ui header">My Projects</h1>
           <p>
             Would you like to know about the projects done by me
           </p>
         </div>
</div>
<div className="ui stackable four column grid">{projectsList}</div>
    </div>
  );
}; 
componentDidMount() {
  axios.get('./src/data/projects.json')
    .then(response => {
      this.setState({
        projects: response.data
      });
    });
};
};

export default Projects;