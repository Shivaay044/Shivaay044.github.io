import React from "react";
import "./Projects.css";
import { FaReact } from "react-icons/fa";
import { SiHtml5 } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import ReactTooltip from "react-tooltip";

function Projects() {
  return (
    <div>
      <div id="projects">
        <h1>Projects</h1>
        <br></br>
        <br></br>
        
        <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://i.ibb.co/1RfsmnD/Screenshot-240.png"
              />
            </div>

            <div className="project-about">
              <h3 className="project-title">Xperiokids.com</h3>
              <p className="project-description">
              Welcome to Xperiokids Educational Institute, where the founder's vision is centered around providing an educational experience that prioritizes hands-on experimentation over traditional theory-based learning. As the founder of Xperiokids, they recognized the shortcomings of mainstream education, particularly in the neglect of practical application, especially within the realm of science education.
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
                href="https://xperiokids.com/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a data-tip="Cannot Reveal code" className="project-github-link"
                  href="https://github.com/Shivaay044/Xperiokids"
                >
                  <button data-tip="Cannot Reveal code">View Code</button>
                </a>
                <ReactTooltip place="bottom" type="info" />
              </div>
            </div>
          </div>
          <br></br>

        <div>
          <div data-aos="flip-left" className="project-card">
            <div className="project-image">
              <img
                width="100%"
                height="100%"
                src="https://camo.githubusercontent.com/12480954895ff95a45fb25692bac82cb59a1a67a9aee35a4b37f08453b0b766d/68747470733a2f2f692e706f7374696d672e63632f62774d62774258392f53637265656e73686f742d3130302e706e67"
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
                 target="_blank"
                href="https://bolt-beryl.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a className="project-github-link"
                  target="_blank"
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
                src="https://camo.githubusercontent.com/d09f6f37eb23c3216c6f11ec605d2afdec741da771e10662eb46df543f6fa52e/68747470733a2f2f692e706f7374696d672e63632f4d547a6b7434714b2f53637265656e73686f742d3132342e706e67"
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
                target="_blank"
                href="https://flappy-bird-inky-delta.vercel.app/">
                  {" "}
                  <button>See this Live</button>
                </a>
                <a class="project-github-link"
                target="_blank"
                  href="https://github.com/Shivaay044/Flappy_Bird"
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
                  target="_blank"
                  className="https://frontend-phi-five-95.vercel.app/"
                >
                  {" "}
                  <button>See this Live</button>
                </a>
                <a
                target="_blank"
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
