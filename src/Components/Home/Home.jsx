import React from "react";
import Navbar from "../Navbar/Navbar";

function Home() {
  return <div>
     <Navbar/>
     <div style={{border:"1px solid red",height:"50vh"}} id="About">
           <h1>About me</h1>
     </div>
     <div style={{border:"1px solid red",height:"50vh"}} id="Contact">
           <h1>Contact me</h1>
     </div>
     <div style={{border:"1px solid red",height:"50vh"}} id="Skills">
           <h1>Skill</h1>
     </div>
     <div style={{border:"1px solid red",height:"50vh"}} id="Projects">
           <h1>Projects</h1>
     </div>
     <div style={{border:"1px solid red",height:"50vh"}} id="Resume">
           <h1>Resume</h1>
     </div>

  </div>;
}

export default Home;
