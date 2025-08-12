import React from "react";
import "./Nav.css";
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

function Nav() {
  const [activeNav, setAtiveNav] = useState("#");
  return (
    <nav className="nav" id="nav">
      <a
        href="#home"
        className={activeNav === "#home" ? "active" : ""}
        onClick={() => setAtiveNav("#home")}
      >
        <IoHomeOutline />
      </a>
      <a
        href="#about"
        className={activeNav === "#about" ? "active" : ""}
        onClick={() => setAtiveNav("#about")}
      >
        <LuUserRound />
      </a>
      <a
        href="#skills"
        className={activeNav === "#skills" ? "active" : ""}
        onClick={() => setAtiveNav("#skills")}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={activeNav === "#services" ? "active" : ""}
        onClick={() => setAtiveNav("#services")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === "#contact" ? "active" : ""}
        onClick={() => setAtiveNav("#contact")}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}

export default Nav;
