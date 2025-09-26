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
    name: "Introduction to Java",
    img: "https://1000logos.net/wp-content/uploads/2020/09/Java-Logo.png",
    desc: "Learn the basics of Java programming, its syntax, \nJDK/JRE setup, and how to write your first Java program.",
  }, 
  {
    name: "Variables and Data Types",
    img: "https://i.stechies.com/userfiles/images/Java-Data-Variable-Type.png",
    desc: "Understand variables in Java, primitive and non-primitive data types,\n and how to store and use values in a program.",
  },
  {
    name: "Operators",
    img: "https://cdn.educba.com/academy/wp-content/uploads/2020/02/Java-Operators.jpg",
    desc: "Learn how to use arithmetic, relational, logical, \nassignment, and bitwise operators in Java applications.",
  },
  {
    name: "Control Statements & Loops",
    img: "https://cdn.educba.com/academy/wp-content/uploads/2020/01/Control-Statement-in-Java.jpg",
    desc: "Explore conditional statements (if-else, switch) and loops \n(for, while, do-while) to control program execution.",
  },
  {
    name: "Methods in Java",
    img: "https://www.besanttechnologies.com/wp-content/uploads/2019/05/java-methods.jpg",
    desc: "Learn how to create reusable methods, pass arguments, \nreturn values, and understand method overloading.",
  },
  {
    name: "Object-Oriented Programming (OOP)",
    img: "https://media.geeksforgeeks.org/wp-content/uploads/20230712121524/Object-Oriented-Programming-(OOPs)-Concept-in-Java.webp",
    desc: "Understand OOP concepts in Java: classes, objects, \nconstructors, inheritance, polymorphism, and encapsulation.",
  },
  {
    name: "Exception Handling",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgmgdgdHy9GpnRHJIAOdFufs_3xCGdK0S7nye0amcm8TYWlpO-yaKsT8sHPNzsUy6sobM&usqp=CAU",
    desc: "Learn how to handle runtime errors in Java using \ntry-catch, finally, throw, and custom exceptions.",
  },
  {
    name: "File Handling",
    img: "https://scaler.com/topics/images/file-handling-in-java-thumbnail.webp",
    desc: "Learn how to read, write, and manipulate files in Java \nusing FileReader, BufferedReader, FileWriter, and Streams.",
  },
  {
    name: "Collections Framework",
    img: "https://miro.medium.com/1*ils7pRJfeTTM8FSSxd7FNA.jpeg",
    desc: "Master the Java Collections Framework including \nArrayList, HashMap, HashSet, LinkedList, and more.",
  },
  {
    name: "JDBC (Java Database Connectivity)",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObDPANIkHXT3XPT4_FRAs_EmGK_IJG2WEMR6b3lxctL3X23VmXNiQCuE1Lctkm_yH3fw&usqp=CAU",
    desc: "Learn how to connect Java with databases (MySQL, Oracle), \nperform CRUD operations, and manage relational data.",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a Java Programming course?",
    answer:
      "This course trains you in Java programming from basics to advanced concepts, including OOP, exception handling, collections, file handling, and database connectivity.",
  },
  {
    question: "Do I need prior programming knowledge?",
    answer:
      "No prior programming experience is required. The course starts with Java fundamentals and gradually advances to more complex topics.",
  },
  {
    question: "What topics will I learn?",
    answer:
      "You will learn Java syntax, variables, data types, operators, control statements, methods, OOP concepts, exception handling, file handling, collections, and JDBC.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll work on practical Java projects such as a student management system, banking application, inventory system, and database-driven apps.",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Java Developer, Backend Developer, Android Developer, Software Engineer, or pursue roles in enterprise application development.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive a certificate validating your Java programming skills, which can be shared with employers or on LinkedIn.",
  },
  {
    question: "Does the course include guidance for job preparation?",
    answer:
      "Yes, many programs provide job preparation guidance including coding challenges, interview prep, resume building, and career advice for Java-related roles.",
  },
];


function JavaCourse() {
  
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
    title: "Module 1: Introduction to Java",
    details:
      "Learn the basics of Java including installation (JDK, IDE setup), syntax, variables, and data types. Write your first Java program and understand the structure of a Java class.",
  },
  {
    title: "Module 2: Operators and Control Flow",
    details:
      "Understand operators in Java, conditional statements (if-else, switch), and loops (for, while, do-while) to control program execution and logic.",
  },
  {
    title: "Module 3: Methods and Packages",
    details:
      "Learn how to create reusable methods, use method overloading, and organize code with packages and access modifiers (public, private, protected).",
  },
  {
    title: "Module 4: Arrays and Strings",
    details:
      "Work with arrays (1D, 2D) and Java Strings. Learn operations, methods from the String class, and the difference between mutable and immutable objects.",
  },
  {
    title: "Module 5: Object-Oriented Programming (OOP)",
    details:
      "Understand Java OOP concepts: classes, objects, constructors, inheritance, polymorphism, encapsulation, and abstraction. Apply OOP principles in projects.",
  },
  {
    title: "Module 6: Exception Handling",
    details:
      "Learn about Java exceptions, error types, and how to handle them using try-catch, finally, throw, and custom exceptions.",
  },
  {
    title: "Module 7: Collections Framework",
    details:
      "Explore Java’s Collections framework: ArrayList, HashMap, HashSet, LinkedList, and learn when and how to use different collection types.",
  },
  {
    title: "Module 8: File Handling & I/O Streams",
    details:
      "Understand Java I/O streams, read/write files, work with serialization, and handle text and binary data effectively.",
  },
  {
    title: "Module 9: Multithreading & Concurrency",
    details:
      "Learn about threads in Java, synchronization, and concurrency utilities to build efficient and responsive applications.",
  },
  {
    title: "Module 10: Database Connectivity (JDBC)",
    details:
      "Connect Java applications with databases using JDBC. Perform CRUD operations, prepared statements, and transaction management.",
  },
  {
    title: "Module 11: Final Projects",
    details:
      "Build real-world Java applications such as a Library Management System, Student Database App, or simple Banking System.",
  },
  {
    title: "Module 12: Career Preparation",
    details:
      "Prepare for Java developer roles with coding practice, interview questions, resume building, and industry insights.",
  },
];

  return (
    <div>
      <div>
        {/* ================= HERO ================= */}
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h3 className="fw-bold display-5">
            Advanced Certification in Java Programming
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
                    Java Programming
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="fw-bold">
                Advanced Certification in Java Programming
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
                  <FaCheckCircle className="text-success me-2" />
                  In Guntur
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
                src="https://www.mytaskpanel.com/wp-content/uploads/2023/04/consulting-blog-09.webp"
                alt="Python Programming"
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
           Java Programming
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
                🚀 Java Programming Roadmap
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
              Java Programming
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
              <strong>Java Programming</strong> program at{" "}
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
          💰 The course fee is <span className="highlight">₹29,999</span> + GST
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

export default JavaCourse;
