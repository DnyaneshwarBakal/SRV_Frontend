 import React from 'react';
import './ParticipatingSchools.css'; 

const ParticipatingSchools = () => {
  const schools = [
    { id: 1, name: 'Harrow International', image: '/harbewschool.PNG' },
    { id: 2, name: 'Shrewsbury School', image: '/shrewsburyschool.PNG' },
    { id: 3, name: 'King\'s College India', image: '/kingsclg.PNG' },
    { id: 4, name: 'Woodstock School', image: '/woodstockschool.PNG' },
    { id: 5, name: 'The Aga Khan Academy', image: '/khanacademy.PNG' },
    { id: 6, name: 'Ajinavm School', image: '/ajinavm.PNG' },
  ];

  const duplicatedSchools = [
    ...schools,
    ...schools.map((school) => ({
      ...school,
      id: school.id + schools.length,
    })),
  ];

  return (
    <section className="schools-container">
      <div className="schools-max-width">
        <h2 className="schools-title">Participating Schools</h2>

        <div className="schools-grid">
          {duplicatedSchools.map((school) => (
            <div key={school.id} className="school-card">
              <div className="logo-wrapper">
                <img
                  src={school.image}
                  alt={`${school.name} logo`}
                  className="school-logo"
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