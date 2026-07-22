import React from "react";
import "./Process.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { process } from "../../data/portfolio";

function Process() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <Reveal>
          <SectionLabel number="04" label="How I Build" />
          <h2 className="section-heading process-heading">Process</h2>
        </Reveal>

        <div className="process-flow">
          {process.nodes.map((node, i) => (
            <React.Fragment key={node.label}>
              {i > 0 && <span className="process-arrow mono">{"→"}</span>}
              <Reveal delay={i * 90} className="card process-node">
                <p className="process-node-label mono">{node.label}</p>
                <p className="process-node-detail muted">{node.detail}</p>
              </Reveal>
            </React.Fragment>
          ))}
        </div>

        <div className="process-notes">
          {process.notes.map((note, i) => (
            <Reveal key={note.label} delay={i * 90} className="process-note">
              <p className="process-note-label mono">{note.label}</p>
              <p className="process-note-detail muted">{note.detail}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;
