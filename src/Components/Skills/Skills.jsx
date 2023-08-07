import React from "react";
import "./Skills.css"
import { SiBootstrap, SiHtml5, SiMaterialui, SiRedux, SiTypescript } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaMdb } from "react-icons/fa";

function Skills() {
  return <div>
  <div id="skills">
           <h1>Skills</h1>
        <div  data-aos="fade-right" className="skills_icons">
         <div  className="skills-card">
          <SiJavascript class="skills-card-img"/>
          <h6 className="skills-card-name">JavaScript</h6>
         </div>

         <div  className="skills-card">
          <SiTypescript class="skills-card-img"/>
          <h6 className="skills-card-name" >TypeScript</h6>
         </div>

         <div  className="skills-card">
          <SiHtml5 class="skills-card-img"/>
          <h6 className="skills-card-name" >HTML</h6>
         </div>

         <div  className="skills-card">
          <SiCss3 class="skills-card-img"/>
          <h6 className="skills-card-name" >CSS</h6>
         </div>

         <div  className="skills-card">
          <FaReact class="skills-card-img"/>
          <h6 className="skills-card-name">React</h6>
         </div>

         <div  className="skills-card">
          <SiRedux class="skills-card-img"/>
          <h6 className="skills-card-name">Redux</h6>
         </div>

         <div  className="skills-card">
          <IoLogoNodejs class="skills-card-img"/>
          <h6 className="skills-card-name">Nodejs</h6>
         </div>

         <div  className="skills-card">
          <SiMongodb class="skills-card-img"/>
          <h6 className="skills-card-name">Mongodb</h6>
         </div>

         <div  className="skills-card">
          <SiExpress class="skills-card-img"/>
          <h6 className="skills-card-name">Express</h6>
         </div>

         <div  className="skills-card">
          <FaMdb class="skills-card-img"/>
          <h6 className="skills-card-name">Bootstrap</h6>
         </div>

         <div  className="skills-card">
          <SiMaterialui class="skills-card-img"/>
          <h6 className="skills-card-name">Materialui</h6>
         </div>

         <div  className="skills-card">
          <SiBootstrap class="skills-card-img"/>
          <h6 className="skills-card-name">Bootstrap</h6>
         </div>

        </div>
     </div>
  </div>;
}

export default Skills;
