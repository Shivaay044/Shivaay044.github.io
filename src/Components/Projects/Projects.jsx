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
        <div className="project-card">
          <div className="project-image">
            <img
              width="100%"
              height="100%"
              src="https://github.com/harshchaturvedi1/mailChimp-clone/blob/master/public/githubReadme/home.png?raw=true"
            />
          </div>

          <div className="project-about">
            <h3 className="project-title">Mail Chimp Replica</h3>
            <p className="project-description">
              Clone of the popular email campaigning app Mail Chimp. Built on
              react for front end and nodeJS on backend. It's a team project
              completed executed in 5 days.
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
            <a href="https://my-app-one-mu.vercel.app/camping"> <button>See this Live</button></a>
            <a href="https://github.com/Shivendra-Singh044/-permissible-cloth-4922" class="project-github-link"><button>View Code</button></a>
            </div>
          </div>
        </div>
        <br></br>

        <div className="project-card">
          <div className="project-image">
            <img
              width="100%"
              height="100%"
              src="https://github.com/harshchaturvedi1/mailChimp-clone/blob/master/public/githubReadme/home.png?raw=true"
            />
          </div>

          <div className="project-about">
            <h3 className="project-title">Mail Chimp Replica</h3>
            <p className="project-description">
              Clone of the popular email campaigning app Mail Chimp. Built on
              react for front end and nodeJS on backend. It's a team project
              completed executed in 5 days.
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
            <a href="https://my-app-one-mu.vercel.app/camping"> <button>See this Live</button></a>
            <a href="https://github.com/Shivendra-Singh044/-permissible-cloth-4922" class="project-github-link"><button>View Code</button></a>
            </div>
          </div>
        </div>
        <br></br>

        <div className="project-card">
          <div className="project-image">
            <img
              width="100%"
              height="100%"
              src="https://github.com/harshchaturvedi1/mailChimp-clone/blob/master/public/githubReadme/home.png?raw=true"
            />
          </div>

          <div className="project-about">
            <h3 className="project-title">Mail Chimp Replica</h3>
            <p className="project-description">
              Clone of the popular email campaigning app Mail Chimp. Built on
              react for front end and nodeJS on backend. It's a team project
              completed executed in 5 days.
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
            <a href="https://my-app-one-mu.vercel.app/camping"> <button>See this Live</button></a>
            <a href="https://github.com/Shivendra-Singh044/-permissible-cloth-4922" class="project-github-link"><button>View Code</button></a>
            </div>
          </div>
        </div>
        <br></br>

        <div className="project-card">
          <div className="project-image">
            <img
              width="100%"
              height="100%"
              src="https://github.com/harshchaturvedi1/mailChimp-clone/blob/master/public/githubReadme/home.png?raw=true"
            />
          </div>

          <div className="project-about">
            <h3 className="project-title">Mail Chimp Replica</h3>
            <p className="project-description">
              Clone of the popular email campaigning app Mail Chimp. Built on
              react for front end and nodeJS on backend. It's a team project
              completed executed in 5 days.
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
             href="https://my-app-one-mu.vercel.app/camping"> <button>See this Live</button></a>
            <a href="https://github.com/Shivendra-Singh044/-permissible-cloth-4922" className="project-github-link"><button>View Code</button></a>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
