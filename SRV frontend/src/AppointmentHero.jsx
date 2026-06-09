import React from 'react';
import { ArrowRight } from 'lucide-react';
import './AppointmentHero.css';

const AppointmentHero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <p className="hero-subtitle">Exciting Opportunities for Parents!</p>
        <h1 className="hero-title">Pre-schedule Your School Appointments</h1>
        <p className="hero-tagline">To Avoid Rush</p>
        
        <button className="pre-schedule-btn">
          <div className="btn-icon">
            <ArrowRight size={16} color="white" />
          </div>
          <span className="btn-text">PRE-SCHEDULE NOW</span>
        </button>
      </div>
      <div className="hero-image-container">
        <img 
          src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1200" 
          alt="Exhibition event" 
          className="hero-image"
        />
      </div>
    </section>
  );
};

export default AppointmentHero;