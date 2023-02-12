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
      <div className="navbar">
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
          <a className="nav-menu-opt" href="/#Home">
            Home
          </a>
          <a className="nav-menu-opt" href="/#About">
            About
          </a>
          <a className="nav-menu-opt" href="/#Skills">
            Skills
          </a>
          <a className="nav-menu-opt" href="/#Projects">
            Projects
          </a>
          <a className="nav-menu-opt" href="/#Contact">
            Contact
          </a>
          <a className="nav-menu-opt" href="/#Resume">
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
