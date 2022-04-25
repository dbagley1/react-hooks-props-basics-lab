import React from "react";
import Links from "./Links.js";

function About(props) {
  let { bio, links } = props;
  bio = bio ? (<p>{bio}</p>) : '';

  return (
    <div id="about">
      <h2>About Me</h2>
      {bio}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;
