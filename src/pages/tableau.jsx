import { useState,useRef } from "react";
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
import { Link } from "react-router-dom";const tools = [
  {
    name: "Introduction to Tableau",
    img: "https://miro.medium.com/v2/resize:fit:1400/0*UcvDXUMq8onpVRZO.png",
    desc: "Get started with Tableau, learn what it is, installation, \nand setting up your first Tableau workbook.",
  },
  {
    name: "Connecting to Data",
    img: "https://i.ytimg.com/vi/LI15e-H-wXg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDEKWtVWUX0-Q5IQNJMkfe9FrRZMQ",
    desc: "Learn to connect Tableau to different data sources including Excel, SQL, and cloud databases.",
  },
  {
    name: "Data Preparation & Cleaning",
    img: "https://cdn.mindmajix.com/courses/tableau-prep-training.png",
    desc: "Understand how to clean, transform, and prepare data for analysis using Tableau Prep and built-in tools.",
  },
  {
    name: "Visualization Basics",
    img: "https://www.brandingmag.com/wp-content/uploads/2020/05/image1_Venngage.png",
    desc: "Learn to create charts, graphs, maps, and dashboards using Tableau’s drag-and-drop interface.",
  },
  {
    name: "Calculated Fields & Aggregations",
    img: "https://i.ytimg.com/vi/1r9T586WEQQ/maxresdefault.jpg",
    desc: "Master calculated fields, aggregations, and basic table calculations to derive insights from your data.",
  },
  {
    name: "Filters, Parameters & Actions",
    img: "https://ik.imagekit.io/upgrad1/abroad-images/imageCompo/images/Types_of_tableau_filtersCB0FRM.png?pr-true",
    desc: "Implement filters, parameters, and dashboard actions to make your visualizations interactive.",
  },
  {
    name: "Advanced Analytics & LOD Expressions",
    img: "https://towardsdatascience.com/wp-content/uploads/2023/12/1jaEq8qTkbdu-TDon4VGpsQ.png",
    desc: "Use Level of Detail (LOD) expressions, forecasting, and trend analysis for advanced data insights.",
  },
  {
    name: "Dashboards & Storytelling",
    img: "https://www.tableau.com/sites/default/files/800x447_dashboard_sheet.png",
    desc: "Combine multiple visualizations into interactive dashboards and tell data-driven stories.",
  },
  {
    name: "Tableau Server & Online",
    img: "https://rms.koenig-solutions.com/Sync_data/CCE_Logo/2953-awscli(9)(1).pngL.jpg",
    desc: "Learn how to publish dashboards to Tableau Server or Tableau Online and manage permissions and data refreshes.",
  },
  {
    name: "Best Practices & Optimization",
    img: "https://www.yash.com/wp-content/uploads/2017/07/Tableau-Performance-Optimization-content-banner.png",
    desc: "Optimize performance, follow visualization best practices, and maintain data governance.",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a Tableau course?",
    answer:
      "This course trains you in Tableau from basics to advanced concepts including data connection, preparation, visualization, dashboards, LOD expressions, and Tableau Server.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "No programming experience is required. Basic understanding of data concepts is helpful but not mandatory.",
  },
  {
    question: "What topics will I learn?",
    answer:
      "You will learn data connection, preparation, visualization basics, calculated fields, aggregations, filters, parameters, actions, advanced analytics, dashboards, and Tableau Server deployment.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll work on projects like sales dashboards, KPI trackers, customer analytics dashboards, and interactive business intelligence reports.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Tableau Developer, Data Analyst, Business Intelligence Analyst, or Data Visualization Specialist.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate validating your Tableau skills, which can be shared with employers or on LinkedIn.",
  },
  {
    question: "Does the course include guidance for job preparation?",
    answer:
      "Yes, many programs provide guidance including Tableau project experience, interview prep, resume building, and career advice for Tableau-related roles.",
  },
];

function Tableau() {
  
  const [submitted, setSubmitted] = useState(false);
  const [openIndex, setOpenIndex] = useState(null);
  const certificateRef = useRef(null); 
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
   const scrollToCertificate = () => {
    certificateRef.current?.scrollIntoView({ behavior: "smooth" });
  }; const steps = [
  {
    title: "Module 1: Introduction to Tableau",
    details:
      "Learn what Tableau is, its key features, editions, and interface. Understand the importance of data visualization and how Tableau can help in business intelligence.",
  },
  {
    title: "Module 2: Connecting to Data",
    details:
      "Connect Tableau to different data sources like Excel, CSV, SQL databases, and cloud services. Learn about data types, data preparation, and blending data.",
  },
  {
    title: "Module 3: Basic Visualizations",
    details:
      "Create bar charts, line charts, pie charts, scatter plots, and highlight tables. Learn about Tableau’s Show Me feature and basic formatting options.",
  },
  {
    title: "Module 4: Calculations & Fields",
    details:
      "Understand calculated fields, table calculations, and basic formulas. Learn to use measures, dimensions, and aggregation functions effectively.",
  },
  {
    title: "Module 5: Advanced Visualizations",
    details:
      "Build maps, dual-axis charts, heatmaps, bullet charts, and Gantt charts. Learn advanced formatting, labels, and tooltips customization.",
  },
  {
    title: "Module 6: Dashboards & Stories",
    details:
      "Create interactive dashboards by combining multiple visualizations. Learn dashboard actions, filters, and best practices for storytelling with data.",
  },
  {
    title: "Module 7: Filters, Parameters & Sets",
    details:
      "Use filters, parameters, and sets to make visualizations dynamic. Learn about context filters, cascading filters, and dynamic dashboards.",
  },
  {
    title: "Module 8: Data Modeling & Joins",
    details:
      "Understand joins, unions, and data blending. Learn about relationships in Tableau and best practices for combining multiple tables efficiently.",
  },
  {
    title: "Module 9: Analytics & Forecasting",
    details:
      "Use built-in analytics features like trend lines, forecasting, reference lines, and clustering. Learn how to derive actionable insights from data.",
  },
  {
    title: "Module 10: Tableau Prep & Data Cleaning",
    details:
      "Learn Tableau Prep for cleaning, shaping, and preparing data. Understand joins, pivots, aggregations, and workflow automation for analysis-ready data.",
  },
  {
    title: "Module 11: Tableau Server & Online",
    details:
      "Publish dashboards to Tableau Server or Tableau Online. Learn user permissions, scheduling extracts, sharing reports, and collaborating with teams.",
  },
  {
    title: "Module 12: Real-World Projects & Career Prep",
    details:
      "Work on real-world Tableau projects like Sales Analysis, Marketing Dashboards, and KPI tracking. Prepare for Tableau certification and job interviews with practical examples.",
  },
];

  return (
    <div>
      <div>
        {/* ================= HERO ================= */}
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h3 className="fw-bold display-5">
            Advanced Certification in Tableau
          </h3>
          <p className="fs-5 mt-2">
            Have a look at all of the most popular courses here!
          </p>
        </div>
        {/* ================= Content ================= */}
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
                    Tableau
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="fw-bold">
                Advanced Certification in Tableau
              </h2>
              <p>Ranked #1 Full Stack Training Institute with Placement.</p>
              <p>
                Techlynx provides the Best Full Stack Training in Guntur &
                Online with<strong> 100% placements.</strong>
                Learn Full Stack Course from Basics to Advanced and get
                real-time experience.
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
                  <FaCheckCircle className="text-success me-2" />  In Guntur
                </li>
              </ul>
              <div className="d-flex gap-3 mt-4">
                <Link to="/enroll">
                  <button className="btn btn-warning fw-bold">
                    Enroll Now <FaArrowRight className="ms-2" />
                  </button>
                </Link>
                <button
                  className="btn btn-primary fw-bold"
                  onClick={scrollToCertificate}
                >
                  View Certificate <FaUserClock className="ms-2" />
                </button>
              </div>
            </div>
            {/* Right */}
            <div className="col-md-6 text-center">
              <img
                src="https://www.devacetech.com/wp-content/uploads/2024/11/what-is-tableau.webp"
                alt="Tableau"
                className="img-fluid rounded shadow"
              />
              <div className="d-flex justify-content-around mt-3">
                <div>
                  <FaStar className="text-warning" /> <strong>4.9</strong>{" "}
                  Ratings
                </div>
                <div>
                  <FaUsers className="text-success" /> <strong>7.6k</strong>{" "}
                  Learners
                </div>
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
              <h5>Branch</h5>
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
          <span className="text-primary fw-bold">
          Tableau
          </span>{" "}
          <span className="fw-semibold">Topics Covered</span>
        </h2>

        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-4">
          {tools.map((tool, index) => (
            <div className="col" key={index}>
              <div className="tool-card shadow-sm h-100 d-flex flex-column align-items-center justify-content-center p-3">
                {/* Image with tooltip */}
                <img
                  src={tool.img}
                  alt={tool.name}
                  className="tool-logo mb-3"
                  title={tool.desc} // 👈 Tooltip will appear on hover
                />
                {/* Name with tooltip */}
                <h6 className="fw-semibold" title={tool.desc}>
                  {tool.name}
                </h6>
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
                🚀 Tableau Roadmap
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
      <section
        ref={certificateRef}
        className="certificate-section container py-5"
      >
        <div className="row align-items-center justify-content-center">
          {/* Left Side - Certificate Card */}
          <div className="col-md-6 mb-4">
            <div className="certificate-card p-4 rounded shadow-lg">
              <span className="badge bg-warning text-dark mb-3 ">
                🎓 Techlynx Official Certificate
              </span>
              <div className="text-center">
                <img
                  src="/certificate.jpg"
                  alt="Certificate"
                  className="img-fluid rounded certificate-img"
                />
              </div>
              <h5 className="mt-4 text-success fw-bold">
              Tableau
              </h5>
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
              <strong>Tableau</strong> program at{" "}
              <strong>Techlynx</strong>.
            </p>
            <ul className="list-unstyled mt-3 text-dark">
              <li>
                <FaCheckCircle className="text-success me-2" /> Official
                certification from Techlynx
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
            <Link to="/enroll">
            <button className="btn btn-warning btn-lg mt-4 text-dark">
              🚀 Start Your Journey with Techlynx
            </button></Link>
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
          💰 The course fee is <span className="highlight">₹24,999</span> + GST
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

export default Tableau;
