import React from "react";
import "./About.css";
import { FaRegHandPointRight } from "react-icons/fa";

function About() {
  return (
    <div>
      <div id="about" className="about section">
        <h1>About me</h1>
        <br></br>
        <br></br>
        <div className="about_me">
          <div className="home-img-parent">
            <img className="home-img"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
              src="https://avatars.githubusercontent.com/u/110078755?v=4"
            />
          </div>
          <div className="my_introduction">
            <p>
              Hi Everyone, I am Shivendra Singh from Gorakhpur, Uttar Pradesh. I
              have completed my Higher Secondary Education from Mahatma Gandhi
              Inter College Gorakhpur , Uttar Pradesh.
            </p>
            <br></br>

            <p>Some of my interests apart form Coding :</p>

            <p>
              {" "}
              <FaRegHandPointRight /> eSports Enthusiast
            </p>
            <p>
              {" "}
              <FaRegHandPointRight /> Travelling
            </p>
            <p>
              {" "}
              <FaRegHandPointRight /> Reading Adventure stories
            </p>
          </div>
        </div>
        <div>
        <a  id="resume-link-2" href="https://drive.google.com/file/d/1BxmB_O79aTDdO-Q3T_ciRKa63BmCqFXj/view?usp=sharing" download>
        <button>Resume</button>
        </a>
         
        </div>
      </div>
    </div>
  );
}

export default About;
