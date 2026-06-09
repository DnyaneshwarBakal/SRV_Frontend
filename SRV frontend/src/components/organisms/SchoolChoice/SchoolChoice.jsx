import React from 'react';
import './SchoolChoice.css';

const SchoolChoice = () => {
  const options = [
    {
      id: 1,
      title: "Pre-Schools & Early Learning Centres",
      desc: "Nurturing foundational skills for toddlers and pre-primary children.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 2,
      title: "K-12 CBSE Day Schools",
      desc: "Reputed schools offering complete schooling from Kindergarten to Grade 12.",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 3,
      title: "Heritage to New-Age Schools",
      desc: "Time-tested schools to innovative pedagogy, tech enabled, future-ready schools.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=500"
    },
    {
      id: 4,
      title: "International Curriculum Schools",
      desc: "Offering IB, Cambridge, Finnish and other global curricula with a global learning environment.",
      image: "https://images.unsplash.com/photo-1523050335192-ce11558459e3?auto=format&fit=crop&q=80&w=500"
    }
  ];

  return (
    <section className="choice-section">
      <div className="choice-container">
        <h2 className="choice-header">Choose the School That Fits You Best</h2>
        
        <div className="choice-grid">
          {options.map((item) => (
            <div key={item.id} className="choice-card">
              <img src={item.image} alt={item.title} className="card-image" />
              <div className="card-overlay">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SchoolChoice;