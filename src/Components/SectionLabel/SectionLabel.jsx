import React from "react";

function SectionLabel({ number, label }) {
  return (
    <p className="section-label mono">
      {number} / {label}
    </p>
  );
}

export default SectionLabel;
