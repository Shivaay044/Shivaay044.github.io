import React, { useRef } from "react";
import "./Hero.css";
import { useInView } from "../../hooks/useInView";
import { useCountUp } from "../../hooks/useCountUp";
import { useRotatingText } from "../../hooks/useRotatingText";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";
import { hero, stats, profile } from "../../data/portfolio";
import portrait from "../Images/My_Pic.png";

function Stat({ value, suffix, caption, start }) {
  const count = useCountUp(value, { start });
  return (
    <div className="hero-stat">
      <p className="hero-stat-value">
        {count}
        <span className="hero-stat-suffix">{suffix}</span>
      </p>
      <p className="hero-stat-caption mono">{caption}</p>
    </div>
  );
}

function renderSubheading(text, bold) {
  const idx = text.indexOf(bold);
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <strong>{bold}</strong>
      {text.slice(idx + bold.length)}
    </>
  );
}

function Hero() {
  const [statsRef, statsInView] = useInView({ threshold: 0.3 });
  const rotatingRole = useRotatingText(hero.rotatingRoles || [profile.role]);
  const reducedMotion = usePrefersReducedMotion();
  const visualRef = useRef(null);

  const handleTilt = (e) => {
    if (reducedMotion || !visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    visualRef.current.style.transform = `perspective(800px) rotateY(${px * 8}deg) rotateX(${-py * 8}deg)`;
  };

  const resetTilt = () => {
    if (!visualRef.current) return;
    visualRef.current.style.transform = "perspective(800px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <section id="top" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <div className="hero-anim hero-anim-1">
            <span className="status-pill">
              <span className="status-dot" />
              {hero.status}
            </span>
          </div>

          <h1 className="hero-heading hero-anim hero-anim-2">
            {hero.headingLead} <span className="accent">{hero.name}</span>
          </h1>

          <p className="hero-role mono hero-anim hero-anim-2">
            <span key={rotatingRole} className="hero-role-text">
              {rotatingRole}
            </span>
          </p>

          <p className="hero-subheading hero-anim hero-anim-3">
            {renderSubheading(hero.subheading, hero.boldPhrase)}
          </p>

          <div className="hero-ctas hero-anim hero-anim-4">
            <a className="btn btn-primary" href="#work">
              View my work
            </a>
            <a className="btn btn-outline" href="#contact">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-visual-wrap hero-anim hero-anim-2">
          <div
            className="hero-visual"
            ref={visualRef}
            onMouseMove={handleTilt}
            onMouseLeave={resetTilt}
          >
            <div className="hero-visual-hatch" />
            <img className="hero-visual-img" src={portrait} alt={profile.name} />
          </div>
        </div>
      </div>

      <div className="container hero-anim hero-anim-5" ref={statsRef}>
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <React.Fragment key={stat.caption}>
              {i > 0 && <span className="hero-stat-divider" />}
              <Stat {...stat} start={statsInView} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
