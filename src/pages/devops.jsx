import { useState } from "react";
import {
  FaCheckCircle,
  FaStar,
  FaUsers,
  FaArrowRight,
  FaBookOpen,
  FaMapMarkerAlt,
  FaUserTie,
  FaUserClock,
  FaUserGraduate,
} from "react-icons/fa";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import "./python.css";
import { Link } from "react-router-dom";
const tools = [
  {
    name: "Git",
    img: "https://images.assets-landingi.com/uc/37b05982-9ab4-4981-83e8-39f043c18937/GitLogo2Color.svg",
  },
  {
    name: "Azure",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Microsoft_Azure_Logo.svg",
  },
  {
    name: "Docker",
    img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    name: "Kubernetes",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/39/Kubernetes_logo_without_workmark.svg",
  },
  {
    name: "Jenkins",
    img: "https://www.jenkins.io/images/logos/jenkins/jenkins.svg",
  },
  {
    name: "Ansible",
    img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Ansible_logo.svg",
  },
  {
    name: "Terraform",
    img: "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
  },
  {
    name: "Prometheus",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/38/Prometheus_software_logo.svg",
  },
  {
    name: "Grafana",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Grafana_icon.svg",
  },
  {
    name: "AWS",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a DevOps course?",
    answer:
      "This course trains you in continuous integration, continuous delivery (CI/CD), containerization, orchestration, monitoring, and cloud automation.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "Basic knowledge of Linux, scripting (Shell/Python), and networking is recommended. However, beginners can also start with foundational modules.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You’ll learn Git/GitHub, Jenkins, Docker, Kubernetes, Ansible, Terraform, Prometheus, Grafana, and cloud platforms like AWS, Azure, and GCP.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll work on CI/CD pipelines, Kubernetes deployments, Infrastructure as Code projects, monitoring dashboards, and cloud-hosted microservices.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), Build & Release Engineer, or Automation Engineer.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate validating your DevOps and cloud engineering skills.",
  },
  {
    question: "Does the course include placement assistance?",
    answer:
      "Yes, the course includes career guidance, resume reviews, mock interviews, and job opportunities with IT companies adopting DevOps.",
  },
];

function Devops() {
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => setOpenIndex(openIndex === index ? null : index);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  const [subscribeSubmitted, setSubscribeSubmitted] = useState(false);

  const handleSubscribeSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setSubscribeSubmitted(true);
  };

  const steps = [
    {
      title: "Module 1: DevOps Fundamentals",
      details:
        "Understand DevOps culture, principles, Agile, and the software development lifecycle (SDLC).",
    },
    {
      title: "Module 2: Version Control with Git & GitHub",
      details:
        "Learn Git basics, branching, merging, GitHub workflows, and collaborative version control.",
    },
    {
      title: "Module 3: Continuous Integration (CI)",
      details:
        "Automate builds and testing using Jenkins, GitHub Actions, and CI pipelines.",
    },
    {
      title: "Module 4: Containerization with Docker",
      details:
        "Learn Docker images, containers, Docker Compose, and best practices for microservices.",
    },
    {
      title: "Module 5: Orchestration with Kubernetes",
      details:
        "Deploy, scale, and manage applications with Kubernetes clusters and Helm charts.",
    },
    {
      title: "Module 6: Configuration Management",
      details:
        "Automate infrastructure setup with Ansible and manage environments efficiently.",
    },
    {
      title: "Module 7: Infrastructure as Code (IaC)",
      details:
        "Use Terraform for provisioning infrastructure across AWS, Azure, and GCP.",
    },
    {
      title: "Module 8: Monitoring & Logging",
      details:
        "Implement monitoring with Prometheus and visualization with Grafana, along with log management.",
    },
    {
      title: "Module 9: Cloud Platforms",
      details:
        "Hands-on training on AWS, Azure, and Google Cloud services used in DevOps pipelines.",
    },
    {
      title: "Module 10: Career Preparation",
      details:
        "Resume building, DevOps interview prep, system design basics, and mock interviews.",
    },
  ];
  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h3 className="fw-bold display-5">Advanced Certification in DevOps</h3>
        <p className="fs-5 mt-2">
          Have a look at all of the most popular courses here!
        </p>
      </div>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-6">
            <div className="container mb-5">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/courses">Courses</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    DevOps
                  </li>
                </ol>
              </nav>
            </div>
            <h2 className="fw-bold">Advanced Certification in DevOps</h2>
            <p>Ranked #1 Full Stack Training Institute with Placement.</p>
            <p>
              Techlynx provides the Best Full Stack Training in Guntur & Online
              with<strong> 100% placements.</strong>
              Learn Full Stack Course from Basics to Advanced and get real-time
              experience.
            </p>
            <ul className="list-unstyled">
              <li>
                <FaCheckCircle className="text-success me-2" /> Enroll Now for
                Trending Courses with Job Assurance
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> 1 Years
                experience in Software Training & Placements
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Branch in Guntur
              </li>
            </ul>
            <div className="d-flex gap-3 mt-4">
              <Link to="/enroll">
                <button className="btn btn-warning fw-bold">
                  Enroll Now <FaArrowRight className="ms-2" />
                </button>
              </Link>
              <button className="btn btn-primary fw-bold">
                View Certificate <FaUserClock className="ms-2" />
              </button>
            </div>
          </div>
          {/* Right */}
          <div className="col-md-6 text-center">
            <img
              src="/dev.jpg"
              alt="DevOps"
              className="img-fluid rounded shadow"
            />
            <div className="d-flex justify-content-around mt-3">
              <div>
                <FaStar className="text-warning" /> <strong>4.9</strong> Ratings
              </div>
              <div>
                <FaUsers className="text-success" /> <strong>7.6k</strong>{" "}
                Learners
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-4">
          Our learners transformed their careers
        </h2>
        <p className="text-center text-muted mb-5">
          The program empowers learners to get roles in top companies and
          leadership positions
        </p>
        <div className="row text-center">
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card red">
              <FaBookOpen className="stat-icon" />
              <p className="stat-value">7K</p>
              <h5>Students Enrolled</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card purple">
              <FaMapMarkerAlt className="stat-icon" />
              <p className="stat-value">Guntur</p>
              <h5>Branches</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card yellow">
              <FaUserTie className="stat-icon" />
              <p className="stat-value">900+</p>
              <h5>Placed Students</h5>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card green">
              <FaUserClock className="stat-icon" />
              <p className="stat-value">1+</p>
              <h5>Years of Experience</h5>
            </div>
          </div>
        </div>
      </div>

      {/* ================= TOOLS COVERED ================= */}
      <div className="container my-5">
        <h2 className="tools-heading text-center mb-5">
          <span className="text-primary fw-bold">DevOps</span>{" "}
          <span className="fw-semibold">Tools Covered</span>
        </h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {tools.map((tool, index) => (
            <div className="col" key={index}>
              <div className="tool-card shadow-sm h-100 d-flex flex-column align-items-center justify-content-center p-3">
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="tool-logo mb-3"
                />
                <h6 className="fw-semibold">{tool.name}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ================= ROADMAP + FORM ================= */}
      <div className="container-fluid py-5">
        <div className="row">
          {/* Left Side - Roadmap Timeline (scrollable like courses) */}
          <div className="col-md-6 px-4">
            <div className="flowchart-scrollable">
              <h2 className="roadmap-heading text-primary fw-bold mb-5 text-center">
                🚀 DevOps Engineering Roadmap
              </h2>
              <div className="timeline">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`timeline-item ${
                      index % 2 === 0 ? "left" : "right"
                    }`}
                  >
                    <div className="circle">{index + 1}</div>
                    <div className="content">
                      <h6>{step.title}</h6>
                      <p>{step.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="col-md-6 px-4">
            <div className="sticky-form">
              <div className="card shadow-lg p-4 rounded-4">
                {!submitted ? (
                  <>
                    <h3 className="text-center text-dark mb-3">Get in Touch</h3>
                    <p className="text-muted text-center">
                      Have questions about the roadmap or need guidance? Fill
                      the form and we’ll get back to you.
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your name"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Message</label>
                        <textarea
                          className="form-control"
                          rows="4"
                          placeholder="Your message"
                        ></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100">
                        Submit
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="thankyou-message text-center d-flex flex-column justify-content-center align-items-center">
                    <h3 className="text-success animate__animated animate__zoomIn">
                      ✅ Thank you!
                    </h3>
                    <p className="animate__animated animate__fadeIn animate__delay-1s">
                      We’ve received your message and will contact you soon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================= CERTIFICATE (Wall) ================= */}
      <section className="certificate-section container py-5">
        <div className="row align-items-center justify-content-center">
          {/* Left Side - Certificate Card */}
          <div className="col-md-6 mb-4">
            <div className="certificate-card p-4 rounded shadow-lg">
              <span className="badge bg-warning text-dark mb-3 ">
                🎓 TechLynx Official Certificate
              </span>
              <div className="text-center">
                <img
                  src="/certificate.jpg"
                  alt="Certificate"
                  className="img-fluid rounded certificate-img"
                />
              </div>
              <h5 className="mt-4 text-success fw-bold">DevOps</h5>
              <p className="text-muted small">
                <FaStar className="text-warning" /> Industry Recognized
                Certification
              </p>
              <div className="d-flex justify-content-between mt-3 flex-wrap">
                <div className="feature-box bg-success mb-2">
                  <FaUserGraduate className="me-2" /> Lifetime Validity
                </div>
                <div className="feature-box bg-info text-dark mb-2">
                  <FaCheckCircle className="me-2" /> Portfolio Enhancement
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Certificate Info */}
          <div className="col-md-6 ps-md-5">
            <span className="badge bg-danger mb-3">📜 Certification</span>
            <h2 className="fw-bold text-dark">
              Get Your{" "}
              <span className="text-gradient">Industry Recognized</span>{" "}
              Certificate
            </h2>
            <p className="mt-3 text-secondary">
              Upon successful completion of our <strong>DevOps</strong> program
              at <strong>TechLynx</strong>.
            </p>
            <ul className="list-unstyled mt-3 text-dark">
              <li>
                <FaCheckCircle className="text-success me-2" /> Official
                certification from TechLynx
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Industry
                recognized validation of skills
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Boosts your
                career prospects
              </li>
              <li>
                <FaCheckCircle className="text-success me-2" /> Lifetime
                validity of certification
              </li>
            </ul>
            <button className="btn btn-warning btn-lg mt-4 text-dark">
              🚀 Start Your Journey with TechLynx
            </button>
          </div>
        </div>
      </section>
      {/* ================= FAQ + SUBSCRIBE ================= */}
      <section className="faq-section container py-5">
        <div className="row g-4 align-items-start">
          <div className="col-lg-7 ">
            <h2 className="fw-bold mb-4">❓ Frequently Asked Questions</h2>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div className="accordion-item mb-2" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        openIndex === index ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={() => toggleFaq(index)}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  {openIndex === index && (
                    <div className="accordion-collapse show">
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-5 d-flex align-items-center justify-content-center">
            <div className="subscribe-card p-4 shadow rounded w-100">
              <h4 className="fw-bold mb-3">📩 Stay Updated</h4>
              <p className="text-muted small">
                Subscribe to get the latest updates, new courses, and career
                tips.
              </p>

              <form onSubmit={handleSubscribeSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Subscribe Now 🚀
                </button>

                {/* Thank you message inside form */}
                {subscribeSubmitted && (
                  <div className="alert alert-success mt-3 text-center p-2">
                    🎉 Thank you for subscribing!
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ================= COURSE FEES ================= */}
      <section className="course-fees-container container my-5 p-4 shadow rounded bg-color">
        <h2 className="text-center fw-bold mb-3">Course fees</h2>
        <p className="course-fee text-center fw-boldfw-bold">
          💰 The course fee is <span className="highlight">₹39,999</span> + GST
        </p>
        <hr />
        <h5 className="text-center fw-semibold mb-4">Invest in your career</h5>
        <div className="row text-start">
          <div className="col-md-6 mb-3 d-flex align-items-start">
            <span className="check-icon">✔</span>
            <p className="mb-0">
              Lead AI innovation by mastering core AI & ML concepts &
              technologies.
            </p>
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-start">
            <span className="check-icon">✔</span>
            <p className="mb-0">
              Upgrade your career by learning AI/ML tools and techniques from
              the ground up.
            </p>
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-start">
            <span className="check-icon">✔</span>
            <p className="mb-0">
              Learn with a leading curriculum designed for professionals &
              beginners alike.
            </p>
          </div>
          <div className="col-md-6 mb-3 d-flex align-items-start">
            <span className="check-icon">✔</span>
            <p className="mb-0">
              Get expert mentorship and real-world projects for hands-on
              experience.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer py-4">
        <div className="container text-center">
          <div className="footer-links mb-2">
            <a href="#">Terms & Conditions</a> |<a href="#">Privacy Policy</a> |
            <a href="#">Refund/Cancellation Policy</a> |
            <a href="#">Terms of Use</a>
          </div>
          <p className="footer-copy mb-3">
            © Techlynx Inovations Pvt. Ltd. All Rights Reserved{" "}
          </p>
          <div className="footer-icons d-flex justify-content-center gap-4">
            <a
              href="https://www.facebook.com/people/Techlynx-Innovations/61579158831359/"
              className="facebook"
            >
              <FaFacebookF />
            </a>
            <a href="https://x.com/TechlynxLimited" className="twitter">
              <FaXTwitter />
            </a>
            <a
              href="https://www.youtube.com/@techlynxinnovationsprivatelimi"
              className="youtube"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/"
              className="linkedin"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://www.instagram.com/techlynxinnovations/"
              className="instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Devops;
