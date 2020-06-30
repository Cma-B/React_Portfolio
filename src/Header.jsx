import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="ui fixed inverted menu">
      <div className="ui container">
        <Link id="header" className="header item" to="/">
         
        </Link>
        <div className="left menu">
          <NavLink
          id="about-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold" }}
          to="/about"
          >
            About Me
          </NavLink>
        </div>
        <div className="right menu">
          <NavLink
          id="projects-tab"
          className="ui item"
          activeStyle={{ fontWeight: "bold"}}
          to="/projects"
          >
            Projects
          </NavLink>  
           <NavLink
            id="mycv-tab"
            className="ui item"
            activeStyle={{ fontWeight: "bold" }}
            to="/mycv"
          >
            My CV
          </NavLink>
          </div>
        
      </div>
    </nav>
  );
};

export default Header;