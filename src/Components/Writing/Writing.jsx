import React from "react";
import "./Writing.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { posts } from "../../data/portfolio";

function Writing() {
  return (
    <section id="writing" className="section writing">
      <div className="container">
        <Reveal>
          <SectionLabel number="07" label="Writing" />
          <h2 className="section-heading writing-heading">Notes</h2>
        </Reveal>

        <div className="writing-list">
          {posts.map((post, i) => (
            <Reveal key={post.title} delay={i * 70} className="writing-row">
              <span className="writing-date mono muted">{post.date}</span>
              <span className="writing-title">{post.title}</span>
              <span className="writing-time mono muted">{post.readTime}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Writing;
