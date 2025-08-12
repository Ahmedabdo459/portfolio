import React from "react";
import "./Projects.css";
import Img1 from "../../assets/portfolio1.jpg";
import Img2 from "../../assets/portfolio2.jpg";
import Img3 from "../../assets/portfolio3.jpg";
import Img4 from "../../assets/portfolio4.jpg";
import Img5 from "../../assets/portfolio5.png";
import Img6 from "../../assets/portfolio6.jpg";
const projectsData = [
  {
    id: 1,
    image: Img1,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 2,
    image: Img2,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 3,
    image: Img3,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 4,
    image: Img4,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 5,
    image: Img5,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
  {
    id: 6,
    image: Img6,
    title: "This is a portfolio item title",
    github: "https://github.com",
    demo: "https://github.com",
  },
];
function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="top-section">
        <h5>My Recent Works</h5>
        <h2>Projects</h2>
      </div>
      <div className="container container-projects">
        {projectsData.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item-img">
                <img src={image} alt="" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item-btns">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
                <a href={demo} target="_blank" className="btn btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
