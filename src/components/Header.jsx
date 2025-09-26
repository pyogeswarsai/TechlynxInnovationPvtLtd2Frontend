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
        {/* Existing Circles */}
        <div
          className="floating-circle d3 opacity-10 rounded-circle"
          style={{
            top: "5rem",
            left: "2.5rem",
            width: "8rem",
            height: "8rem",
            animationDelay: "0s",
          }}
        ></div>

        <div
          className="floating-circle d1 opacity-10 rounded-circle"
          style={{
            top: "25rem",
            left: "2rem",
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

        <div
          className="floating-circle d2 opacity-25 rounded-pill"
          style={{
            bottom: "8rem",
            left: "50%",
            width: "10rem",
            height: "10rem",
            animationDelay: "-4s",
          }}
        ></div>

        {/* 25 More Random Circles */}
        <div
          className="floating-circle d1 opacity-20 rounded-circle"
          style={{
            top: "15rem",
            left: "12rem",
            width: "5rem",
            height: "5rem",
            animationDelay: "-1s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-15 rounded-circle"
          style={{
            top: "30rem",
            left: "18rem",
            width: "7rem",
            height: "7rem",
            animationDelay: "-3s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-20 rounded-circle"
          style={{
            top: "8rem",
            right: "15rem",
            width: "6rem",
            height: "6rem",
            animationDelay: "-2s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-10 rounded-circle"
          style={{
            bottom: "12rem",
            left: "10%",
            width: "9rem",
            height: "9rem",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-25 rounded-circle"
          style={{
            top: "40rem",
            right: "8rem",
            width: "4rem",
            height: "4rem",
            animationDelay: "-6s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-20 rounded-circle"
          style={{
            top: "22rem",
            left: "40%",
            width: "11rem",
            height: "11rem",
            animationDelay: "-7s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-15 rounded-circle"
          style={{
            bottom: "15rem",
            right: "20%",
            width: "5rem",
            height: "5rem",
            animationDelay: "-8s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-10 rounded-circle"
          style={{
            top: "12rem",
            left: "70%",
            width: "6rem",
            height: "6rem",
            animationDelay: "-4s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-20 rounded-circle"
          style={{
            top: "5rem",
            right: "30%",
            width: "7rem",
            height: "7rem",
            animationDelay: "-2s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-15 rounded-circle"
          style={{
            bottom: "10rem",
            left: "35%",
            width: "8rem",
            height: "8rem",
            animationDelay: "-3s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-10 rounded-circle"
          style={{
            top: "28rem",
            right: "25%",
            width: "6rem",
            height: "6rem",
            animationDelay: "-1s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-25 rounded-circle"
          style={{
            bottom: "20rem",
            left: "15%",
            width: "5rem",
            height: "5rem",
            animationDelay: "-6s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-15 rounded-circle"
          style={{
            top: "35rem",
            left: "5%",
            width: "10rem",
            height: "10rem",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-20 rounded-circle"
          style={{
            bottom: "5rem",
            right: "10%",
            width: "9rem",
            height: "9rem",
            animationDelay: "-7s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-10 rounded-circle"
          style={{
            top: "18rem",
            left: "80%",
            width: "6rem",
            height: "6rem",
            animationDelay: "-2s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-25 rounded-circle"
          style={{
            bottom: "30rem",
            right: "30%",
            width: "8rem",
            height: "8rem",
            animationDelay: "-4s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-20 rounded-circle"
          style={{
            top: "12rem",
            left: "55%",
            width: "7rem",
            height: "7rem",
            animationDelay: "-3s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-15 rounded-circle"
          style={{
            bottom: "18rem",
            left: "45%",
            width: "10rem",
            height: "10rem",
            animationDelay: "-6s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-25 rounded-circle"
          style={{
            top: "42rem",
            left: "28%",
            width: "4rem",
            height: "4rem",
            animationDelay: "-1s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-10 rounded-circle"
          style={{
            top: "20rem",
            right: "40%",
            width: "9rem",
            height: "9rem",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-20 rounded-circle"
          style={{
            bottom: "25rem",
            left: "65%",
            width: "5rem",
            height: "5rem",
            animationDelay: "-2s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-15 rounded-circle"
          style={{
            top: "32rem",
            right: "15%",
            width: "7rem",
            height: "7rem",
            animationDelay: "-3s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-25 rounded-circle"
          style={{
            bottom: "12rem",
            left: "75%",
            width: "6rem",
            height: "6rem",
            animationDelay: "-4s",
          }}
        ></div>
        <div
          className="floating-circle d3 opacity-20 rounded-circle"
          style={{
            top: "8rem",
            left: "20%",
            width: "8rem",
            height: "8rem",
            animationDelay: "-6s",
          }}
        ></div>
        <div
          className="floating-circle d1 opacity-15 rounded-circle"
          style={{
            bottom: "28rem",
            right: "5%",
            width: "9rem",
            height: "9rem",
            animationDelay: "-7s",
          }}
        ></div>
        <div
          className="floating-circle d2 opacity-10 rounded-circle"
          style={{
            top: "38rem",
            left: "60%",
            width: "5rem",
            height: "5rem",
            animationDelay: "-2s",
          }}
        ></div>
      </div>

      <div className="container position-relative text-center py-3">
        <h1 className="display-1 fw-bold heading text-warning">
          <span className="text-white heading ">Techlynx Innovations Pvt. Ltd</span>
          
        </h1>
        <p className="text-white mb-4 send fs-4 fw-bold">
          Leading Training & Placement for Technology & Innovation
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-lg">
          <Link
            to="/courses"
            className="btn border fw-bold bg-primary text-white border-white rounded-pill mb-2  px-4 py-2 cursor-pointer me-2"
          >
            🚀 Advanced Courses
          </Link>

          <Link
            to="/contact-us/instructors"
            className="btn border bg-primary text-white  fw-bold border-white rounded-pill mb-2 px-4 py-2 cursor-pointer "
          >
            👨‍💻 Expert Instructors
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;