import React from "react";
import "./Timeline.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { timeline } from "../../data/portfolio";

function Timeline() {
  let currentGroup = null;

  return (
    <section id="experience" className="section timeline">
      <div className="container">
        <Reveal>
          <SectionLabel number="05" label="Experience" />
          <h2 className="section-heading timeline-heading">Where I've Worked</h2>
        </Reveal>

        <div className="timeline-list">
          {timeline.map((item, i) => {
            const showGroup = item.group && item.group !== currentGroup;
            if (item.group) currentGroup = item.group;

            return (
              <React.Fragment key={`${item.role}-${item.org}`}>
                {showGroup && <p className="timeline-group mono muted">{item.group}</p>}
                <Reveal delay={i * 60} className="timeline-row">
                  <p className="timeline-period mono">{item.period}</p>
                  <div>
                    <h3 className="timeline-role">{item.role}</h3>
                    <p className="timeline-org mono">{item.org}</p>
                    <p className="timeline-description muted">{item.description}</p>
                  </div>
                </Reveal>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
