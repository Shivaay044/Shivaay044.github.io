import React from "react";
import { ImPhone } from "react-icons/im";
import { VscGithub } from "react-icons/vsc";
import { SiGmail } from "react-icons/si";
import { FiLinkedin } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import "./Contact.css"

function Contact() {
  return (
    <div>
      <div id="contact" >
        <h1>GET IN TOUCH</h1>
        <div className="contact-me">
          <div>
            <a  id="contact-phone" href="tel:+918303333971">
              <ImPhone />
            </a>
          </div>
          <div>
            <a id="contact-github" href="https://github.com/Shivendra-Singh044">
              <VscGithub />
            </a>
          </div>
          <div>
            <a id="contact-email" href="https://shivendrapaliwal99990@gmail.com">
              <SiGmail />
            </a>
          </div>
          <div>
            <a id="contact-linkedin" href="https://www.linkedin.com/in/shivendrasingh044/">
              <FiLinkedin />
            </a>
          </div>
          <div>
            <a href="#">
              <CgFileDocument />
            </a>
          </div>
          <div>
            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
