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
  FaNetworkWired,
  FaRobot,
  FaChartBar,
  FaMobileAlt,
  FaMoneyBillWave,
  FaClock,
  FaBuilding,
  FaMobile,
  FaGlobe,
  FaPeopleArrows,
  FaBriefcase,
  FaChartLine, FaCogs, FaCheckCircle, FaPenFancy, FaHeadset, FaBullhorn, FaUsers,
  FaProjectDiagram, FaPenNib, FaVideo, FaGamepad, FaPalette, FaCube
} from "react-icons/fa";
import "./Homepage.css";

function Homehiretalent() {
  // Services data
  const services = [
    { key: "fullstack", icon: <FaLaptopCode />, title: "Full Stack Development", tagline: "End-to-end digital products", description: "We design and build complete digital ecosystems using React, Node.js, MongoDB and modern best-practices.", color: "#4F46E5" },
    { key: "web", icon: <FaGlobe />, title: "Web Development", tagline: "End-to-end web applications", description: "We design and build complete web application using React, Node.js and modern best-practices.", color: "#f37f2dff" },
    { key: "cloud", icon: <FaCloud />, title: "Cloud Solutions", tagline: "Scale without limits", description: "Secure, cost-optimised cloud architectures on AWS / Azure / GCP — migration, infra-as-code and observability.", color: "#06B6D4" },
    { key: "aiml", icon: <FaBrain />, title: "AI Solutions", tagline: "Smarter decisions", description: "From PoC to production — models, MLOps & API delivery for intelligent features.", color: "#7C3AED" },
    { key: "security", icon: <FaShieldAlt />, title: "Cybersecurity", tagline: "Defend your systems", description: "Security-first engineering: pentests, secure SDLC, hardening, monitoring and compliance support.", color: "#0EA5A4" },
    { key: "blockchain", icon: <FaLink />, title: "Blockchain Integration", tagline: "Decentralized solutions", description: "Smart contract design, token integrations, and blockchain strategy for real-world use cases.", color: "#F97316" },
    { key: "mobileapp", icon: <FaMobile />, title: "Mobile App Development", tagline: "Mobile solutions", description: "Native and hybrid apps that are fast, responsive, and built for every platform.", color: "#16f969ff" },
    { key: "hr", icon: <FaPeopleArrows />, title: "HR Recruitment", tagline: "End-to-end talent acquisition and onboarding processes", description: "Comprehensive HR services including staffing, payroll management, compliance, and training programs.", color: "#4F46E5" },
    // Additional services for "show more"
    {
    key: "dataAnalytics",
    icon: <FaChartLine />,
    title: "Data Analytics",
    tagline: "Insights that drive decisions",
    description: "We turn raw data into actionable insights using advanced analytics, visualization, and reporting to help businesses make informed decisions.",
    color: "#3B82F6"
  },
  {
    key: "devOps",
    icon: <FaCogs />,
    title: "DevOps & CI/CD",
    tagline: "Faster, reliable deployments",
    description: "We implement CI/CD pipelines, automated workflows, and cloud infrastructure management to streamline development and operations.",
    color: "#F59E0B"
  },
  {
    key: "qaTesting",
    icon: <FaCheckCircle />,
    title: "QA & Testing",
    tagline: "Ensuring flawless performance",
    description: "Our QA team performs rigorous testing to identify bugs, optimize performance, and ensure your software meets the highest quality standards.",
    color: "#10B981"
  },
  {
    key: "uiuxDesign",
    icon: <FaPenFancy />,
    title: "UI/UX Design",
    tagline: "Designs that delight users",
    description: "We craft intuitive interfaces and engaging user experiences that enhance usability, accessibility, and overall satisfaction.",
    color: "#8B5CF6"
  },
  {
    key: "itSupport",
    icon: <FaHeadset />,
    title: "IT Support & Maintenance",
    tagline: "Reliable technology assistance",
    description: "Our IT support team ensures your systems run smoothly with proactive monitoring, troubleshooting, and maintenance services.",
    color: "#EF4444"
  },
  {
    key: "digitalMarketing",
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    tagline: "Grow your online presence",
    description: "We provide SEO, social media, PPC, and content marketing strategies to boost brand visibility, engagement, and conversions.",
    color: "#EC4899"
  },
  {
    key: "hrOutsourcing",
    icon: <FaUsers />,
    title: "HR Outsourcing Services",
    tagline: "Efficient people management",
    description: "We manage payroll, recruitment, compliance, and HR operations, allowing your business to focus on growth while we handle human resources.",
    color: "#14B8A6"
  },
    {
    key: "customApi",
    icon: <FaCode />,
    title: "Custom API Development & Integration",
    tagline: "Seamless connectivity for your apps",
    description: "We develop robust and scalable APIs tailored to your business needs and integrate them with your existing systems, enabling smooth data flow and automation.",
    color: "#10B981"
  },
  {
    key: "iotSolutions",
    icon: <FaProjectDiagram />,
    title: "IoT Solutions",
    tagline: "Connecting devices intelligently",
    description: "From smart devices to industrial automation, we provide end-to-end IoT solutions that collect, analyze, and act on real-time data for smarter operations.",
    color: "#F59E0B"
  },
  {
    key: "contentWriting",
    icon: <FaPenNib />,
    title: "Content Writing & Copywriting",
    tagline: "Words that resonate and convert",
    description: "Our creative team crafts compelling content and copy that engages audiences, strengthens brand voice, and drives meaningful results.",
    color: "#EF4444"
  },
  {
    key: "videoEditing",
    icon: <FaVideo />,
    title: "Video Editing & Production",
    tagline: "Stories brought to life visually",
    description: "We produce professional videos with high-quality editing, animation, and effects to communicate your message effectively across all platforms.",
    color: "#8B5CF6"
  },
  {
    key: "gameDevelopment",
    icon: <FaGamepad />,
    title: "Game Development",
    tagline: "Immersive interactive experiences",
    description: "Our team develops engaging games for web, mobile, and desktop, combining storytelling, graphics, and gameplay mechanics to captivate players.",
    color: "#3B82F6"
  },
  {
    key: "graphicDesign",
    icon: <FaPalette />,
    title: "Graphic Design & Branding",
    tagline: "Visual identity that stands out",
    description: "We create memorable logos, brand assets, and graphic designs that visually represent your brand and leave a lasting impression.",
    color: "#EC4899"
  },
  {
    key: "animation3d",
    icon: <FaCube />,
    title: "3D Modeling & Animation",
    tagline: "Bring ideas into three dimensions",
    description: "We design realistic 3D models and animations for games, advertising, architecture, and more, turning concepts into visually stunning realities.",
    color: "#14B8A6"
  }
  ];

  // Careers data
  const careers = [
    { 
    key: "javaFullstack", icon: <FaLaptopCode />, title: "Java Full Stack Developer", short: "Build end-to-end Java web applications.", salary: "₹8–12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop frontend & backend features using Java & Spring Boot", "Integrate REST APIs", "Maintain database operations", "Ensure application performance"], openings: 5 
  },
  { 
    key: "pythonFullstack", icon: <FaLaptopCode />, title: "Python Full Stack Developer", short: "Create full stack apps using Python frameworks.", salary: "₹9–14 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop web apps using Django/Flask", "Integrate APIs & services", "Handle database interactions", "Optimize app performance"], openings: 5 
  },
  { 
    key: "dotnetFullstack", icon: <FaLaptopCode />, title: ".NET Full Stack Developer", short: "Design full stack solutions with .NET.", salary: "₹7–11 LPA", experience: "1-3 years", mode: "Hybrid", responsibilities: ["Develop web apps using ASP.NET & Angular/React", "API integration & management", "Database design & optimization", "Unit testing & debugging"], openings: 4 
  },
  { 
    key: "mernFullstack", icon: <FaLaptopCode />, title: "MERN Full Stack Developer", short: "Build modern web apps with MERN stack.", salary: "₹10-15 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop frontend using React", "Create backend with Node.js & Express", "Database management with MongoDB", "Deploy & monitor applications"], openings: 6 
  },
  { 
    key: "meanFullstack", icon: <FaLaptopCode />, title: "MEAN Full Stack Developer", short: "Develop end-to-end applications using MEAN.", salary: "₹9–14 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Angular frontend development", "Node.js backend development", "MongoDB database operations", "Integrate APIs and services"], openings: 5 
  },
  { key: "java", icon: <FaLaptopCode />, title: "Java Developer", short: "Develop backend applications using Java.", salary: "₹8-12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Write clean Java code", "Develop REST APIs", "Database integration & management"], openings: 5 },
  { key: "python", icon: <FaLaptopCode />, title: "Python Developer", short: "Develop applications using Python.", salary: "₹9–14 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop web & desktop apps", "API integration", "Data processing & automation"], openings: 5 },
  { key: "nodejs", icon: <FaLaptopCode />, title: "Node.js Developer", short: "Backend development with Node.js.", salary: "₹9-13 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop REST APIs", "Integrate databases", "Maintain server-side performance"], openings: 4 },
  { key: "flutter", icon: <FaMobileAlt />, title: "Flutter Developer", short: "Cross-platform mobile app development.", salary: "₹7–11 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop apps for Android & iOS", "UI/UX implementation", "Integrate APIs and backend services"], openings: 4 },
  { key: "reactNative", icon: <FaMobileAlt />, title: "React Native Developer", short: "Build mobile apps using React Native.", salary: "₹8-12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop cross-platform apps", "Manage state & navigation", "Connect apps to backend APIs"], openings: 4 },
  { key: "frontend", icon: <FaLaptopCode />, title: "Frontend Developer", short: "Create responsive and interactive UI.", salary: "₹6-10 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop responsive UIs", "Integrate APIs", "Optimize web performance"], openings: 5 },
  { key: "backend", icon: <FaLaptopCode />, title: "Backend Developer", short: "Server-side development and database management.", salary: "₹8-12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop REST APIs", "Database design & integration", "Optimize backend performance"], openings: 5 },
  { key: "web", icon: <FaLaptopCode />, title: "Web Developer", short: "Build full-featured websites.", salary: "₹5-9 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Frontend & backend development", "Database management", "Deploy & maintain websites"], openings: 5 },
  { key: "php", icon: <FaLaptopCode />, title: "PHP Developer", short: "Develop dynamic websites using PHP.", salary: "₹4–7 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["PHP backend development", "Database integration", "Maintain website performance"], openings: 4 },
  { key: "manualTesting", icon: <FaCheckCircle />, title: "Manual Testing Engineer", short: "Test applications manually to ensure quality.", salary: "₹3-6 LPA", experience: "0–2 years", mode: "Hybrid", responsibilities: ["Write test cases", "Perform functional testing", "Report defects"], openings: 4 },
  { key: "automationTesting", icon: <FaRobot />, title: "Automation Testing Engineer", short: "Automate test cases for faster QA.", salary: "₹5-9 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Create automated test scripts", "Run test suites", "Report issues & optimize tests"], openings: 4 },
  { key: "selenium", icon: <FaRobot />, title: "Selenium Tester", short: "Automate web testing using Selenium.", salary: "₹5-9 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Write Selenium scripts", "Automate web tests", "Log & track defects"], openings: 3 },
  { key: "junit", icon: <FaCheckCircle />, title: "JUnit Tester", short: "Unit testing for Java applications.", salary: "₹5-8 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Write unit test cases", "Validate Java code", "Report errors & fix issues"], openings: 3 },
  { key: "jmeter", icon: <FaCheckCircle />, title: "JMeter Tester", short: "Performance testing with JMeter.", salary: "₹5-8 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Load and stress testing", "Analyze performance reports", "Optimize system performance"], openings: 3 },
  { key: "dataScience", icon: <FaChartBar />, title: "Data Science Engineer", short: "Analyze data to extract insights.", salary: "₹12-18 LPA", experience: "2-4 years", mode: "Hybrid", responsibilities: ["Data analysis & modeling", "Build predictive models", "Data visualization & reporting"], openings: 5 },
  { key: "dataAnalytics", icon: <FaChartBar />, title: "Data Analytics Specialist", short: "Transform data into business insights.", salary: "₹8–12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Analyze datasets", "Create dashboards & reports", "Provide actionable insights"], openings: 5 },
  { key: "powerBI", icon: <FaChartBar />, title: "Power BI Developer", short: "Build dashboards and visual analytics.", salary: "₹6-10 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop Power BI dashboards", "Data modeling & ETL", "Provide actionable insights"], openings: 3 },
  { key: "tableau", icon: <FaChartBar />, title: "Tableau Developer", short: "Visualize data with Tableau.", salary: "₹7-11 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Create interactive dashboards", "Analyze datasets", "Data storytelling & visualization"], openings: 3 },
  { key: "ai", icon: <FaRobot />, title: "Artificial Intelligence Engineer", short: "Develop AI-based solutions.", salary: "₹15-22 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Build AI models", "Implement ML algorithms", "Integrate AI into applications"], openings: 4 },
  { key: "ml", icon: <FaRobot />, title: "Machine Learning Engineer", short: "Develop predictive models using ML.", salary: "₹12-20 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Develop ML models", "Feature engineering", "Deploy ML solutions"], openings: 4 },
  { key: "deepLearning", icon: <FaRobot />, title: "Deep Learning Engineer", short: "Design deep neural networks.", salary: "₹15–24 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Build neural networks", "Train & test DL models", "Optimize performance"], openings: 3 },
  { key: "cybersecurity", icon: <FaShieldAlt />, title: "Cybersecurity Specialist", short: "Protect systems and data.", salary: "₹10-15 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Monitor & secure networks", "Conduct vulnerability assessments", "Implement security policies"], openings: 4 },
  { key: "blockchain", icon: <FaDatabase />, title: "Blockchain Developer", short: "Develop blockchain-based applications.", salary: "₹12-18 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Smart contract development", "Blockchain integration", "Maintain distributed ledger systems"], openings: 3 },
  { key: "devops", icon: <FaCloud />, title: "DevOps Engineer", short: "Automate deployments & infrastructure.", salary: "₹10-16 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["CI/CD pipeline setup", "Cloud & server management", "Monitor system performance"], openings: 4 },
  { key: "cloud", icon: <FaCloud />, title: "Cloud Engineer", short: "Manage cloud infrastructure & services.", salary: "₹11-17 LPA", experience: "2–4 years", mode: "Hybrid", responsibilities: ["Deploy & manage cloud apps", "Optimize cloud resources", "Ensure high availability"], openings: 4 },
  { key: "mysql", icon: <FaDatabase />, title: "MySQL Developer", short: "Database design and management.", salary: "₹5-9 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Design database schema", "Write optimized queries", "Maintain data integrity"], openings: 4 },
  { key: "mongodb", icon: <FaDatabase />, title: "MongoDB Developer", short: "NoSQL database development.", salary: "₹6-10 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Develop MongoDB schemas", "Query optimization", "Data replication & backup"], openings: 4 },
  { key: "businessIntelligence", icon: <FaChartBar />, title: "Business Intelligence Analyst", short: "Convert data into actionable business insights.", salary: "₹8-12 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Analyze business data", "Develop BI dashboards", "Provide insights for decision-making"], openings: 3 },
  { key: "businessAnalyst", icon: <FaChartBar />, title: "Business Analyst", short: "Bridge between business & IT.", salary: "₹7-11 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["Gather business requirements", "Analyze processes", "Prepare documentation & reports"], openings: 3 },
  { key: "digitalMarketing", icon: <FaBullhorn />, title: "Digital Marketing Specialist", short: "Grow brands through digital channels.", salary: "₹5-9 LPA", experience: "1–3 years", mode: "Hybrid", responsibilities: ["SEO & social media marketing", "PPC campaigns", "Content strategy & analytics"], openings: 4 },

  {
  key: "databaseAdmin",
  icon: <FaDatabase />,
  title: "Database Administrator",
  short: "Manage and maintain database systems efficiently.",
  salary: "₹5–10 LPA",
  experience: "2–4 years",
  mode: "Hybrid",
  responsibilities: [
    "Install, configure, and maintain databases",
    "Monitor database performance and optimize queries",
    "Ensure data security, backup, and recovery",
    "Manage database access and permissions"
  ],
  openings: 3
}  
];

  const [activeTab, setActiveTab] = useState("services");
  const [selectedServiceKey, setSelectedServiceKey] = useState(services[0].key);
  const [jobModal, setJobModal] = useState({ show: false, job: null });
  const [showAllServices, setShowAllServices] = useState(false);
  const [showAllCareers, setShowAllCareers] = useState(false);
  const detailRef = useRef(null);
  const containerRef = useRef(null);

  // init AOS with repeat/mirror so animations happen on scroll up/down
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
      mirror: true,
      offset: 120,
    });
    AOS.refresh();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => {
      AOS.refreshHard();
    }, 120);
    return () => clearTimeout(t);
  }, [activeTab, selectedServiceKey, showAllServices, showAllCareers]);

  const onSelectService = (key, index) => {
    setSelectedServiceKey(key);
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      AOS.refresh();
    }, 150);
  };

  const openJobModal = (job) => {
    setJobModal({ show: true, job });
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

        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
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
                  {(showAllServices ? services : services.slice(0, 9)).map((s, idx) => (
                    <Col key={s.key} xs={12} sm={6} md={4} data-aos="zoom-in" data-aos-delay={idx * 80}>
                      <Card
                        className={`service-card h-100 ${selectedServiceKey === s.key ? "active" : ""}`}
                        onClick={() => onSelectService(s.key, idx)}
                        style={{ cursor: "pointer" }}
                      >
                        <div
                          className="service-icon"
                          style={{
                            background: `linear-gradient(135deg, ${s.color}22, ${s.color}11)`,
                            boxShadow: selectedServiceKey === s.key ? `0 10px 30px ${s.color}20` : "0 8px 20px rgba(0,0,0,0.06)",
                          }}
                        >
                          <div className="icon-inner" style={{ color: s.color }}>{s.icon}</div>
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

                <div className="text-center mt-3">
                  <Button variant="outline-primary" onClick={() => setShowAllServices(!showAllServices)}>
                    {showAllServices ? "Explore Less" : "Explore More Services"}
                  </Button>
                </div>

                {/* selected service detail panel */}
                <div ref={detailRef} className="service-detail mt-4 p-4 rounded shadow-sm" data-aos="fade-up">
                  <Row className="align-items-center">
                    <Col md={3} sm={4} xs={12} className="text-center mb-3 mb-md-0">
                      <div className="detail-icon-large" style={{ borderColor: selectedService.color, color: selectedService.color }}>
                        {selectedService.icon}
                      </div>
                    </Col>

                    <Col md={6} sm={8} xs={12}>
                      <h4 className="mb-1">{selectedService.title}</h4>
                      <p className="text-muted mb-2">{selectedService.description}</p>
                    </Col>

                    <Col xs={12} md={3} className="text-center d-flex flex-column gap-2">
                      <Button variant="primary" className="w-100 text-wrap" onClick={() => { setActiveTab("careers"); setTimeout(() => { document.getElementById("careers-section")?.scrollIntoView({ behavior: "smooth" }); }, 200); }}>
                        Explore Related Careers
                      </Button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Tab.Pane>

            {/* ----------------- CAREERS TAB ----------------- */}
            <Tab.Pane eventKey="careers">
              <Row className="g-4" id="careers-section">
                {(showAllCareers ? careers : careers.slice(0, 6)).map((c, idx) => (
                  <Col key={c.key} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-delay={idx * 100}>
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
                            <Button variant="light" className="me-2" onClick={() => openJobModal(c)}>View Details</Button>
                            <Button variant="primary" onClick={() => openJobModal(c)}>Apply</Button>
                          </div>
                        </div>
                      </Card.Body>
                      <div className="career-hover">
                        <div>
                          <h5 className="text-dark">{c.title}</h5>
                          <p className="text-dark small mb-2">{c.short}</p>
                          <Button variant="light" onClick={() => openJobModal(c)}>See Roles & Apply</Button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                ))}
              </Row>
              <div className="text-center mt-5">
                <Button variant="primary" size="lg" onClick={() => setShowAllCareers(!showAllCareers)}>
                  {showAllCareers ? "Explore Less Jobs" : "Explore More Jobs"}
                </Button>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>

      {/* Job Modal */}
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
