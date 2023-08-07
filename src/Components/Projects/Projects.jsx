import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";

function Projects() {
  return (
    <div>
      <div id="projects">
        <h1>Projects</h1>
        <br></br>
        <br></br>
        <div>
          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://camo.githubusercontent.com/07805558f1f04fe51185891f7aecec142c6fd531a92c226ed04021b5b5c030b1/68747470733a2f2f692e706f7374696d672e63632f643031516b7359622f53637265656e73686f742d39382e706e67"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Apple Replica</h3>
              <p className="project-description">
              Apple Inc (Apple) designs, manufactures, and markets smartphones, tablets, personal computers (PCs), portable and wearable devices. The company also offers software related services, accessories, and third-party digital content and applications.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                href="https://bolt-beryl.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a className="project-github-link"
                  href="https://github.com/Shivaay044/teal-fuel-7913"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://camo.githubusercontent.com/fa8f94b29ffa24f29cd848458ec1a3b063e5272337af0f23f059e3ec9264770d/68747470733a2f2f692e706f7374696d672e63632f4d547a6b7434714b2f53637265656e73686f742d3132342e706e67"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Flappy Bird Game</h3>
              <p className="project-description">
              Flappy Bird is an arcade-style game in which the player controls the bird Faby, which moves persistently to the right. The player is tasked with navigating Faby through pairs of pipes that have equally sized gaps placed at random heights.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
              </div>
              <div className="project-btns">
                <a  className="project-deployed-link"
                href="https://flappy-bird-inky-delta.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a class="project-github-link"
                  href="https://github.com/Shivaay044/Flappy_Bird"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://camo.githubusercontent.com/23a2bf2b5f6c1a056db0adb57649db3cb74aecf7b41b75b4b45e4f68c45d985f/68747470733a2f2f692e706f7374696d672e63632f6847664a72355a522f53637265656e73686f742d3131362e706e67"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">BassPro Shops Replica</h3>
              <p className="project-description">
              Vegan Market is Clone of Bass Pro Shops which is a mobile and web application-based online marketplace that provides its users with clothes, shoes and boots, camping materials, hunting clothes, hunting equipment, and shooting equipment. It comprises of stores and Tracker Marine Centers across North America.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a className="project-deployed-link"
                href=" https://my-app-one-mu.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a  className="project-github-link"
                  href="https://github.com/Shivaay044/-permissible-cloth-4922"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
          <br></br>

          <div data-aos="flip-right" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://user-images.githubusercontent.com/113035635/237299580-1ab2310b-8f9f-4356-a5c2-15e7c1f725fc.PNG"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Myntra Replica</h3>
              <p className="project-description">
              Clone of Myntra an e-commerce website for shopping with a huge varieties of clothes, footwears and accessories.
              </p>
              <div className="project-tech-stack">
                <div>
                  <FaReact />
                </div>
                <div>
                  <SiHtml5 />
                </div>
                <div>
                  <SiJavascript />
                </div>
                <div>
                  <IoLogoNodejs />
                </div>
                <div>
                  <SiExpress />
                </div>
                <div>
                  <SiMongodb />
                </div>
              </div>
              <div className="project-btns">
                <a
                  className="https://frontend-phi-five-95.vercel.app/"
                >
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                  className="project-github-link"
                  href="https://github.com/Shivaay044/glossy-paper-5488"
                >
                  <button>View Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
