import React from "react";
import "./Contact.css";
import Reveal from "../Reveal/Reveal";
import SectionLabel from "../SectionLabel/SectionLabel";
import { contact, profile } from "../../data/portfolio";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container contact-inner">
        <Reveal>
          <SectionLabel number="08" label="Contact" />
          <h2 className="contact-headline">{contact.headline}</h2>
          <p className="contact-subline muted">{contact.subline}</p>
        </Reveal>

        <Reveal delay={80}>
          <a className="btn btn-primary contact-cta" href={`mailto:${profile.email}`}>
            {profile.email}
            <span aria-hidden="true">→</span>
          </a>
        </Reveal>

        <Reveal delay={140} className="contact-links">
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="mono">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="mono">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="mono">
            LinkedIn
          </a>
          <a href={profile.instagram} target="_blank" rel="noreferrer" className="mono">
            Instagram
          </a>
          <a href={profile.resumeView} target="_blank" rel="noreferrer" className="mono">
            Resume
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export default Contact;
