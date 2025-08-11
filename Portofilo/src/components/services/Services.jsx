import React from "react";
import "./Services.css";
import { MdDesignServices } from "react-icons/md";
import { IoIosRocket } from "react-icons/io";
import { FaCode } from "react-icons/fa";
function services() {
  return (
    <section className="services" id="services">
      <div className="top-section">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="container container-services">
        <article className="card">
          <div className="icon">
            <MdDesignServices />
          </div>
          <h4>UI/UX Design</h4>
          <small className="text-light">
            Creative UI/UX design for your website
          </small>
        </article>
        <article className="card">
          <div className="icon">
            <IoIosRocket />
          </div>
          <h4>Web Development</h4>
          <small className="text-light">
            Creative UI/UX design for your website
          </small>
        </article>
        <article className="card">
          <div className="icon">
            <FaCode />
          </div>
          <h4>Web Development</h4>
          <small className="text-light">
            Creative UI/UX design for your website
          </small>
        </article>
      </div>
    </section>
  );
}

export default services;
