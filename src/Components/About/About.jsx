import React from "react";
import "./About.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { about } from "../../data/portfolio";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container about-grid">
        <Reveal>
          <SectionLabel number="01" label="About" />
        </Reveal>

        <Reveal delay={80} className="about-prose">
          <p className="about-lead">{about.lead}</p>
          {about.paragraphs.map((p) => (
            <p key={p} className="about-paragraph muted">
              {p}
            </p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export default About;
