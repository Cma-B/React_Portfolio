import React from "react";
import { UndrawDesignerLife } from "react-undraw-illustrations";

const About = () => {
  return (
    <div className="ui main container">
      <div class="ui stackable two column grid">
        <div class="column">
          <UndrawDesignerLife primaryColor='#12283a'height='200px' />
        </div>
        <div class="column">
          <h1 id="about-header" className="ui header">About Me</h1>
          <p>
          
          Due to my enthusism in making new experiences, I moved to Sweden in 2018.
          I was born in 1986 in Tehran, Iran and raised there.
          I started to work as a technical sales manager for eight years after graduation.
          But currently, I have started a new journey in Information Technology world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;