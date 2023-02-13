import React from "react";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

function Home() {
  return (
    <div>
      <Navbar />

      <div>
       <About/>
      </div>

      <div>
        <Skills/>
      </div>

      <div>
      <Projects/>
      </div>
      
      <div>
       <Contact/>
      </div>
      
    </div>
  );
}

export default Home;
