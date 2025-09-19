// HomeHireTalent.jsx
import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

import {
  Container,
  Row,
  Col,
  Tab,
  Nav,
  Card,
  Button,
  Modal,
} from "react-bootstrap";
import {
  FaLaptopCode,
  FaCode,
  FaDesktop,
  FaServer,
  FaDatabase,
  FaCloud,
  FaBrain,
  FaShieldAlt,
  FaLink,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaMobile
} from "react-icons/fa";
import "./Homepage.css";

function Homehiretalent() {
  // Services data
  const services = [
    {
      key: "fullstack",
      icon: <FaLaptopCode />,
      title: "Full Stack Development",
      tagline: "End-to-end digital products",
      description:
        "We design and build complete digital ecosystems using React, Node.js, MongoDB and modern best-practices.",
      color: "#4F46E5",
    },
    {
      key: "cloud",
      icon: <FaCloud />,
      title: "Cloud Solutions",
      tagline: "Scale without limits",
      description:
        "Secure, cost-optimised cloud architectures on AWS / Azure / GCP — migration, infra-as-code and observability.",
      color: "#06B6D4",
    },
    {
      key: "aiml",
      icon: <FaBrain />,
      title: "AI & ML",
      tagline: "Smarter decisions",
      description:
        "From PoC to production — models, MLOps & API delivery for intelligent features.",
      color: "#7C3AED",
    },
    {
      key: "security",
      icon: <FaShieldAlt />,
      title: "Cybersecurity",
      tagline: "Defend your systems",
      description:
        "Security-first engineering: pentests, secure SDLC, hardening, monitoring and compliance support.",
      color: "#0EA5A4",
    },
    {
      key: "blockchain",
      icon: <FaLink />,
      title: "Blockchain Integration",
      tagline: "Decentralized solutions",
      description:
        "Smart contract design, token integrations, and blockchain strategy for real-world use cases.",
      color: "#F97316",
    },
    {
        key: "mobileapp",
        icon: <FaMobile />,
        title: "Mobile App Development",
        tagline: "Mobile solutions",
        description: "Native and hybrid apps that are fast, responsive, and built for every platform.",
        color: "#16f969ff"
    },
  ];

  // Careers data
  const careers = [
  {
    key: "fullstack",
    icon: <FaLaptopCode />,
    title: "Full Stack Developer",
    short: "Build end-to-end web applications.",
    salary: "₹6–10 LPA",
    experience: "2–4 years",
    mode: "Hybrid",
    responsibilities: [
      "Develop frontend & backend features",
      "Integrate APIs and services",
      "Maintain application performance",
    ],
    openings: 3,
  },
  {
    key: "software",
    icon: <FaCode />,
    title: "Software Engineer",
    short: "Develop robust and scalable software solutions.",
    salary: "₹5–9 LPA",
    experience: "1–3 years",
    mode: "Onsite",
    responsibilities: [
      "Write clean, maintainable code",
      "Participate in design discussions",
      "Fix bugs and optimize performance",
    ],
    openings: 5,
  },
  {
    key: "frontend",
    icon: <FaDesktop />,
    title: "Frontend Developer",
    short: "Create engaging UI experiences.",
    salary: "₹4–8 LPA",
    experience: "1–3 years",
    mode: "Hybrid",
    responsibilities: [
      "Develop responsive user interfaces",
      "Optimize UX for performance",
      "Collaborate with designers & backend team",
    ],
    openings: 4,
  },
  {
    key: "backend",
    icon: <FaServer />,
    title: "Backend Developer",
    short: "Design scalable backend systems.",
    salary: "₹5–9 LPA",
    experience: "2–4 years",
    mode: "Remote",
    responsibilities: [
      "Build APIs and services",
      "Ensure security and reliability",
      "Work with databases and server logic",
    ],
    openings: 3,
  },
  {
    key: "cloud",
    icon: <FaCloud />,
    title: "Cloud Engineer",
    short: "Deploy and manage cloud infrastructure.",
    salary: "₹7–12 LPA",
    experience: "3–5 years",
    mode: "Hybrid",
    responsibilities: [
      "Manage cloud resources and deployments",
      "Optimize cloud cost and performance",
      "Implement CI/CD pipelines",
    ],
    openings: 2,
  },
  {
    key: "datascientist",
    icon: <FaDatabase />,
    title: "Data Scientist",
    short: "Analyze data and build predictive models.",
    salary: "₹8–15 LPA",
    experience: "2–5 years",
    mode: "Hybrid",
    responsibilities: [
      "Analyze datasets for insights",
      "Build and deploy machine learning models",
      "Collaborate with product and engineering teams",
    ],
    openings: 2,
  },
];

  const [activeTab, setActiveTab] = useState("services");
  const [selectedServiceKey, setSelectedServiceKey] = useState(services[0].key);
  const [jobModal, setJobModal] = useState({ show: false, job: null });
  const detailRef = useRef(null);
  const containerRef = useRef(null);

  // init AOS with repeat/mirror so animations happen on scroll up/down
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // allow repeat animations
      mirror: true, // animate elements when scrolling past them in the opposite direction
      offset: 120,
    });
    AOS.refresh();
  }, []);

  // whenever tab changes or selected service changes refresh AOS so new content animates
  useEffect(() => {
    // slight timeout to let DOM update
    const t = setTimeout(() => {
      AOS.refreshHard();
    }, 120);
    return () => clearTimeout(t);
  }, [activeTab, selectedServiceKey]);

  const onSelectService = (key, index) => {
    setSelectedServiceKey(key);
    // scroll the detail into view smoothly on desktop/tablet; on mobile it will just show below
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      AOS.refresh();
    }, 150);
  };

  const openJobModal = (job) => {
    setJobModal({ show: true, job });
    // ensure AOS refresh when modal opens (if you animate modal content)
    setTimeout(() => AOS.refresh(), 60);
  };

  const closeJobModal = () => setJobModal({ show: false, job: null });

  const selectedService = services.find((s) => s.key === selectedServiceKey);

  return (
    <section className="hire-section py-5" id="hire-talent" ref={containerRef}>
      <Container>
        <div className="text-center mb-4" data-aos="fade-down">
          <h2 className="fw-bold">💼 What We Do & Who We Hire</h2>
          <p className="text-muted">
            Explore Techlynx’s IT services and career opportunities designed to help you grow.
          </p>
        </div>

        <Tab.Container
          activeKey={activeTab}
          onSelect={(k) => setActiveTab(k)}
        >
          <Nav variant="tabs" className="justify-content-center mb-4">
            <Nav.Item>
              <Nav.Link eventKey="services">Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="careers">Careers</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            {/* ----------------- SERVICES TAB ----------------- */}
            <Tab.Pane eventKey="services">
              <div className="services-area">
                <Row className="g-3">
                  {services.map((s, idx) => (
                    <Col
                      key={s.key}
                      xs={12}
                      sm={6}
                      md={4}
                      data-aos="zoom-in"
                      data-aos-delay={idx * 80}
                    >
                      <Card
                        className={`service-card h-100 ${
                          selectedServiceKey === s.key ? "active" : ""
                        }`}
                        onClick={() => onSelectService(s.key, idx)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="service-icon"
                          style={{
                            background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                            boxShadow:
                              selectedServiceKey === s.key
                                ? `0 10px 30px ${s.color}20`
                                : "0 8px 20px rgba(0,0,0,0.06)",
                          }}
                        >
                          <div className="icon-inner" style={{ color: s.color }}>
                            {s.icon}
                          </div>
                        </div>

                        <Card.Body>
                          <h5 className="mb-1 fw-bold">{s.title}</h5>
                          <div className="text-muted small mb-2">{s.tagline}</div>
                          <p className="text-muted small">{s.description}</p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>

                {/* selected service detail panel */}
                <div
                  ref={detailRef}
                  className="service-detail mt-4 p-4 rounded shadow-sm"
                  data-aos="fade-up"
                >
                  <Row className="align-items-center">
                    <Col md={3} sm={4} xs={12} className="text-center mb-3 mb-md-0">
                      <div
                        className="detail-icon-large"
                        style={{
                          borderColor: selectedService.color,
                          color: selectedService.color,
                        }}
                      >
                        {selectedService.icon}
                      </div>
                    </Col>

                    <Col md={6} sm={8} xs={12}>
                      <h4 className="mb-1">{selectedService.title}</h4>
                      <p className="text-muted mb-2">{selectedService.description}</p>

                    </Col>

                    <Col xs={12} md={3} className="text-center">
                      <Button
                        variant="primary"
                        className="me-2 mb-2 w-100 w-md-auto"
                        onClick={() => setActiveTab("careers")}
                      >
                        Explore Related Careers
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab.Pane>

            {/* ----------------- CAREERS TAB ----------------- */}
            <Tab.Pane eventKey="careers">
              <Row className="g-4">
                {careers.map((c, idx) => (
                  <Col
                    key={c.key}
                    xs={12}
                    md={6}
                    lg={4}
                    data-aos="fade-up"
                    data-aos-delay={idx * 100}
                  >
                    <Card className="career-card h-100 position-relative">
                      <Card.Body className="d-flex flex-column">
                        <div className="career-top d-flex align-items-center mb-3">
                          <div className="career-icon me-3">{c.icon}</div>
                          <div>
                            <h5 className="mb-1 text-primary fw-bold">{c.title}</h5>
                            <div className="text-muted small">{c.short}</div>
                          </div>
                        </div>

                        <hr />

                        <div className="career-meta mb-3">
                          <div><FaMoneyBillWave /> <strong>Salary:</strong> <span className="ms-1">{c.salary}</span></div>
                          <div className="mt-1"><FaClock /> <strong>Experience:</strong> <span className="ms-1">{c.experience}</span></div>
                          <div className="mt-1"><FaBuilding /> <strong>Mode:</strong> <span className="ms-1">{c.mode}</span></div>
                        </div>

                        <div className="mt-auto d-flex justify-content-between align-items-center">
                          <div className="text-muted small">Openings: <strong>{c.openings}</strong></div>
                          <div>
                            <Button
                              variant="light"
                              className="me-2"
                              onClick={() => openJobModal(c)}
                            >
                              View Details
                            </Button>
                            <Button variant="primary" onClick={() => openJobModal(c)}>
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Card.Body>

                      {/* overlay on hover */}
                      <div className="career-hover">
                        <div>
                          <h5 className="text-dark">{c.title}</h5>
                          <p className="text-dark small mb-2">{c.short}</p>
                          <Button variant="light" onClick={() => openJobModal(c)}>
                            See Roles & Apply
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* Job Modal (career details) */}
      <Modal show={jobModal.show} onHide={closeJobModal} centered size="lg" className="job-modal">
        <Modal.Header closeButton>
          <Modal.Title>{jobModal.job?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="text-muted">{jobModal.job?.short}</p>
          <Row>
            <Col md={6}>
              <h6>Details</h6>
              <ul>
                {jobModal.job?.responsibilities?.map((r, i) => <li key={i}>{r}</li>)}
              </ul>
            </Col>
            <Col md={6}>
              <h6>Quick Facts</h6>
              <div className="small text-muted">
                <div><FaMoneyBillWave /> <strong>Salary:</strong> <span className="ms-1">{jobModal.job?.salary}</span></div>
                <div><FaClock /> <strong>Experience:</strong> <span className="ms-1">{jobModal.job?.experience}</span></div>
                <div><FaBuilding /> <strong>Mode:</strong> <span className="ms-1">{jobModal.job?.mode}</span></div>
                <div className="mt-2"><strong>Openings: </strong>{jobModal.job?.openings}</div>
              </div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeJobModal}>Close</Button>
          <Link to="/hire-talent/job-form"><Button variant="primary">Apply Now</Button></Link>
        </Modal.Footer>
      </Modal>
    </section>
  );
}

export default Homehiretalent;