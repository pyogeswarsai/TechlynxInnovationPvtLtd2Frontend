// src/components/Hero.jsx
import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homehero = () => {
  return (
    <section className="hero d-flex align-items-center" id="hero">
      {/* Background layers */}
      <div className="hero-background">
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
        <div className="hero-gradient"></div>
      </div>

      {/* Bootstrap container */}
      <div className="container-fluid">
        <div className="row align-items-center px-3">
          {/* Left Content */}
          <div className="col-lg-6 col-md-12 hero-content text-center text-lg-start">
            <h1 className="hero-title">
              Unlock Your <span className="highlight">Future</span> with Us
            </h1>
            <p className="hero-description">
              We provide expert training, career guidance, and hands-on support
              to help you land your dream job and build a successful career path.
            </p>

            {/* Stats */}
            <div className="d-flex flex-wrap justify-content-center justify-content-lg-start hero-stats">
              <div className="stat mb-3 me-4">
                <span className="stat-number">95%</span>
                <span className="stat-label align-items-center text-center">Success Rate</span>
              </div>                
              <div className="stat me-4 mb-3">
                <span className="stat-number">5+</span>
                <span className="stat-label">Expert Trainers</span>
              </div>
              <div className="stat me-4 mb-3">
                <span className="stat-number">30+</span>
                <span className="stat-label">High-Demand Courses</span>
              </div>
            </div>

            {/* Actions */}
            <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start hero-actions">
              <Link to="/courses"><button className="btn btn-primary px-4 py-2">Explore Courses</button></Link>
              <Link to="/hire-talent"><button className="btn btn-outline-primary text-black px-4 py-2">
                Hire-Talent
              </button></Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="col-lg-6 col-md-12 hero-visual text-center mt-5 mt-lg-0">
            {/* Floating Cards */}
            <div className="floating-card card-1">
              <i className="fas fa-graduation-cap"></i> Skill Boost
            </div>
            <div className="floating-card card-2">
              <i className="fas fa-briefcase"></i> Career Ready
            </div>
            <div className="floating-card card-3">
              <i className="fas fa-users"></i> Mentorship
            </div>
            <div className="floating-card card-4">
              <i className="fas fa-laptop-code"></i> Projects
            </div>

            {/* Sphere Animation */}
            <div className="main-visual mx-auto">
              <div className="tech-sphere">
                <div className="sphere-core"></div>
                <div className="orbit orbit-1">
                  <div className="node"></div>
                </div>
                <div className="orbit orbit-2">
                  <div className="node"></div>
                </div>
                <div className="orbit orbit-3">
                  <div className="node"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Homehero;