import React from "react";
import "./Header.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container py-5">
        {/* Main Footer Content */}
        <div className="row mb-4">
          {/* Company Info */}
          <div className="col-lg-3 mb-4  text-center text-lg-start ">
            <h4 className="fw-bold h4 text-white send">
              Techlynx Innovations Pvt. Ltd
            </h4>
            <p className="text-white-50 fs-5 send mt-3">
              Leading Training, Placement for Technology & Innovation.
              Empowering students with cutting-edge skills for tomorrow's
              digital world.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-2 mb-3">
              <a
                href="https://www.facebook.com/profile.php?id=61579158831359"
                className="btn btn-primary btn-sm rounded-circle"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://x.com/TechlynxLimited"
                className="btn btn-info btn-sm rounded-circle"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/"
                className="btn btn-warning btn-sm rounded-circle"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.youtube.com/@techlynxinnovationsprivatelimi"
                className="btn btn-danger btn-sm rounded-circle"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/techlynxinnovations/"
                className="btn btn-secondary btn-sm rounded-circle"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 mb-4 text-center text-lg-start">
            <h5 className="fw-semibold text-warning mb-3 send">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { icon: "🏠", label: "Home", path: "/" },
                { icon: "📚", label: "Courses", path: "/courses" },
                {
                  icon: "👨‍🏫",
                  label: "Instructors",
                  path: "/contact-us/instructors",
                },
                { icon: "📰", label: "Training", path: "/training" },
                { icon: "💼", label: "Hire Talent", path: "/hire-talent" },
                { icon: "📞", label: "Contact", path: "/contact-us" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white fs-6 text-decoration-none d-flex align-items-center my-1"
                  >
                    <span className="me-2">{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-lg-3 mb-4 col-lg-3 mb-4 text-center justify-content-center text-lg-start">
            <h5 className="fw-semibold text-warning mb-3 send">
              Popular Courses
            </h5>
            <ul className="list-unstyled">
              {[
                {
                  icon: "🐍",
                  label: "Python Full Stack",
                  path: "/courses/python-full-stack",
                },
                {
                  icon: "☕",
                  label: "Java Full Stack",
                  path: "/courses/java-full-stack",
                },
                {
                  icon: "🔷",
                  label: ".Net Full Stack",
                  path: "/courses/net-full-stack",
                },
                {
                  icon: "📊",
                  label: "Data Science",
                  path: "/courses/datascience",
                },
                {
                  icon: "📱",
                  label: "Backend Development",
                  path: "/courses/backend-development",
                },
                {
                  icon: "⚛",
                  label: "Web Development",
                  path: "/courses/web-development",
                },
                {
                  icon: "🤖",
                  label: "Artificial Intelligence",
                  path: "/courses/artificial-intelligence",
                },
                {
                  icon: "💼",
                  label: "Business Analyst & Intelligence",
                  path: "/courses/business-analyst-intelligence",
                },
                {
                  icon: "🔒",
                  label: "Cybersecurity",
                  path: "/courses/cybersecurity",
                },
                {
                  icon: "📈",
                  label: "Digital Marketing",
                  path: "/courses/digital-marketing",
                },
                {
                  icon: "⛓",
                  label: "Blockchain",
                  path: "/courses/blockchain-integration",
                },
                {
                  icon: "🔧",
                  label: "DevOps Engineering",
                  path: "/courses/devops-engineering",
                },
                { icon: "📋", label: "View All Courses", path: "/courses" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white fs-6 text-decoration-none d-flex  align-items-center my-1"
                  >
                    <span className="me-2">{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 mb-4 col-lg-3 mb-4 text-center text-lg-start">
            <h5 className="fw-semibold text-warning mb-3 send">
              Contact Information
            </h5>
            <p className="text-white fs-6">
              📍<span className="fw-bold text-danger">Registered Address:</span>{" "}
              33-6-73 Arundelpet 19/3, Opp Rabindranath Tagore, Brodipet,
              Guntur, Andhra Pradesh, India, 522002.
            </p>
            <p className="text-white fs-6">
              📍
              <span className="fw-bold text-danger">
                Residential Address:
              </span>{" "}
              10/3, near Tagore chowk, Sali Pet, Arundelpet, Guntur, Andhra
              Pradesh 522601
            </p>
            <p>
              <a
                href="tel:+919989681812"
                className="text-white fs-6 text-decoration-none"
              >
                📞 +91-9989681812 , +91-9542982674
              </a>
            </p>
            <p>
              <a
                href="mailto:info@techlynxinnovations.com"
                className="text-decoration-none"
              >
                <h6 className="text-white">✉ info@techlynxinnovations.com </h6>
                <a
                  href="mailto:hr@techlynxinnovations.com"
                  className="text-white fs-6 text-decoration-none"
                >
                  ✉ hr@techlynxinnovations.com{" "}
                </a>
              </a>
            </p>

            <p>
              <a
                href="https://www.techlynxinnovations.com/"
                className="text-white fs-6 text-decoration-none"
              >
                🌐 www.techlynxinnovations.com
              </a>
            </p>

            {/* <h6 className="text-danger mb-2 fw-semibold send">Business Hours</h6>
            <p className="text-white small">
              <span className="text-warning"> Monday - Saturday: </span>9:00 AM - 6:30 PM
            </p> */}
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-top border-secondary pt-4 mb-4 text-center">
          {" "}
          <h5 className="text-warning mb-3 send fs-4">
            Stay Updated with Our Latest News
          </h5>{" "}
          <p class="text-white-50 mt-3 fs-5 mb-6 send">
            {" "}
            Subscribe to our newsletter and get updates about new courses,
            events, and industry insights.{" "}
          </p>{" "}
          <form
            className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.youtube.com/@techlynxinnovationsprivatelimi";
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control w-auto w-sm-auto mt-3"
              required
            />
            <button type="submit" className="btn btn-primary px-4 shadow-sm rounded-3">
              
              {" "}
              Subscribe{" "}
            </button>
          </form>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-5">
          <h5 className="text-warning text-center mb-3 send fs-4">
            Certifications & Partnerships
          </h5>
          <div className="text-white-70 d-flex flex-wrap justify-content-center gap-4 send text-white">
            <div>🏆 IRC Certified</div>
            <div>🤝 Industry Partners</div>
            <div>🎓 Accredited Programs</div>
            <div>⭐ 4.8/5 Student Rating</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=" mt-5 border-top border-secondary d-flex flex-column flex-md-row justify-content-center align-items-center">
          <small className="text-white mt-3">
            &copy; 2025 Techlynx Innovations Pvt. Ltd. All rights reserved.
          </small>
          {/* <div>
            <a href="#" className="text-white  text-decoration-none mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Terms of Service
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Cookie Policy
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Refund Policy
            </a>
            <a href="#" className="text-white text-decoration-none mx-2">
              Sitemap
            </a>
          </div> */}
        </div>

        {/* Back to Top Button */}
        {/* <button
          onClick={scrollToTop}
          className="btn btn-info position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            height: "50px",
            borderRadius: "100%",
          }}
        >
          ⬆
        </button> */}
      </div>
    </footer>
  );
};

export default Footer;