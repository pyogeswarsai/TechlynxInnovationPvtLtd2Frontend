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
    name: "Python",
    img: "https://cdn.iconscout.com/icon/free/png-512/python-2-226051.png",
  },
  {
    name: "HTML",
    img: "https://images.assets-landingi.com/uc/c3aa8c83-aa59-4147-ad10-63ce234b2e3c/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS",
    img: "https://images.assets-landingi.com/uc/51803206-f3bf-420e-8507-911635943599/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "JavaScript",
    img: "https://images.assets-landingi.com/uc/1a0842ed-b090-46dc-af8a-def1fd4f8927/javascript1.svg",
  },
  {
    name: "React",
    img: "https://images.assets-landingi.com/uc/9e03cefd-4c19-4c84-9f35-e8c8807ab66b/Reacticon.svg",
  },
  {
    name: "Scikit-learn",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  },
  {
    name: "Pandas",
    img: "https://pandas.pydata.org/static/img/pandas_mark.svg",
  },
  { name: "NumPy", img: "https://numpy.org/images/logo.svg" },
  { name: "Matplotlib", img: "/matplotlib.png" },
  {
    name: "Git",
    img: "https://images.assets-landingi.com/uc/37b05982-9ab4-4981-83e8-39f043c18937/GitLogo2Color.svg",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is an ML Full-Stack Developer course?",
    answer:
      "This course trains you in Machine Learning development (Python, Scikit-learn, Pandas, NumPy, Matplotlib) and frontend/backend development (HTML, CSS, JavaScript, React), databases, APIs, and deployment skills.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "Basic knowledge of Python or programming is helpful but not required. The course starts with Python fundamentals and ML basics before advancing to full-stack development.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You will learn Python, Scikit-learn, Pandas, NumPy, Matplotlib for ML, HTML, CSS, JavaScript, React for frontend, Flask/Django for backend, MySQL/PostgreSQL, and Git/GitHub for version control.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll build projects like Predictive Analytics Applications, Recommendation Engines, Stock Price Prediction Systems, Customer Segmentation, and Full-Stack ML Web Apps.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Machine Learning Engineer, Data Scientist, ML Full-Stack Developer, AI Developer, or Software Engineer in AI/ML-focused companies.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive an industry-recognized certificate validating your ML and full-stack development skills.",
  },
  {
    question: "Does the course include placement assistance?",
    answer:
      "Yes, many programs include career guidance, resume building, interview preparation, and job referrals through hiring partners.",
  },
];

function Ml() {
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
      title: "Module 1: Python Fundamentals",
      details:
        "Python basics, data types, loops, functions, OOP concepts, exception handling, and problem-solving with mini exercises.",
    },
    {
      title: "Module 2: Front-End Development",
      details:
        "Learn HTML, CSS, JavaScript, responsive design with Bootstrap/Tailwind, and React.js for building interactive UIs.",
    },
    {
      title: "Module 3: Back-End Development",
      details:
        "Master Python with Flask/Django, build RESTful APIs, perform CRUD operations, and follow MVC architecture.",
    },
    {
      title: "Module 4: Databases",
      details:
        "Work with MySQL/PostgreSQL, integrate with backend frameworks, and practice joins, indexing, transactions, and optimization.",
    },
    {
      title: "Module 5: Machine Learning Fundamentals",
      details:
        "Learn data preprocessing, supervised & unsupervised learning, regression, classification, clustering, and model evaluation using Scikit-learn.",
    },
    {
      title: "Module 6: ML Visualization & Analysis",
      details:
        "Work with Pandas, NumPy, and Matplotlib for data manipulation and visualization to derive insights and communicate results.",
    },
    {
      title: "Module 7: Version Control & Collaboration",
      details:
        "Learn Git basics, GitHub workflows, branching, merging, pull requests, and collaborative development practices.",
    },
    {
      title: "Module 8: Deployment & DevOps Basics",
      details:
        "Deploy ML and web applications using Docker, Nginx, AWS/Heroku, and set up CI/CD pipelines with GitHub Actions or Jenkins.",
    },
    {
      title: "Module 9: Career Preparation",
      details:
        "Prepare for ML & full-stack job interviews with DSA, system design basics, mock interviews, resume building, and communication skills.",
    },
  ];
  return (
    <div>
      {/* ================= HERO ================= */}
      <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
        <h3 className="fw-bold display-5">
          Advanced Certification in Machine Learning
        </h3>
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
                    Machine Learning
                  </li>
                </ol>
              </nav>
            </div>
            <h2 className="fw-bold">
              Advanced Certification in Machine Learning
            </h2>
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
              src="/machine.png"
              alt="Machine Learning"
              className="img-fluid rounded shadow"
              style={{ width: "550px", height: "350px" }}
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
          <span className="text-primary fw-bold">Machine Learning Tools</span>{" "}
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
                🚀 Meachine Learning Roadmap
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
              <h5 className="mt-4 text-success fw-bold">Machine Learning</h5>
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
              Upon successful completion of our{" "}
              <strong>Machine Learning</strong> program at{" "}
              <strong>TechLynx</strong>.
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
          💰 The course fee is <span className="highlight">₹79,999</span> + GST
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

export default Ml;
