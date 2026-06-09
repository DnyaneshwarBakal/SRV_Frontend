import React, { useState, useEffect } from 'react';
import "./HeroSection.css";

export default function HeroSection() {
  const [isScrolled, setIsScrolled] = useState(false);

  const baseColumn1 = [
    "https://images.pexels.com/photos/256465/pexels-photo-256465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143797/pexels-photo-4143797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143799/pexels-photo-4143799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];
  const baseColumn2 = [
    "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/256465/pexels-photo-256465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143797/pexels-photo-4143797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143799/pexels-photo-4143799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];
  const baseColumn3 = [
    "https://images.pexels.com/photos/3945651/pexels-photo-3945651.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3810795/pexels-photo-3810795.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143791/pexels-photo-4143791.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/256465/pexels-photo-256465.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143798/pexels-photo-4143798.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/3662839/pexels-photo-3662839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143797/pexels-photo-4143797.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    "https://images.pexels.com/photos/4143799/pexels-photo-4143799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  ];
  const column1 = [...baseColumn1, ...baseColumn1];
  const column2 = [...baseColumn2, ...baseColumn2];
  const column3 = [...baseColumn3, ...baseColumn3];

  // Scroll Listener Logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="hero-page">
      {/* HEADER - Class changes based on scroll */}
      <header className={`hero-header ${isScrolled ? "hero-header--scrolled" : ""}`}>
        <img
          src="/headerlogo.webp"
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
            <p className="hero__subtitle">ALL IN ONE PLACE</p>
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
              {column1.map((src, index) => (
                <img key={index} src={src} alt="School children" />
              ))}
            </div>
            <div className="hero__column hero__column--delay">
              {column2.map((src, index) => (
                <img key={index} src={src} alt="School children" />
              ))}
            </div>
            <div className="hero__column">
              {column3.map((src, index) => (
                <img key={index} src={src} alt="School children" />
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