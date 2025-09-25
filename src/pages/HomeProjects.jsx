// Projects.jsx
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import './HomeProjects.css';

const projects = [
  {
    title: "Techlynx Innovations Website",
    desc: "Corporate & IT services website featuring animations, services, career section, responsive layout and modern UI.",
    tech: ["React-Vite", "Bootstrap", "CSS", "AOS", "SpringBoot App"],
    liveUrl: "https://techlynxinnovationspvtltd.netlify.app/",
    status: "Completed",
    imageUrl: "/Project1.png",
  },
  {
    title: "Techlynx Coaching & Training Website",
    desc: "The second project (client site) with features like services + hiring section + dynamic content etc.",
    tech: ["React", "Bootstrap", "JavaScript", "CSS", "Node.js", "Express.js"],
    liveUrl: "https://techlynxcoachingwebsite.netlify.app/",
    status: "Completed",
    imageUrl: "/Project2.png",
  },
];

function HomeProjects() {
  return (
    <section className="projects py-5">
      <Container className="projectPage">
        <h2 className="text-center fw-bold mb-4">Our Projects</h2>
        <Row className="g-4 justify-content-center">
          {projects.map((proj, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card className="project-card h-100 shadow-sm">
                {proj.imageUrl && (
                  <Card.Img
                    variant="top"
                    src={proj.imageUrl}
                    alt={`${proj.title} screenshot`}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.desc}</Card.Text>
                  <p className="mb-2">
                    <strong>Tech Stack:</strong> {proj.tech.join(", ")}
                  </p>
                  <p className="mb-3">
                    <strong>Status:</strong> {proj.status}
                  </p>
                  <div className="mt-auto">
                    {proj.liveUrl ? (
                      <Button
                        variant="primary"
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Live
                      </Button>
                    ) : (
                      <Button variant="outline-secondary" disabled>
                        Coming Soon
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default HomeProjects;
