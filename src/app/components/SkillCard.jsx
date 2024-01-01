import React from "react";

const SkillCard = ({ src, alt }) => {
  return (
    <div className="skill-card">
      <img src={src} alt={alt} className="skill-logo opacity-50 hover:opacity-100 hover:scale-105" />
    </div>
  );
};

export default SkillCard;