import React from "react";
import "./Footer.css";
import { profile } from "../../data/portfolio";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="mono footer-copy">
          © {year} {profile.name}
        </p>
        <p className="mono footer-tagline muted">Designed & built with React</p>
      </div>
    </footer>
  );
}

export default Footer;
