import React from "react";
import "./Experienced.css";

const steps = [
  { icon: "📝", text: "Apply for the Job" },
  { icon: "📄", text: "Resume Shortlisting" },
  { icon: "🧩", text: "General Test" },
  { icon: "💻", text: "Technical Test" },
  { icon: "👥", text: "Technical & HR Interview" },
  { icon: "🎉", text: "Job Offered" },
];

const Experienced = () => (
  <div className="container-fluid px-0">
    <div className="row align-items-center">
      {/* Image Column */}
      <div className="col-md-6 mb-3 px-0" data-aos="fade-right">
        <img
          src="/ex3.jpg"
          alt="experienced"
          className="experienced-img img-fluid"
          style={{ height: "100%", objectFit: "cover" }}
        />
      </div>

      {/* Text Column */}
      <div className="col-md-6 px-4" data-aos="fade-left">
        <h3 className="fw-bold">Why Join Us as an Experienced Professional?</h3>
        <p>
          This is the best company to join for your future growth. We offer a
          great culture, exciting projects, and limitless opportunities to excel
          in your career.
        </p>
        <h5 className="fw-bold">Our Process:</h5>
        <div className="d-flex flex-column gap-3 fw-bold">
          {steps.map((s, i) => (
            <div
              key={i}
              className="process-card-experienced"
              data-aos="zoom-in"
            >
              <span>{s.icon}</span>
              <p className="mb-0">{s.text}</p>
            </div>
          ))}
        </div>
        <button className="btn btn-danger responsive-btn mt-4 fw-bold">
          <a href="#Jobcart" className="text-decoration-none text-white d-block w-100">
            Explore Openings
          </a>
        </button>
      </div>
    </div>
  </div>
);

export default Experienced;
