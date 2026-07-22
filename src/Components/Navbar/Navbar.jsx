import React, { useState } from "react";
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { useTheme } from "../../theme/ThemeContext";
import { nav, profile } from "../../data/portfolio";

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [pulseDot, setPulseDot] = useState(false);

  const handleToggleTheme = () => {
    toggleTheme();
    setPulseDot(true);
    setTimeout(() => setPulseDot(false), 400);
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a className="nav-logo mono" href="#top">
          <span className="nav-logo-square" />
          {profile.name.split(" ")[0].toUpperCase()}
        </a>

        <button
          className="nav-hamburger"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>

        <nav className={`nav-links ${open ? "nav-links--open" : ""}`}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.resumeDownload}
            target="_blank"
            rel="noreferrer"
            download="Shivendra_Singh_Resume.pdf"
            className="nav-link"
            onClick={() => setOpen(false)}
          >
            Resume
          </a>
          <button className="theme-toggle" onClick={handleToggleTheme}>
            <span className={`theme-toggle-dot ${pulseDot ? "theme-toggle-dot--pulse" : ""}`} />
            <span key={theme} className="theme-toggle-label mono">
              {theme}
            </span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
