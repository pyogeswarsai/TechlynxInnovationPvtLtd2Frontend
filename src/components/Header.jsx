import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [activeBadge, setActiveBadge] = useState("");

  const handleBadgeClick = (badge) => {
    setActiveBadge(badge);
    alert(`You clicked on: ${badge}`);
  };

  return (
    <header className="gradient-bg text-white position-relative overflow-hidden py-5">
      {/* Floating Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden pointer-events-none">
        <div
          className="floating-circle d1 opacity-10 rounded-circle"
          style={{
            top: "5rem",
            left: "2.5rem",
            width: "8rem",
            height: "8rem",
            animationDelay: "0s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-25 rounded-circle"
          style={{
            top: "10rem",
            right: "5rem",
            width: "6rem",
            height: "6rem",
            animationDelay: "-2s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-25 rounded-circle"
          style={{
            bottom: "8rem",
            left: "25%",
            width: "10rem",
            height: "10rem",
            animationDelay: "-4s",
          }}
        ></div>
      </div>

      <div className="container position-relative text-center py-3">
        <h1 className="display-2 fw-bold">
          <span className="text-gradient">Techlynx</span>
          <br />
          Innovations
        </h1>
        <p className="lead text-white-100 mb-4">
          Leading Training & Placement for Technology & Innovation
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <a
            href=""
            className="btn border fw-bold border-white rounded-pill mb-2  px-4 py-2 cursor-pointer me-2"
          >
            🚀 Advanced Courses
          </a>

          <Link
            to="/contact-us/instructors"
            className="btn border fw-bold border-white rounded-pill mb-2 px-4 py-2 cursor-pointer "
          >
            👨‍💻 Expert Instructors
          </Link>

          {/* <Link
            to=""
            className="btn border fw-bold border-white rounded-pill  px-4 py-2 cursor-pointer mt-2"
          >
            🎓 Industry Certification
          </Link> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
