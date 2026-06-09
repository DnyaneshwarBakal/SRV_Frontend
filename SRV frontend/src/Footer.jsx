import React from 'react';
import { MapPin, Phone, Instagram, Facebook, Youtube } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo Section */}
          <div className="footer-logo">
            <img 
              src="https://placehold.co/150x80/007bff/white?text=Premier+Schools" 
              alt="Premier Schools Exhibition" 
              style={{ borderRadius: '8px' }}
            />
          </div>

          {/* Corporate Office */}
          <div className="footer-section">
            <div className="icon-box">
              <MapPin size={20} />
            </div>
            <div className="footer-info">
              <h4>Corporate Office:</h4>
              <p>Suite B-5, Ballygunge Park Tower,</p>
              <p>67B Ballygunge Circular Road,</p>
              <p>Kolkata - 700019</p>
            </div>
          </div>

          {/* Ahmedabad Office */}
          <div className="footer-section">
            <div className="icon-box">
              <MapPin size={20} />
            </div>
            <div className="footer-info">
              <h4>Ahmedabad Office:</h4>
              <p>12/AA, Swastik Chambers, Near CU</p>
              <p>Shah College, Ashram Road,</p>
              <p>Ahmedabad - 380009</p>
            </div>
          </div>

          {/* Call Us Section */}
          <div className="footer-section">
            <div className="icon-box">
              <Phone size={20} />
            </div>
            <div className="footer-info">
              <h4>Call us on</h4>
              <p>9674805912</p>
              <p>9674585012</p>
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="footer-follow">
            <h4>Follow us on</h4>
            <div className="social-icons">
              <div className="social-icon-box">
                <Instagram size={20} />
              </div>
              <div className="social-icon-box">
                <Facebook size={20} />
              </div>
              <div className="social-icon-box">
                <Youtube size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        Copyright 2025 | All rights reserved. Premier Schools Exhibition
      </div>
    </footer>
  );
};

export default Footer;