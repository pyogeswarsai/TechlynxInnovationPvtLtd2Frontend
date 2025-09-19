import React from "react";
import "./Header.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';
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
          <div className="col-lg-3 mb-4 text-center text-lg-start ">
            <h3 className="fw-bold text-white">
              <span className="text-primary">Techlynx</span>
            </h3>
            <h4 className="h5 text-white">Innovations Pvt. Ltd</h4>
            <p className="text-white-50 mt-3">
              Leading Training, Placement for Technology & Innovation.
              Empowering students with cutting-edge skills for tomorrow's
              digital world.
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start gap-2">
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
            <h5 className="fw-semibold text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                { icon: "🏠", label: "Home", path: "/" },
                { icon: "📚", label: "Courses", path: "/courses" },
                { icon: "👨‍🏫", label: "Instructors", path: "/contact-us/instructors" },
                { icon: "📰", label: "Training", path: "/training" },
                { icon: "💼", label: "Hire Talent", path: "/hire-talent" },
                { icon: "📞", label: "Contact", path: "/contact-us" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path}
                    className="text-white text-decoration-none d-flex align-items-center my-1"
                  >
                    <span className="me-2">{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Courses */}
          <div className="col-lg-3 mb-4 col-lg-3 mb-4 text-center justify-content-center text-lg-start">
            <h5 className="fw-semibold text-white mb-3">Popular Courses</h5>
            <ul className="list-unstyled">
              {[
                { icon: "🐍", label: "Python Full Stack", path: "/courses/python-full-stack" },
                { icon: "☕", label: "Java Full Stack", path: "/courses/java-full-stack" },
                { icon: "🔷", label: ".Net Full Stack", path: "/courses/net-full-stack" },
                { icon: "📊", label: "Data Science", path: "/courses/datascience" },
                { icon: "📱", label: "Backend Development", path: "/courses/backend-development" },
                { icon: "⚛️", label: "Web Development", path: "/courses/web-development" },
                { icon: "🤖", label: "Artificial Intelligence", path: "/courses/artificial-intelligence" },
                { icon: "💼", label: "Business Analyst & Intelligence", path: "/courses/business-analyst-intelligence" },
                { icon: "🔒", label: "Cybersecurity", path: "/courses/cybersecurity" },
                { icon: "📈", label: "Digital Marketing", path: "/courses/digital-marketing" },
                { icon: "⛓️", label: "Blockchain", path: "/courses/blockchain-integration" },
                { icon: "🔧", label: "DevOps Engineering", path: "/courses/devops-engineering" },
                { icon: "📋", label: "View All Courses", path: "/courses" },
              ].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-white text-decoration-none d-flex  align-items-center my-1"
                  >
                    <span className="me-2">{item.icon}</span> {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-lg-3 mb-4 col-lg-3 mb-4 text-center text-lg-start">
            <h5 className="fw-semibold text-white mb-3">Contact Information</h5>
            <p className="text-white">
              📍 33-6-73 Arundelpet 19/3,
              <br />
              Opp Rabindranath Tagore, Brodipet,
              <br />
              Guntur, Andhra Pradesh, India, 522002.
            </p>
            <p>
              <a
                href="tel:+919989681812"
                className="text-white text-decoration-none"
              >
                📞 +91-9989681812 , +91-9542982674
              </a>
            </p>
            <p>
              <a
                href="mailto:info@techlynxinnovations.com"
                className="text-white text-decoration-none"
              >
                ✉️ info@techlynxinnovations.com
              </a>
            </p>
            <p>
              <a href="#" className="text-white text-decoration-none">
                🌐 www.techlynxinnovations.com
              </a>
            </p>

            <h6 className="text-white mt-4">Business Hours</h6>
            <p className="text-white small">
              Mon - Fri: 9:00 AM - 6:00 PM
              <br />
              Sat: 10:00 AM - 4:00 PM
              <br />
              Sun: Closed
            </p>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-top border-secondary pt-4 mb-4 text-center">
          <h5 className="text-white mb-3">Stay Updated with Our Latest News</h5>
          <p class="text-white-50 mt-3 mb-6">
            Subscribe to our newsletter and get updates about new courses,
            events, and industry insights.
          </p>
          <form
            className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-2"
            onSubmit={(e) => {
              e.preventDefault(); // prevent page reload
              window.location.href =
                "https://www.youtube.com/@techlynxinnovationsprivatelimi";
            }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="form-control w-auto w-sm-auto"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>

        {/* Certifications & Partnerships */}
        <div className="mt-5">
          <h5 className="text-white text-center mb-3">
            Certifications & Partnerships
          </h5>
          <div className="text-white-70 d-flex flex-wrap justify-content-center gap-4 text-white">
            <div>🏆 ISO 9001:2015 Certified</div>
            <div>🤝 Industry Partners</div>
            <div>🎓 Accredited Programs</div>
            <div>⭐ 4.8/5 Student Rating</div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=" mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center">
          <small className="text-white">
            &copy; 2025 Techlynx Innovations Pvt. Ltd. All rights reserved.
          </small>
          <div>
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
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="btn btn-info position-fixed"
          style={{
            bottom: "20px",
            right: "20px",
            height: "50px",
            borderRadius: "100%",
          }}
        >
          ⬆️
        </button>
      </div>
    </footer>
  );
};

export default Footer;
