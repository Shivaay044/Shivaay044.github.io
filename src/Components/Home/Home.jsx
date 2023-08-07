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
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParticlesBg from "particles-bg";
import Footer from "../Footer/Footer";
AOS.init()


function Home() {
  return (
    <div >
      <Navbar />
      <div id="home-main">
      <div id="home" className="home-parent">
        <div data-aos="flip-up">
          <h1 id="user-detail-name">Hi, I'm <span>Shivendra Singh</span></h1>
        </div>

        <div  className="typeWritter">
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

        <div 
         id="my-intro">
          <p>
            Strong in Web Development and integration with intuitive
            problem-solving skills. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
          </p>
        </div>

        <div className="contact-icon">
          <div>
          <a href="tel:+918303333971">
              <ImPhone color="#35d00e" fontSize="30px" />
          </a>
          </div>
          <div>
          <a href="https://github.com/shivaay044">
              <VscGithub color="#35d00e" fontSize="30px" />
            </a>
          </div>
          <div>
          <a href="mailto:shivendrapaliwal99990@gmail.com">
              <SiGmail color="#35d00e" fontSize="30px" /> 
            </a>
          </div>
          <div>
          <a href="https://www.linkedin.com/in/shivendra-singh044/">
              <FiLinkedin color="#35d00e" fontSize="30px" />   
            </a>
          </div>
          <div>
          <a target={"_blank"} href="https://drive.google.com/file/d/1BxmB_O79aTDdO-Q3T_ciRKa63BmCqFXj/view?usp=sharing">
              <CgFileDocument color="#35d00e" fontSize="30px" />
            </a>
          </div>
          <div>
          <a href="https://goo.gl/maps/ZUHf3rtQB7EdTPMr6">
            <MdOutlineShareLocation color="#35d00e" fontSize="30px" />
          </a>
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

      <div>
        <Footer/>
      </div>
    </div>
  </div>
  );
}

export default Home;

{
  /*  */
}
