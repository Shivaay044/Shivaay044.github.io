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

      <div id="home" style={{border:"1px solid red",height:"50vh"}} >
           <h1>Home</h1>
           <div>
             <img src={'C:\Users\shiva\OneDrive\Desktop\Portfolio\my_protfolio\src\Images\My_Pic.jpg'} />
           </div>
     </div>

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
