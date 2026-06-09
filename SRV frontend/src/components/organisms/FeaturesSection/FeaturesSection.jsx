import React from 'react';
import './FeaturesSection.css';

const FeaturesSection = () => {
  const features = [
    { title: "Interact Directly with School Heads", desc: "Get answers straight from the experts", icon: "👤" },
    { title: "Compare Curriculum & Pedagogy", desc: "Understand differences between CBSE, ICSE, IB, etc.", icon: "📋" },
    { title: "Get Exclusive Fee Structures & Offers", desc: "Access transparent information and avail offers", icon: "％" },
    { title: "Explore Schools Offerings", desc: "Preview infrastructure, co-curricular and culture", icon: "🏫" }
  ];

  return (
    <section className="features-section">
      <h2 className="features-main-title">What Makes This Exhibition a Must-Visit</h2>
      
      <div className="features-grid">
        {features.map((f, i) => (
          <div key={i} className="feature-item-card">
            <div className="feature-icon-box">{f.icon}</div>
            <h3 className="feature-item-title">{f.title}</h3>
            <p className="feature-item-desc">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="nav-controls">
        <button className="nav-btn">←</button>
        <button className="nav-btn active">→</button>
      </div>

      {/* Decorative Bottom Curve */}
      <div className="bottom-curve">
        <svg viewBox="0 0 1440 120" fill="white">
            <path d="M0,0 C480,100 960,100 1440,0 L1440,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default FeaturesSection;