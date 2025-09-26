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
import { Link } from "react-router-dom";
const tools = [
  {
    name: "Introduction to Node.js",
    img: "https://nodejs.org/static/images/logo.svg",
    desc: "Get started with Node.js, learn what it is, how it works, \ninstallation, and setting up your first Node.js application.",
  },
  {
    name: "Node.js Modules",
    img: "https://blog.nashtechglobal.com/wp-content/uploads/2024/01/nodemodulesimage-1-2.png",
    desc: "Understand built-in modules (fs, path, http), \ncreating custom modules, and working with NPM packages.",
  },
  {
    name: "File System in Node.js",
    img: "https://iocoding.com/wp-content/uploads/2024/04/Filesystem-Node.js-FS.png",
    desc: "Learn how to read, write, update, and delete files \nusing the File System (fs) module.",
  },
  {
    name: "Asynchronous Programming",
    img: "https://blog.openreplay.com/images/javascript-async-programming-tips-tricks-and-gotchas/images/hero.png",
    desc: "Master callbacks, promises, async/await, and event-driven \nprogramming for handling asynchronous tasks in Node.js.",
  },
  {
    name: "HTTP & Express.js",
    img: "https://media.licdn.com/dms/image/v2/D4D12AQE_2qsa4Ifg5A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1693124616206?e=2147483647&v=beta&t=L1wMoMK4vpYg8zHp8P7YmkI_VxWAd7g8OUxGF_9B3Js",
    desc: "Build web servers and APIs using Node.js HTTP module \nand Express.js framework.",
  },
  {
    name: "Middleware in Express",
    img: "https://i.ytimg.com/vi/iIfkuL3v-b8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAtvht7q4nAwiNM1gMsU4FSqC3kQg",
    desc: "Understand middleware functions, request/response lifecycle, \nerror handling, and creating custom middleware.",
  },
  {
    name: "Databases with Node.js",
    img: "https://miro.medium.com/v2/resize:fit:530/1*1fc2dDk1RywRv6nDw_EE_A.png",
    desc: "Connect Node.js with databases (MongoDB, MySQL), \nperform CRUD operations, and manage data efficiently.",
  },
  {
    name: "Authentication & Security",
    img: "https://www.keysight.com/content/dam/keysight/en/img/prd/network-security/ixia/NetworkSecurityHero.png",
    desc: "Learn about JWT, sessions, cookies, password hashing, \nand securing Node.js applications.",
  },
  {
    name: "Real-time Applications",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaHUQPOA18MK3svxPYpXjb1e-6J-tfbwAz6Q&s",
    desc: "Build chat apps, live notifications, and collaboration tools \nusing WebSockets and Socket.IO.",
  },
  {
    name: "Deployment & Best Practices",
    img: "https://i.ytimg.com/vi/nZ3BaTY8c9M/maxresdefault.jpg",
    desc: "Learn how to deploy Node.js apps on cloud platforms \n(Heroku, AWS, Render) and follow best practices.",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a Node.js Programming course?",
    answer:
      "This course trains you in Node.js, starting from basics to advanced concepts like asynchronous programming, Express.js, databases, authentication, and real-time applications.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "Basic knowledge of JavaScript is recommended since Node.js is built on JavaScript. No backend experience is required.",
  },
  {
    question: "What topics will I learn?",
    answer:
      "You will learn Node.js fundamentals, modules, file system, async programming, HTTP, Express.js, middleware, databases, authentication, WebSockets, and deployment.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll build projects like a RESTful API, chat application, task manager, authentication system, and database-driven apps.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Node.js Developer, Backend Developer, Full-Stack Developer, API Engineer, or Cloud Engineer.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate validating your Node.js programming skills, which can be shared with employers or on LinkedIn.",
  },
  {
    question: "Does the course include guidance for job preparation?",
    answer:
      "Yes, many programs provide job preparation guidance including coding challenges, interview prep, resume building, and career advice for Node.js-related roles.",
  },
];

function Nodejs() {
  
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
  }; 
const steps = [
  {
    title: "Module 1: Introduction to Node.js",
    details:
      "Learn the basics of Node.js, installation (Node.js, NPM), runtime environment, and how Node.js differs from traditional languages. Write your first Node.js program.",
  },
  {
    title: "Module 2: Node.js Core Modules",
    details:
      "Understand built-in modules like fs, path, os, and http. Learn how to import/export modules, work with NPM packages, and create custom modules.",
  },
  {
    title: "Module 3: Asynchronous Programming",
    details:
      "Master asynchronous concepts in Node.js: callbacks, promises, and async/await. Learn the event loop and event-driven architecture.",
  },
  {
    title: "Module 4: File System & Streams",
    details:
      "Work with the File System (fs) module to read, write, update, and delete files. Learn about streams, buffers, and handling large data efficiently.",
  },
  {
    title: "Module 5: HTTP & Express.js",
    details:
      "Build web servers using the HTTP module and Express.js framework. Learn routing, handling requests/responses, and serving static files.",
  },
  {
    title: "Module 6: Middleware & REST APIs",
    details:
      "Understand Express middleware, request/response lifecycle, and error handling. Build RESTful APIs with CRUD operations.",
  },
  {
    title: "Module 7: Databases with Node.js",
    details:
      "Connect Node.js applications with databases like MongoDB and MySQL. Learn how to perform CRUD operations and use ORMs/ODMs like Mongoose or Sequelize.",
  },
  {
    title: "Module 8: Authentication & Security",
    details:
      "Implement authentication using JWT, sessions, and OAuth. Learn about password hashing, cookies, CORS, and securing Node.js applications.",
  },
  {
    title: "Module 9: Real-Time Communication",
    details:
      "Learn to build real-time applications with WebSockets and Socket.IO. Create chat apps, live notifications, and collaborative tools.",
  },
  {
    title: "Module 10: Testing & Debugging",
    details:
      "Write tests using frameworks like Mocha, Jest, or Supertest. Debug Node.js applications and ensure reliability with unit and integration tests.",
  },
  {
    title: "Module 11: Deployment & Scaling",
    details:
      "Deploy Node.js apps on platforms like Heroku, AWS, or Render. Learn about environment variables, process managers (PM2), and scaling applications.",
  },
  {
    title: "Module 12: Final Projects & Career Preparation",
    details:
      "Build real-world projects like an E-commerce API, Task Manager, or Chat Application. Prepare for backend developer roles with coding challenges, interview prep, and resume building.",
  },
];

  return (
    <div>
      <div>
        {/* ================= HERO ================= */}
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h3 className="fw-bold display-5">
            Advanced Certification in Nodejs
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
                    Nodejs
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="fw-bold">
                Advanced Certification in Nodejs
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
                src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
                alt="Nodejs"
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
           Nodejs
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
                🚀 Nodejs Roadmap
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
              Nodejs
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
              <strong>Nodejs</strong> program at{" "}
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
          💰 The course fee is <span className="highlight">₹19,999</span> + GST
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

export default Nodejs;
