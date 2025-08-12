import React from "react";
import "./Skills.css";
import Css from "../../assets/css3.svg";
import Expressjs from "../../assets/expressjs.svg";
import Figma from "../../assets/figma.svg";
import Javascript from "../../assets/javascript.svg";
import Mongodb from "../../assets/mongodb.svg";
import Nodejs from "../../assets/nodejs.svg";
import Reactjs from "../../assets/react.svg";
import Tailwend from "../../assets/tailwindcss.svg";
const skillsData = [
  {
    id: 1,
    image: Css,
    title: "css",
    discrapion: "User Interface",
  },
  {
    id: 2,
    image: Expressjs,
    title: "Expressjs",
    discrapion: "Backend",
  },
  {
    id: 3,
    image: Figma,
    title: "Figma",
    discrapion: "UI/UX",
  },
  {
    id: 4,
    image: Javascript,
    title: "Javascript",
    discrapion: "Programming Language",
  },
  {
    id: 5,
    image: Mongodb,
    title: "Mongodb",
    discrapion: "Database",
  },
  {
    id: 6,
    image: Nodejs,
    title: "Nodejs",
    discrapion: "Backend",
  },
  {
    id: 7,
    image: Reactjs,
    title: "Reactjs",
    discrapion: "Frontend",
  },
  {
    id: 8,
    image: Tailwend,
    title: "Tailwindcss",
    discrapion: "User Interface",
  },
];
function skills() {
  return (
    <section className="skills" id="skills">
      <div className="top-section">
        <h5>What Skills I Have</h5>
        <h2>My Experiences</h2>
      </div>
      <div className="container container-skills">
        {skillsData.map(({ image, title, discrapion }) => {
          return (
            <article className="card skill">
              <div className="icon">
                <img src={image} alt="" />
              </div>
              <div className="content">
                <h4>{title}</h4>
                <p className="text-light">{discrapion}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default skills;
