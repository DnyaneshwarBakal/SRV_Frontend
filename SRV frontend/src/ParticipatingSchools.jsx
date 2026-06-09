 import React from 'react';
import './ParticipatingSchools.css'; 

const ParticipatingSchools = () => {
  // Using placehold.co for more reliable placeholder images
  // Format: https://placehold.co/{width}x{height}/{bg_color}/{text_color}?text={label}
  const getLogoUrl = (name) =>
    `https://placehold.co/200x100/1e1b4b/ffffff?text=${encodeURIComponent(name.split(' ')[0])}`;

  const schools = [
    { id: 1, name: 'Harrow International' },
    { id: 2, name: 'Shrewsbury School' },
    { id: 3, name: 'King\'s College India' },
    { id: 4, name: 'Woodstock School' },
    { id: 5, name: 'The Aga Khan Academy' },
    { id: 6, name: 'TISB Bangalore' },
    { id: 7, name: 'Doon School' },
    { id: 8, name: 'Mayo College' },
    { id: 9, name: 'Cheltenham College' },
    { id: 10, name: 'Rugby School' },
    { id: 11, name: 'Malvern College' },
    { id: 12, name: 'St. Paul\'s School' },
  ];

  return (
    <section className="schools-container">
      <div className="schools-max-width">
        <h2 className="schools-title">Participating Schools</h2>

        <div className="schools-grid">
          {schools.map((school) => (
            <div key={school.id} className="school-card">
              <div className="logo-wrapper">
                <img 
                  src={getLogoUrl(school.name)} 
                  alt={`${school.name} logo`} 
                  className="school-logo"
                  // Fallback if image still fails to load
                  onError={(e) => { e.target.src = 'https://placehold.co/200x100?text=Logo+Missing' }}
                />
              </div>
              <p className="school-name">{school.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ParticipatingSchools;