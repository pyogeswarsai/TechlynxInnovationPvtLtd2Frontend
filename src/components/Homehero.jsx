import React from "react";
import { Carousel, Button, Container } from "react-bootstrap";
import "./Homepage.css";

import { Link } from "react-router-dom";

function Homehero() {
  const slides = [
    "/pic1.png",
    "/pic2.png",
    "/pic3.png",
    "/pic4.png",
    "/pic5.png",
  ];

  return (
    <Carousel fade interval={3000} controls={false} indicators={false} pause={false} touch={false} keyboard={false}>
      {slides.map((img, idx) => (
        <Carousel.Item key={idx}>
          <div
            className="hero-slide"
            style={{ backgroundImage: `url(${img})` }}
          >
            <Container className="hero-content text-center text-white">
              <h1 className="fw-bold display-3 text-warning animate-fade">
                Build Skills. Shape Careers. Drive Innovation.
              </h1>
              <p className="lead mb-4 fs-4 animate-slide">
                At Techlynx Innovations, we coach, train, and place talent within our ecosystem—bridging learning with real-world impact.
              </p>
              <div className="animate-buttons">
                <Link to="/courses"><Button variant="warning" className="me-3 fw-bold">
                  🚀 Explore Courses
                </Button></Link>
                <Link to="/hire-talent"><Button variant="outline-light"  className="fw-bold">
                  🤝 Hire Talent
                </Button></Link>
              </div>
            </Container>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Homehero;
