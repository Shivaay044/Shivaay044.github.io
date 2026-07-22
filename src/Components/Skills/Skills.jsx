import React from "react";
import "./Skills.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { skillGroups } from "../../data/portfolio";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <SectionLabel number="02" label="Skills" />
          <h2 className="section-heading skills-heading">What I work with</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 70} className="card skills-card">
              <p className="skills-card-label mono">
                <span className="skills-card-dot" />
                {group.label}
              </p>
              <div className="skills-card-tags">
                {group.skills.map((skill) => (
                  <span key={skill} className="pill">
                    {skill}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
