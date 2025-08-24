import React from "react";
import "../styles/Feature.css";

const features = [
  {
    title: "Real-Time Analytics",
    desc: "Track your user behavior and app performance in real time.",
    icon: "📊",
  },
  {
    title: "Team Collaboration",
    desc: "Invite your team and manage tasks together seamlessly.",
    icon: "🤝",
  },
  {
    title: "Custom Dashboards",
    desc: "Create dashboards tailored to your business needs.",
    icon: "📋",
  },
];

const FeatureSection = () => {
  return (
    <section className="feature-section">
      <h2 className="feature-title">Powerful Features to Elevate Your Workflow</h2>
      <p className="feature-subtitle">
        Everything you need to run your product efficiently in one place.
      </p>
      <div className="feature-grid">
        {features.map((f, idx) => (
          <div key={idx} className="feature-card">
            <div className="feature-icon">{f.icon}</div>
            <h3>{f.title}</h3>
            <p>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
