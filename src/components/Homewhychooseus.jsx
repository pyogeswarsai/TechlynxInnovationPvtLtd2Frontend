// WhyChooseUs.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./Homepage.css";
import { Link } from "react-router-dom";

const features = [
  {
    title: "Expert Trainers",
    desc: "Learn from industry professionals with years of real-world experience.",
    icon: "👨‍🏫",
    path: "/contact-us/instructors",
  },
  {
    title: "Hands-on Projects",
    desc: "Work on live projects to gain practical exposure and confidence.",
    icon: "💻",
    path: "/projects",
  },
  {
    title: "Placement in Techlynx Roles",
    desc: "Secure your career with guaranteed job opportunities at Techlynx.",
    icon: "🚀",
    path: "/hire-talent",
  },
  {
    title: "Comprehensive Training",
    desc: "Offering Online and Corporate training programs tailored to your needs.",
    icon: "📘",
    path: "/training",
  },
];

function Homewhychooseus() {
  return (
    <section className="why-choose-us py-5">
      <Container>
        <h2 className="text-center fw-bold mb-4">Why Choose Us?</h2>
        <Row>
          {features.map((item, idx) => (
            <Col key={idx} md={6} lg={3} className="mb-4">
              <Link to={item.path} className="cards-link">
              <Card className="feature-card h-100 text-center shadow-sm">
                <div className="icon">{item.icon}</div>
                <Card.Body>
                  <Card.Title className="fw-semibold">{item.title}</Card.Title>
                  <Card.Text>{item.desc}</Card.Text>
                </Card.Body>
              </Card></Link>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Homewhychooseus;
