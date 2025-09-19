import React from "react";
import "./Students.css"
import { Link } from "react-router-dom";

const steps = [
  { icon: "📘", text: "Select your course and start learning with mentors" },
  { icon: "💻", text: "Work on real-time projects to upskill yourself" },
  { icon: "🏆", text: "Based on your performance, we provide job opportunities" },
  { icon: "🎓", text: "Earn recognized certifications for your hard work" },
];

const Students = () => (
  <div className="row align-items-center">
    <div className="col-md-6 mb-3" data-aos="fade-right">
      <img src="/stu-2.jpg" alt="students" className="section-img img-fluid" />
    </div>
    <div className="col-md-6" data-aos="fade-left">
      <h3 className="fw-bold">Why Choose Us as a Student?</h3>
      <p>
        We provide skill-upgrading programs, live projects, and practical
        training to boost your career. Choosing us means preparing for the future
        with the right guidance and hands-on exposure.
      </p>
      <h5 className="fw-bold">Our Process:</h5>
      <div className="d-flex flex-column gap-3">
        {steps.map((s, i) => (
          <div key={i} className="process-card" data-aos="zoom-in">
            <span>{s.icon}</span>
            <p className="mb-0">{s.text}</p>
          </div>
        ))}
      </div>
      <Link to="/courses"><button className="btn btn-warning text-white mt-4 fw-bold">
        Get Started
      </button></Link>
    </div>
  </div>
);

export default Students;
