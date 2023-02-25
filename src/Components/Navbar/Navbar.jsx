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
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link home" href="/#home">
            Home
          </a>
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link about" href="/#about">
            About
          </a>
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link skills" href="/#skills">
            Skills
          </a>
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link projects" href="/#projects">
            Projects
          </a>
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link contact" href="/#contact">
            Contact
          </a>
          <a onClick={() =>{setHamberger("hameburger-open-icon-invisible")}} className="nav-link resume" id="resume-link-1" download={true} href="https://drive.google.com/file/d/1BxmB_O79aTDdO-Q3T_ciRKa63BmCqFXj/view?usp=sharing">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
