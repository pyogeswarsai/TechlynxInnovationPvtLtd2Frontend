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
    name: "Introduction to Flutter",
    img: "https://storage.googleapis.com/cms-storage-bucket/6a07d8a62f4308d2b854.svg",
    desc: "Get started with Flutter, understand what it is, how it works, \ninstallation (Flutter SDK, Android Studio/VS Code), and run your first Flutter app.",
  },
  {
    name: "Dart Programming Basics",
    img: "https://everyday.codes/wp-content/uploads/2019/11/0-nsbIYn7PGj9YK3dB.png",
    desc: "Learn the Dart language fundamentals including variables, data types, \noperators, control statements, and functions for Flutter development.",
  },
  {
    name: "Widgets in Flutter",
    img: "https://www.getwidget.dev/blog/wp-content/uploads/2024/11/What-is-Widget-in-Flutter.png",
    desc: "Understand Flutter’s widget-based architecture. Explore stateless \nand stateful widgets, layout widgets, and widget lifecycle.",
  },
  {
    name: "Layouts & Navigation",
    img: "https://miro.medium.com/v2/resize:fit:1200/1*QGK--2kAJnL3lNqhNB8l_A.png",
    desc: "Build responsive UIs using Rows, Columns, Stacks, and Containers. \nLearn navigation between screens using Navigator and routes.",
  },
  {
    name: "State Management",
    img: "https://images.ctfassets.net/re4tgdv4swq5/5oLeoG4u73tXxJENntRRti/622086d13b8dc070908234bf9e8354d7/State_Management__in_Flutter.png",
    desc: "Master different state management techniques like setState, \nProvider, Riverpod, and Bloc for managing app state efficiently.",
  },
  {
    name: "Forms & User Input",
    img: "https://i.ytimg.com/vi/nFSL-CqwRDo/maxresdefault.jpg",
    desc: "Work with forms, text fields, validation, and input handling. \nLearn how to capture and process user input effectively.",
  },
  {
    name: "Networking & APIs",
    img: "https://i.ytimg.com/vi/5CqO9Ie0A6o/maxresdefault.jpg",
    desc: "Connect Flutter apps to RESTful APIs. Fetch and send data using \nHTTP, Dio, and JSON serialization.",
  },
  {
    name: "Database & Local Storage",
    img: "https://www.datocms-assets.com/48294/1726578015-local-storage.webp?auto=format",
    desc: "Integrate local storage solutions like SharedPreferences, SQLite, \nand NoSQL databases like Hive for offline functionality.",
  },
  {
    name: "Animations & UI Enhancements",
    img: "https://miro.medium.com/v2/0*3gfofc4RSKXpHA5a.png",
    desc: "Add smooth animations, transitions, and custom UI effects \nto make apps interactive and visually appealing.",
  },
  {
    name: "Deployment & Best Practices",
    img: "https://cdn.quokkalabs.com/blog/object/20230609112113_aa51a99ecbeb4489a7762cd19f764e69.webp",
    desc: "Learn how to test and debug Flutter apps, generate APKs/IPAs, \ndeploy on Google Play Store & Apple App Store, and follow best practices.",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a Flutter Development course?",
    answer:
      "This course trains you in Flutter app development, from basics of Dart programming to advanced topics like state management, APIs, local storage, and deployment.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "Basic programming knowledge is helpful, but not mandatory. Flutter and Dart are beginner-friendly and suitable for both new and experienced developers.",
  },
  {
    question: "What topics will I learn?",
    answer:
      "You will learn Flutter fundamentals, Dart basics, widgets, layouts, navigation, state management, forms, APIs, databases, animations, and deployment.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll build projects like a To-Do app, Weather app, Chat app, E-commerce app, and Portfolio app to gain practical Flutter development skills.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Flutter Developer, Mobile App Developer, Full-Stack Mobile Engineer, or contribute to cross-platform app development projects.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate validating your Flutter development skills, which can be shared with employers or on LinkedIn.",
  },
  {
    question: "Does the course include guidance for job preparation?",
    answer:
      "Yes, the course includes coding challenges, interview preparation, resume guidance, and career insights for Flutter and mobile development roles.",
  },
];

function Flutter() {
  
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
  };const steps = [
  {
    title: "Module 1: Introduction to Flutter",
    details:
      "Learn the basics of Flutter, installation (Flutter SDK, Android Studio/VS Code), and setting up emulators. Run your first Flutter app and understand the Flutter architecture.",
  },
  {
    title: "Module 2: Dart Programming Fundamentals",
    details:
      "Understand the Dart language basics: variables, data types, operators, control flow, functions, and object-oriented concepts.",
  },
  {
    title: "Module 3: Flutter Widgets",
    details:
      "Explore Flutter’s widget tree. Learn about stateless and stateful widgets, common UI widgets, and how to build responsive interfaces.",
  },
  {
    title: "Module 4: Layouts & Navigation",
    details:
      "Work with layout widgets like Row, Column, Stack, and Container. Learn navigation between screens using Navigator and named routes.",
  },
  {
    title: "Module 5: State Management",
    details:
      "Master different approaches to state management in Flutter: setState, Provider, Riverpod, and Bloc. Learn when to use each method effectively.",
  },
  {
    title: "Module 6: Forms & User Input",
    details:
      "Build forms with TextFields, dropdowns, and checkboxes. Implement validation, input handling, and form submission.",
  },
  {
    title: "Module 7: Networking & APIs",
    details:
      "Connect Flutter apps to REST APIs using HTTP and Dio packages. Learn JSON parsing, error handling, and displaying dynamic data.",
  },
  {
    title: "Module 8: Database & Local Storage",
    details:
      "Work with local storage using SharedPreferences, Hive, and SQLite. Manage persistent data for offline-first applications.",
  },
  {
    title: "Module 9: Authentication & Security",
    details:
      "Implement authentication with Firebase Auth or custom APIs. Learn about JWT, Google sign-in, password hashing, and securing Flutter apps.",
  },
  {
    title: "Module 10: Animations & Advanced UI",
    details:
      "Add animations and transitions using AnimatedBuilder, Hero animations, and Lottie. Enhance user experience with smooth, interactive UIs.",
  },
  {
    title: "Module 11: Deployment & Performance Optimization",
    details:
      "Deploy Flutter apps to the Google Play Store and Apple App Store. Learn performance optimization, debugging tools, and best practices.",
  },
  {
    title: "Module 12: Final Projects & Career Preparation",
    details:
      "Build real-world projects like a To-Do App, Weather App, or E-commerce App. Prepare for Flutter developer roles with coding challenges, interview prep, and portfolio building.",
  },
];

  return (
    <div>
      <div>
        {/* ================= HERO ================= */}
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h3 className="fw-bold display-5">
            Advanced Certification in Flutter
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
                   Flutter
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
                src="https://www.daily.co/blog/content/images/2023/07/Flutter-feature.png"
                alt="Flutter"
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
          Flutter
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
                🚀 Flutter Roadmap
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
             Flutter
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
          💰 The course fee is <span className="highlight">₹14,999</span> + GST
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

export default Flutter;
