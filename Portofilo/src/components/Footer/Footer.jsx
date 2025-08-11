import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Footer() {
  return (
    <footer className="footer" id="footer">
      <a href="#" className="footer__logo">
        Ahmed Abdo
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills">skills</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#projects">projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank">
          <FaInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaXTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ahmed Abdo. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;
