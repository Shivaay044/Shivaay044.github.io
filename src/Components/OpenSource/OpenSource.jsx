import React from "react";
import "./OpenSource.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { repos } from "../../data/portfolio";

function OpenSource() {
  return (
    <section id="open-source" className="section open-source">
      <div className="container">
        <Reveal>
          <SectionLabel number="06" label="Open Source" />
          <h2 className="section-heading open-source-heading">Repos</h2>
        </Reveal>

        <div className="repos-grid">
          {repos.map((repo, i) => (
            <Reveal key={repo.name} delay={i * 70} className="card repo-card">
              <a href={repo.url} target="_blank" rel="noreferrer">
                <p className="repo-name">
                  <span className="accent">/</span>
                  {repo.name}
                </p>
                <p className="repo-description muted">{repo.description}</p>
                <div className="repo-footer">
                  <span className="repo-language mono">
                    <span
                      className="repo-language-dot"
                      style={{ background: repo.languageColor }}
                    />
                    {repo.language}
                  </span>
                  <span className="repo-stars mono">★ {repo.stars}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OpenSource;
