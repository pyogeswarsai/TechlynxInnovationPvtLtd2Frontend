import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homebatchorevent = () => {
  const cycle = 10 * 24 * 60 * 60 * 1000; // 10 days in ms

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const remaining = cycle - (now % cycle); // reset every 10 days
    return {
      total: remaining,
      days: Math.floor(remaining / (1000 * 60 * 60 * 24)),
      hours: Math.floor((remaining / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((remaining / 1000 / 60) % 60),
      seconds: Math.floor((remaining / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const progress = ((cycle - timeLeft.total) / cycle) * 100;

  return (
    <div className="batch-banner" data-aos="fade-up">
      <div className="banner-content">
        <h2 className="text-light">🚀 New Batch Starting Soon!</h2>

        {/* Smooth sliding course list */}
        <div className="course-slider">
          <div className="course-track">
            <span>Full Stack Development</span>
            <span>Programming Languages & Frameworks</span>
            <span>Cloud Solutions</span>
            <span>Database Management</span>
            <span>Business & Marketing</span>
            <span>Web Development</span>
            <span>Testing & QA</span>
            <span>AI & ML</span>
            <span>Data Science</span>
            <span>Mobile App Development</span>
            <span>Cybersecurity</span>
            <span>UI/UX Design</span>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="countdown">
          <span>{timeLeft.days}d</span> :
          <span>{timeLeft.hours}h</span> :
          <span>{timeLeft.minutes}m</span> :
          <span>{timeLeft.seconds}s</span>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>

        <Link to="/courses"><button className="register-btn">Register Now</button></Link>
      </div>
    </div>
  );
};

export default Homebatchorevent;
