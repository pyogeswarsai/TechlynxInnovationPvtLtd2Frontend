import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
//npm install react-bootstrap bootstrap
import "./Hero_hire.css";

const slides = [
  {
    badge: "Career Growth",
    title: "Build Your Career With Us, Grow Beyond Limits.",
    description:
      "Step into a workplace that values innovation and teamwork. Together, we’ll unlock new opportunities and achieve success.",
    image: "/h1.jpg",
  },
  {
    badge: "Empowering Talent",
    title: "Be Part Of Something Bigger, Your Journey Starts Here.",
    description:
      "We believe in empowering talent to make a difference. Join us to shape ideas, build solutions, and transform the future.",
    image: "/h3.jpg",
  },
  {
    badge: "Continuous Learning",
    title: "Work, Learn & Thrive With Our Team.",
    description:
      "At our company, growth never stops. With every project, you’ll sharpen your skills, collaborate with brilliant minds, and advance your career.",
    image: "/h5.jpg",
  },
  {
    badge: "Opportunities Await",
    title: "Your Next Big Opportunity Awaits With Us.",
    description:
      "We’re more than just a workplace—we’re a community. Join hands with us to innovate, grow, and create lasting impact.",
    image: "/hc2.png",
  },
];

const Hero_hire = () => {
  return (
    <div
      id="heroHireCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="8000"
      data-bs-pause="false"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {/* Background Image */}
            <div
              className="hero-hire-bg"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Dark Overlay */}
            <div className="hero-hire-overlay"></div>

            {/* Content */}
            <div className="hero-hire-content container text-white">
              <span className="badge bg-light text-dark mb-3 px-3 py-2 fw-bold">
                {slide.badge}
              </span>
              <h1 className="display-3 fw-bold mb-4">{slide.title}</h1>
              <p className="lead mb-4">{slide.description}</p>
              <button className="btn btn-sky  fw-bold responsive-btn">
                <a href="#Jobcart" className="text-decoration-none text-white d-block w-100">
                  Explore Openings
                </a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero_hire;