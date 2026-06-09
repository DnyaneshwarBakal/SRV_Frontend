import React from "react";
import "./TrustSection.css";

export default function TrustSection() {
  const stats = [
    { icon: "/trust.PNG", alt: "Trusted by" },
    { icon: "/22yr.PNG", alt: "22+ Years" },
    { icon: "/participate.PNG", alt: "Participate" },
    { icon: "/cities.PNG", alt: "17 Cities" },
  ];

  return (
    <section className="exact-trust-section">
      <div className="exact-trust-grid">
        {stats.map((item, index) => (
          <div className="exact-trust-item" key={index}>
            <img src={item.icon} alt={item.alt} className="exact-stat-icon" />
          </div>
        ))}
      </div>
    </section>
  );
}