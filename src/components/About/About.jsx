import React from "react";
import "./About.css";
import Imageme from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

function About() {
  return (
    <section className="about" id="about">
      <div className="top-section">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={Imageme} alt="" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </div>
            <div className="about-card">
              <FiUsers className="about-icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </div>
            <div className="about-card">
              <VscFolderLibrary className="about-icon" />
              <h5>Projects</h5>
              <small>80+ Completed</small>
            </div>
          </div>

          <p>
            frontend developer with 3+ years of experience. I am a quick learner
            and a problem solver, I am always looking for new challenges and
            opportunities to grow. Let's work together to bring your vision to
            life.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
