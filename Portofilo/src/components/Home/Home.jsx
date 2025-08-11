import React from "react";
import Me from "../../assets/me.png";
import "./Home.css";
import Cv from "../../assets/cv.pdf";
import HomeSocial from "./HomeSocial";

function Home() {
  return (
    <div className="Home" id="home">
      <div className="container Home-container">
        <h4> Hello I'm</h4>
        <h1>Ahmed Abdo</h1>
        <h4 className="text-light">Frontend Developer</h4>
        <div className="btns">
          <a href={Cv} className="btn" download>
            Download CV
          </a>
          <a href="#" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <a href="#about" className="scroll__down">
          Scroll down
        </a>
        <HomeSocial />
      </div>
    </div>
  );
}

export default Home;
