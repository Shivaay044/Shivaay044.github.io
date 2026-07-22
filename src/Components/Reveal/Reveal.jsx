import React from "react";
import "./Reveal.css";
import { useInView } from "../../hooks/useInView";
import { usePrefersReducedMotion } from "../../hooks/usePrefersReducedMotion";

function Reveal({ as = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, isInView] = useInView();
  const reducedMotion = usePrefersReducedMotion();
  const Tag = as;

  const visible = isInView || reducedMotion;

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default Reveal;
