import React from 'react';
import "./HeroSection.css";

export default function HeroSection() {
  // Duplicated arrays to create the infinite scroll effect
  const column1 = [1, 2, 3, 4, 1, 2, 3, 4];
  const column2 = [5, 6, 7, 8, 5, 6, 7, 8];
  const column3 = [9, 10, 11, 12, 9, 10, 11, 12];

  return (
    <div className="hero-page">
      {/* HEADER */}
      <header className="hero-header">
        <img
          src="https://placehold.co/140x60/1e1b4b/ffffff?text=LOGO"
          alt="Logo"
          className="hero-header__logo"
        />
        <button className="hero-header__register-btn">
          REGISTER NOW
        </button>
      </header>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero__container">

          {/* LEFT CONTENT */}
          <div className="hero__left">
            <h1 className="hero__title">
              Discover Gurugram's
              <span>Top 30+ Schools</span>
            </h1>
            <p className="hero__subtitle">
              ALL IN ONE PLACE
            </p>

            <div className="hero__event-card">
              <div>
                <h3>Apparel House</h3>
                <p>Sector 44, Gurugram</p>
              </div>
              <div className="hero__divider"></div>
              <div>
                <h3>2-3 August 2025</h3>
                <p>10 AM - 6 PM</p>
              </div>
            </div>
          </div>

          {/* CENTER SCROLLING IMAGES */}
          <div className="hero__center">
            <div className="hero__column">
              {column1.map((item, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/seed/img${item}/200/300`}
                  alt="School"
                />
              ))}
            </div>

            <div className="hero__column hero__column--delay">
              {column2.map((item, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/seed/img${item}/200/300`}
                  alt="School"
                />
              ))}
            </div>

            <div className="hero__column">
              {column3.map((item, index) => (
                <img
                  key={index}
                  src={`https://picsum.photos/seed/img${item}/200/300`}
                  alt="School"
                />
              ))}
            </div>
          </div>

          {/* FORM */}
          <div className="hero__form-wrapper">
            <div className="hero__form">
              <h2>Enquire Now</h2>
              <input type="text" placeholder="Parent Name" />
              <input type="tel" placeholder="Phone Number" />
              <textarea placeholder="Which grade are you looking for?"></textarea>
              <button className="hero__submit-btn">SUBMIT</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}