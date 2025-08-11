import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa6";

function HomeSocial() {
  return (
    <div className="Home-Social">
      <a href="#" target="_blank">
        <FaLinkedin />
      </a>
      <a href="#" target="_blank">
        <FaGithub />
      </a>
      <a href="#" target="_blank">
        <FaDribbble />
      </a>
    </div>
  );
}

export default HomeSocial;
