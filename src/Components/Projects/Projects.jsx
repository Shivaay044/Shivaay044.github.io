import React from "react";
import "./Projects.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { projects } from "../../data/portfolio";

function Projects() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <Reveal>
          <SectionLabel number="03" label="Selected Work" />
          <h2 className="section-heading work-heading">Projects</h2>
        </Reveal>

        <div className="work-list">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 70} className="card work-card">
              <div className="work-card-main">
                <p className="work-index mono">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="work-title">{project.title}</h3>
                <p className="work-description muted">{project.description}</p>
                <div className="work-tech">
                  {project.tech.map((t) => (
                    <span key={t} className="pill">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="work-links">
                  {project.live && (
                    <a className="btn btn-outline" href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  )}
                  {project.code && (
                    <a className="btn btn-outline" href={project.code} target="_blank" rel="noreferrer">
                      Code
                    </a>
                  )}
                </div>
              </div>

              <div className="work-metrics">
                {project.metrics.map((metric) => (
                  <div key={metric.caption} className="work-metric">
                    <p className="work-metric-value">{metric.value}</p>
                    <p className="work-metric-caption mono">{metric.caption}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
