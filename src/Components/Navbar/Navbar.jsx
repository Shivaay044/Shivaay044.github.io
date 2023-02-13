import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import gsap from "gsap";

function Navbar() {
  const [hameburger, setHamberger] = useState("hameburger-open-icon-invisible");

  

  const handleHamburgToggle = (e) => {
    if (hameburger === "hameburger-open-icon-invisible") {
      setHamberger("nav-all-opt");
    } else {
      setHamberger("hameburger-open-icon-invisible");
    }
  };



  return (
    <header>
      <div id="nav-menu" className="navbar">
        <div>
          <a className="nav-head" href="#">
            SHIVENDRA SINGH
          </a>
        </div>

        <a  onClick={handleHamburgToggle} className="hameburger-open-icon">
          {hameburger == "nav-all-opt" ? (
            <CgClose size="35px" />
          ) : (
            <FiMenu size="35px" />
          )}
        </a>
        <div   id="thirdCircle" className={hameburger}>
          <a className="nav-link home" href="/#home">
            Home
          </a>
          <a className="nav-link about" href="/#about">
            About
          </a>
          <a className="nav-link skills" href="/#skills">
            Skills
          </a>
          <a className="nav-link projects" href="/#projects">
            Projects
          </a>
          <a className="nav-link contact" href="/#contact">
            Contact
          </a>
          <a className="nav-link resume" href="/#Resume">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
