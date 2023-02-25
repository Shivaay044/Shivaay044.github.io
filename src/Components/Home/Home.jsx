import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Typewriter from "typewriter-effect";
import "./Home.css";
import { ImPhone } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineShareLocation } from "react-icons/md";
import Github from "../Github/Github";

function Home() {
  return (
    <div>
      <Navbar />
      <div id="home-main">
      <div id="home" className="home-parent">
        <div id="user-detail-name">
          <h1>Hi, I'm Shivendra Singh</h1>
        </div>

        <div className="typeWritter">
          <Typewriter
            options={{
              strings: [
                "A Full Stack Web Developer",
                "An eSports Enthusiast",
                "A Traveller",
                "A MERN Stack Developer",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>

        <div id="user-detail-intro">
          <p>
            Strong in Web Development and integration with intuitive
            problem-solving skills. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
          </p>
        </div>

        <div className="contact-icon">
          <div>
            <ImPhone />
          </div>
          <div>
            <VscGithub />
          </div>
          <div>
            <SiGmail />
          </div>
          <div>
            <FiLinkedin />
          </div>
          <div>
            <CgFileDocument />
          </div>
          <div>
            <MdOutlineShareLocation />
          </div>
        </div>
      </div>

      {/* <----other Comp-----> */}
      <div>
        <About />
      </div>

      <div>
        <Skills />
      </div>

      <div>
        <Projects />
      </div>

      <div>
        <Github/>
      </div>

      <div>
        <Contact />
      </div>
    </div>
  </div>
  );
}

export default Home;

{
  /*  */
}
