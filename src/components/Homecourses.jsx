import React, { useState } from "react";
import { Container, Row, Col, ListGroup, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const coursesData = {
  "Full Stack Development": [
    {
      name: "Java Full Stack",
      price: "₹49,999/-",
      description: "Master Java, Spring Boot, Hibernate, and modern frontend.",
      image: "/javaFullStack.jpg",
      link: "/courses/java-full-stack",
    },
    {
      name: "Python Full Stack",
      price: "₹49,999/-",
      description: "Learn Django, Flask, React with Python backend expertise.",
      image: "/pythonFullStack.jpg",
      link: "/courses/python-full-stack",
    },
    {
      name: ".NET Full Stack",
      price: "₹29,999/-",
      description: "Complete .NET stack with ASP.NET, C#, and Angular.",
      image: "/dotnetFullStack.jpeg",
      link: "/courses/net-full-stack",
    },
    {
      name: "MERN Full Stack",
      price: "₹49,999/-",
      description: "MongoDB, Express, React, Node.js full professional stack.",
      image: "/mernFullStack.jpg",
      link: "/courses/mern-full-stack",
    },
    {
      name: "MEAN Full Stack",
      price: "₹49,999/-",
      description: "Learn Angular with Node.js, Express, and MongoDB.",
      image: "/meanFullStack.jpg",
      link: "/courses/mean-full-stack",
    },
  ],

  "Programming Languages & Frameworks": [
    {
      name: "Java",
      price: "₹29,999/-",
      description:
        "Learn Core Java, OOP concepts, control structures, arrays, and build simple console-based applications.",
      image: "/javaCourse.jpg",
      link: "/courses/java",
    },
    {
      name: "Python",
      price: "₹29,999/-",
      description:
        "Learn Python syntax, data types, control flow, functions, and build simple console-based programs.",
      image: "/pythonCourse.jpg",
      link: "/courses/python",
    },
    {
      name: "Node.js",
      price: "₹19,999/-",
      description:
        "Learn Node.js fundamentals, modules, HTTP server creation, file handling, and build simple backend APIs.",
      image: "/NodeCourse.jpg",
      link: "/courses/node",
    },
    {
      name: "Flutter",
      price: "₹14,999/-",
      description:
        "Learn Dart, Flutter widgets, UI design, navigation, and build cross-platform mobile apps.",
      image: "/flutterCourse.jpg",
      link: "/courses/flutter",
    },
    {
      name: "React Native",
      price: "₹19,999/-",
      description:
        "Learn React Native components, navigation, state management, and build cross-platform mobile apps.",
      image: "/reactNativeCourse.jpg",
      link: "/courses/react-native",
    },
  ],

  "Web Development": [
    {
      name: "Frontend Developer",
      price: "₹34,999/-",
      description: "HTML, CSS, JavaScript, React for building stunning UIs.",
      image: "/frontendDevelopment.jpg",
      link: "/courses/frontend-development",
    },
    {
      name: "Backend Developer",
      price: "₹34,999/-",
      description: "APIs, Databases, and scalable backend systems.",
      image: "/backendDevelopment.jpg",
      link: "/courses/backend-development",
    },
    {
      name: "Web Developer",
      price: "₹49,999/-",
      description: "Complete web development with modern frameworks.",
      image: "/webDevelopment.jpg",
      link: "/courses/web-development",
    },
    {
      name: "PHP Developer",
      price: "₹39,999/-",
      description:
        "Learn PHP syntax, forms, sessions, MySQL integration, and build dynamic web pages with backend logic.",
      image: "/phpCourse.jpg",
      link: "/courses/php-development",
    },
  ],

  "Testing & QA": [
    {
      name: "Manual Testing",
      price: "₹24,999/-",
      description: "Master test planning, execution, and bug reporting.",
      image: "/manualTesting.jpg",
      link: "/courses/manual-testing",
    },
    {
      name: "Automation Testing",
      price: "₹24,999/-",
      description: "Automate testing with Selenium, Python, and Java.",
      image: "/automationTesting.jpg",
      link: "/courses/automation-testing",
    },
    {
      name: "Selenium",
      price: "₹24,999/-",
      description: "Comprehensive Selenium WebDriver with real projects.",
      image: "/seleniumTesting.jpg",
      link: "/courses/selenium",
    },
    {
      name: "JUnit",
      price: "₹17,999/-",
      description:
        "Learn unit testing principles, JUnit annotations, assertions, and build reliable test cases for Java applications.",
      image: "/junitCourse.jpg",
      link: "/courses/junit",
    },
    {
      name: "Jmeter",
      price: "₹17,999/-",
      description:
        "Learn JMeter installation, test plans, thread groups, samplers, assertions, and perform load & performance testing.",
      image: "/jmeterCourse.jpg",
      link: "/courses/jmeter",
    },
  ],

  "Data Science": [
    {
      name: "Data Science",
      price: "₹69,999/-",
      description:
        "Learn Python, statistics, data visualization, and machine learning to analyze and interpret real-world data.",
      image: "/dataScience.jpg",
      link: "/courses/datascience",
    },
    {
      name: "Data Analytics",
      price: "₹29,999/-",
      description:
        "Learn Excel, SQL, Python, statistics, and data visualization to extract insights and support decision-making.",
      image: "/dataAnalyticsCourse.jpg",
      link: "/courses/data-analytics",
    },
    {
      name: "Power BI",
      price: "₹24,999/-",
      description:
        "Learn data import, Power Query, DAX basics, and build interactive dashboards for business insights.",
      image: "/powerBICourse.jpg",
      link: "/courses/powerbi",
    },
    {
      name: "Tableau",
      price: "₹24,999/-",
      description:
        "Learn data connections, charts, filters, dashboards, and build interactive visualizations for business insights.",
      image: "/tableauCourse.jpg",
      link: "/courses/tableau",
    },
  ],

  "AI & ML": [
    {
      name: "Artificial Intelligence",
      price: "₹99,999/-",
      description:
        "Learn AI fundamentals, Python, machine learning, neural networks, and build intelligent systems with real-world applications.",
      image: "/artificialIntelligence.jpg",
      link: "/courses/artificial-intelligence",
    },
    {
      name: "Machine Learning",
      price: "₹79,999/-",
      description:
        "Learn supervised and unsupervised algorithms, Python, regression, classification, and build predictive models with real-world data.",
      image: "/machineLearning.jpg",
      link: "/courses/machine-learning",
    },
    {
      name: "Deep Learning",
      price: "₹99,999/-",
      description:
        "Learn neural networks, CNNs, RNNs, and build intelligent models using Python and TensorFlow for real-world data.",
      image: "/deepLearningCourse.jpg",
      link: "/courses/deep-learning",
    },
  ],

  "Database Management": [
    {
      name: "Database Administration",
      price: "₹34,999/-",
      description:
        "Learn SQL queries, joins, user roles, backup & recovery, and manage database performance and security.",
      image: "/databaseAdministrator.jpg",
      link: "/courses/database-administration",
    },
    {
      name: "MySQL",
      price: "₹34,999/-",
      description:
        "Learn SQL syntax, CRUD operations, joins, constraints, and manage relational databases with real-world queries.",
      image: "/mysqlCourse.jpg",
      link: "/courses/mysql",
    },
    {
      name: "Mongo DB",
      price: "₹34,999/-",
      description:
        "Learn NoSQL concepts, collections, CRUD operations, aggregation, and build scalable databases with MongoDB.",
      image: "/mongodbCourse.jpg",
      link: "/courses/mongoDB",
    },
  ],

  "Business & Marketing": [
    {
      name: "Business Analyst",
      price: "₹24,999/-",
      description:
        "Learn business analysis fundamentals, documentation, Agile processes, Excel, SQL, Power BI, and data-driven decision-making.",
      image: "/businessAnalystCourse.png",
      link: "/courses/business-analyst",
    },
    {
      name: "Business Intelligence",
      price: "₹24,999/-",
      description:
        "Learn data warehousing, ETL, dashboards, OLAP, and BI tools like Power BI/Tableau to drive data-informed decisions.",
      image: "/businessIntelligenceCourse.webp",
      link: "/courses/business-intelligence",
    },
    {
      name: "Digital Marketing",
      price: "₹34,999/-",
      description:
        "Learn SEO, SEM, social media, content strategy, email marketing, and analytics to drive online growth and brand visibility.",
      image: "/digitalMarketing.jpeg",
      link: "/courses/digital-marketing",
    },
  ],

  "Emerging Tech": [
    {
      name: "Cybersecurity",
      price: "₹49,999/-",
      description: "Security, networking, and penetration testing.",
      image: "/cyberSecurity.jpeg",
      link: "/courses/cybersecurity",
    },
    {
      name: "Blockchain Integration",
      price: "₹59,999/-",
      description: "Blockchain concepts and real-world integrations.",
      image: "/blockChain.jpg",
      link: "/courses/blockchain-integration",
    },
    {
      name: "DevOps Engineering",
      price: "₹39,999/-",
      description: "CI/CD pipelines, Docker, Kubernetes, Jenkins.",
      image: "/devops.jpg",
      link: "/courses/devops-engineering",
    },
    {
      name: "Cloud Computing",
      price: "₹34,999/-",
      description: "AWS, Azure, and GCP cloud fundamentals.",
      image: "/cloudComputing.jpg",
      link: "/courses/cloud-computing",
    },
  ],
};

function Homecourses() {
  const [activeCategory, setActiveCategory] = useState("All Courses");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const allCourses = Object.values(coursesData).flat();

  const displayedCourses =
    activeCategory === "All Courses"
      ? allCourses
      : coursesData[activeCategory] || [];

  // Apply search filter
  const filteredCourses = displayedCourses.filter(
    (course) =>
      course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="courses-section">
      <Container className="courses-container">
        <Row className="g-0 flex-column flex-md-row">
          {/* Sidebar */}
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

              {/* 🔍 Search Bar */}
              <Form.Control
                type="text"
                placeholder="Search courses..."
                className="mb-4 w-75 mx-auto rounded-pill shadow-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <Row>
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course, idx) => (
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
                  ))
                ) : (
                  <p className="text-muted text-center">No courses found.</p>
                )}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Homecourses;
