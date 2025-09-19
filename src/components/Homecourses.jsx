import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const coursesData = {
  "Full Stack Development": [
    {
      name: "Java Full Stack",
      price: "₹49,999",
      description: "Master Java, Spring Boot, Hibernate, and modern frontend.",
      image: "/javaFullStack.jpg",
      link: "/courses/java-full-stack",
    },
    {
      name: "Python Full Stack",
      price: "₹49,999",
      description: "Learn Django, Flask, React with Python backend expertise.",
      image: "/pythonFullStack.jpg",
      link: "/courses/python-full-stack",
    },
    {
      name: ".NET Full Stack",
      price: "₹29,999",
      description: "Complete .NET stack with ASP.NET, C#, and Angular.",
      image: "/dotnetFullStack.jpeg",
      link: "/courses/net-full-stack",
    },
    {
      name: "MERN Full Stack",
      price: "₹49,999",
      description: "MongoDB, Express, React, Node.js full professional stack.",
      image: "/mernFullStack.jpg",
      link: "/courses/mern-full-stack",
    },
    {
      name: "MEAN Full Stack",
      price: "₹49,999",
      description: "Learn Angular with Node.js, Express, and MongoDB.",
      image: "/meanFullStack.jpg",
      link: "/courses/mean-full-stack",
    },
  ],

  "Software Development": [
    {
      name: "Frontend Developer",
      price: "₹34,999",
      description: "HTML, CSS, JavaScript, React for building stunning UIs.",
      image: "/frontendDevelopment.jpg",
      link: "/courses/frontend-development",
    },
    {
      name: "Backend Developer",
      price: "₹34,999",
      description: "APIs, Databases, and scalable backend systems.",
      image: "/backendDevelopment.jpg",
      link: "/courses/backend-development",
    },
    {
      name: "Web Developer",
      price: "₹49,999",
      description: "Complete web development with modern frameworks.",
      image: "/webDevelopment.jpg",
      link: "/courses/web-development",
    },
  ],

  "Software Testing": [
    {
      name: "Manual Testing",
      price: "₹24,999",
      description: "Master test planning, execution, and bug reporting.",
      image: "/manualTesting.jpg",
      link: "/courses/manual-testing",
    },
    {
      name: "Automation Testing",
      price: "₹24,999",
      description: "Automate testing with Selenium, Python, and Java.",
      image: "/automationTesting.jpg",
      link: "/courses/automation-testing",
    },
    {
      name: "Selenium",
      price: "₹24,999",
      description: "Comprehensive Selenium WebDriver with real projects.",
      image: "/seleniumTesting.jpg",
      link: "/courses/selenium",
    },
  ],

  "Data Science": [
    {
      name: "Data Science",
      price: "₹69,999",
      description: "Data analysis, visualization, and reporting tools.",
      image: "/dataScience.jpg",
      link: "/courses/datascience",
    },
  ],

  "AI & ML": [
    {
      name: "Artificial Intelligence",
      price: "₹99,999",
      description: "AI concepts, NLP, and advanced algorithms.",
      image: "/artificialIntelligence.jpg",
      link: "/courses/artificial-intelligence",
    },
    {
      name: "Machine Learning",
      price: "₹79,999",
      description: "ML algorithms, regression, and real-time projects.",
      image: "/machineLearning.jpg",
      link: "/courses/machine-learning",
    },
  ],

  "Database Management": [
    {
      name: "Database Administration",
      price: "₹34,999",
      description: "SQL queries, joins, and database administration.",
      image: "/databaseAdministrator.jpg",
      link: "/courses/database-administration",
    },
  ],

  "Business & Digital": [
    {
      name: "Business Analyst & Intelligence",
      price: "₹24,999",
      description: "Learn BA roles, documentation, and agile processes. BI tools and data-driven decision-making.",
      image: "/businessAnalystIntelligence.jpg",
      link: "/courses/business-analyst-intelligence",
    },
    {
      name: "Digital Marketing",
      price: "₹34,999",
      description: "SEO, SEM, social media, and content marketing.",
      image: "/digitalMarketing.jpeg",
      link: "/courses/digital-marketing",
    },
  ],

  "Emerging Tech": [
    {
      name: "Cybersecurity",
      price: "₹49,999",
      description: "Security, networking, and penetration testing.",
      image: "/cyberSecurity.jpeg",
      link: "/courses/cybersecurity",
    },
    {
      name: "Blockchain Integration",
      price: "₹59,999",
      description: "Blockchain concepts and real-world integrations.",
      image: "/blockChain.jpg",
      link: "/courses/blockchain-integration",
    },
    {
      name: "DevOps Engineering",
      price: "₹39,999",
      description: "CI/CD pipelines, Docker, Kubernetes, Jenkins.",
      image: "/devops.jpg",
      link: "/courses/devops-engineering",
    },
    {
      name: "Cloud Computing",
      price: "₹34,999",
      description: "AWS, Azure, and GCP cloud fundamentals.",
      image: "/cloudComputing.jpg",
      link: "/courses/cloud-computing",
    },
  ],
};

function Homecourses() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const navigate = useNavigate();

  const allCourses = Object.values(coursesData).flat();

  const displayedCourses =
    activeCategory === "All Courses"
      ? allCourses
      : coursesData[activeCategory] || [];

  return (
    <section className="courses-section">
      <Container className="courses-container">
        <Row className="g-0 flex-column flex-md-row">
          {/* Sidebar - moves to top on mobile */}
          <Col md={3} className="course-sidebar mb-4 mb-md-0">
            <div className="sidebar-inner">
              <h4 className="mb-3">Course Categories</h4>
              <ListGroup>
                <ListGroup.Item
                  action
                  active={activeCategory === "All Courses"}
                  onClick={() => setActiveCategory("All Courses")}
                >
                  All Courses
                </ListGroup.Item>
                {Object.keys(coursesData).map((category) => (
                  <ListGroup.Item
                    key={category}
                    action
                    active={activeCategory === category}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </div>
          </Col>

          {/* Courses */}
          <Col md={9} className="course-content">
            <div className="course-scrollable-content">
              <h4 className="mb-3">{activeCategory}</h4>
              <Row>
                {displayedCourses.map((course, idx) => (
                  <Col key={idx} xs={12} sm={6} lg={4} className="mb-4">
                    <Card className="course-card shadow-sm h-100">
                      {course.image && (
                        <Card.Img
                          variant="top"
                          src={course.image}
                          alt={course.name}
                        />
                      )}
                      <Card.Body className="d-flex flex-column">
                        <Card.Title className="text-center">
                          {course.name}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted text-center">
                          {course.price}
                        </Card.Subtitle>
                        <Card.Text className="text-center flex-grow-1">
                          {course.description}
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                          <Button
                            variant="primary"
                            onClick={() => navigate(course.link)}
                          >
                            View Details
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Homecourses;
