import { useState, useRef } from "react";
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
    name: "Horovod",
    img: "https://raw.githubusercontent.com/horovod/horovod/master/docs/_static/logo.png",
    desc: "Horovod is a distributed deep learning training \nframework by Uber. It helps scale training across multiple\n GPUs and machines efficiently.",
  },
  {
    name: "Weights & Biases (W&B)",
    img: "https://wandb.ai/logo.png",
    desc: "W&B is a powerful experiment tracking and \nvisualization tool. It helps monitor model performance,\n hyperparameters, and datasets during training.",
  },
  {
    name: "Pandas",
    img: "https://cdn.iconscout.com/icon/free/png-512/free-pandas-3629950-3030481.png",
    desc: "Pandas is used for data manipulation and analysis.\n It helps preprocess datasets, handle missing values,\nand prepare structured data for training models.",
  },
  {
    name: "Matplotlib & Seaborn",
    img: "https://matplotlib.org/stable/_static/logo_dark.svg",
    desc: "Matplotlib and Seaborn are Python libraries for data visualization.\n They help in understanding datasets, plotting graphs, and\n analyzing model performance visually.",
  },
  {
    name: "TensorFlow",
    img: "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    desc: "TensorFlow is an open-source deep learning framework by Google.\n It enables building, training, and deploying large-scale neural networks.",
  },
  {
    name: "Keras",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    desc: "Keras is a high-level API built on TensorFlow.\n It simplifies the creation of neural networks with\n easy-to-use layers and model-building workflows.",
  },
  {
    name: "PyTorch",
    img: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    desc: "PyTorch is a deep learning framework by Facebook.\n It is widely used in research and production for\n its dynamic computation graphs and flexibility.",
  },
  {
    name: "Scikit-learn",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    desc: "Scikit-learn provides machine learning algorithms\n like classification, regression, and clustering,\n and is often used for preprocessing before deep learning.",
  },
  {
    name: "OpenCV",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/32/OpenCV_Logo_with_text_svg_version.svg",
    desc: "OpenCV is an open-source library for computer vision.\n It is used with deep learning models for image\n processing, recognition, and real-time applications.",
  },
  {
    name: "Google Colab & Jupyter",
    img: "https://colab.research.google.com/img/colab_favicon_256px.png",
    desc: "Google Colab and Jupyter notebooks provide an\n interactive environment to write, train, and run\n deep learning models with GPU/TPU acceleration.",
  },
];

// ---------------- FAQ ----------------
const faqs = [
  {
    question: "What is a Deep Learning course?",
    answer:
      "This course trains you in the fundamentals and advanced topics of deep learning, including neural networks, CNNs, RNNs, transformers, and deployment of AI models.",
  },
  {
    question: "Do I need prior programming or ML knowledge?",
    answer:
      "Basic Python and mathematics (linear algebra, probability, calculus) are helpful but not mandatory. The course starts with ML and Python libraries before diving into deep learning.",
  },
  {
    question: "What technologies will I learn?",
    answer:
      "You will learn Python, NumPy, Pandas, TensorFlow, Keras, PyTorch, Scikit-learn, OpenCV, and cloud-based platforms like Google Colab for training models.",
  },
  {
    question: "What projects will I build during the course?",
    answer:
      "You’ll build projects such as image classification with CNNs, sentiment analysis with RNNs, object detection, facial recognition, and generative AI models (GANs).",
  },
  {
    question: "What career opportunities are available after this course?",
    answer:
      "You can work as a Deep Learning Engineer, Machine Learning Engineer, AI Engineer, Data Scientist, or Computer Vision Specialist in IT and research industries.",
  },
  {
    question: "Will I receive a certificate after completion?",
    answer:
      "Yes, upon successful completion, you’ll receive an industry-recognized certificate validating your deep learning skills and project experience.",
  },
  {
    question: "Does the course include placement assistance?",
    answer:
      "Yes, many programs include career guidance, resume building, interview prep, and job referrals in AI and data science roles.",
  },
];

function DeepLearning() {
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
      title: "Module 1: Python & Math Foundations",
      details:
        "Learn Python programming essentials and refresh core mathematics: linear algebra, probability, statistics, and calculus for deep learning.",
    },
    {
      title: "Module 2: Data Handling & Preprocessing",
      details:
        "Work with NumPy, Pandas, and data visualization tools (Matplotlib/Seaborn). Learn data cleaning, feature scaling, normalization, and dataset preparation.",
    },
    {
      title: "Module 3: Machine Learning Basics",
      details:
        "Understand ML concepts: supervised vs unsupervised learning, regression, classification, clustering, and evaluation metrics using Scikit-learn.",
    },
    {
      title: "Module 4: Neural Networks Fundamentals",
      details:
        "Learn perceptrons, activation functions, forward & backward propagation, gradient descent, and implement basic neural networks from scratch.",
    },
    {
      title: "Module 5: Deep Learning with TensorFlow & Keras",
      details:
        "Build and train deep neural networks, use Keras APIs, optimize models with optimizers, regularization, and dropout techniques.",
    },
    {
      title: "Module 6: Convolutional Neural Networks (CNNs)",
      details:
        "Explore CNN architectures for image classification, object detection, and computer vision tasks with TensorFlow and PyTorch.",
    },
    {
      title: "Module 7: Recurrent Neural Networks (RNNs) & NLP",
      details:
        "Understand sequential models (RNN, LSTM, GRU), and apply them in natural language processing tasks like sentiment analysis and text generation.",
    },
    {
      title: "Module 8: Advanced Architectures",
      details:
        "Learn about transfer learning, transformers, attention mechanisms, BERT, and GPT models for advanced NLP and vision tasks.",
    },
    {
      title: "Module 9: Generative Models (GANs)",
      details:
        "Build and train Generative Adversarial Networks to generate synthetic images, enhance data, and explore creative AI applications.",
    },
    {
      title: "Module 10: Model Deployment & Optimization",
      details:
        "Deploy deep learning models using TensorFlow Serving, Flask/FastAPI, and cloud platforms. Optimize models with quantization and pruning.",
    },
    {
      title: "Module 11: Final Projects & Career Preparation",
      details:
        "Work on real-world AI projects: image classifier, chatbot, recommendation system, GAN-based generator. Prepare resumes, portfolios, and practice interviews.",
    },
  ];

  return (
    <div>
      <div>
        {/* ================= HERO ================= */}
        <div className="hero-section d-flex flex-column justify-content-center align-items-center text-center text-white">
          <h3 className="fw-bold display-5">
            Advanced Certification in Deep Learning
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
                      Deep Learning
                    </li>
                  </ol>
                </nav>
              </div>
              <h2 className="fw-bold">
                Advanced Certification in Deep Learning
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
                  <FaCheckCircle className="text-success me-2" /> In Guntur
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
                src="https://cdn.shopaccino.com/igmguru/articles/deep-learning.jpg?v=532"
                alt="Deep Learning"
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
            Deep Learning
          </span>{" "}
          <span className="fw-semibold">Tools Covered</span>
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
                🚀 Deep Learning Roadmap
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
                Deep Learning
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
              <strong>Deep Learning</strong> program at{" "}
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
              </button>
            </Link>
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
          💰 The course fee is <span className="highlight">₹99,999</span> + GST
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

export default DeepLearning;
