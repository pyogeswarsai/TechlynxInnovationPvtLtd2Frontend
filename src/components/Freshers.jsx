import React from "react";
import "./Fresher.css";

const steps = [
  { icon: "📝", text: "Take our test and attend the interview" },
  { icon: "🏢", text: "Get training directly from the company with practical exposure" },
  { icon: "💼", text: "Work on real-time projects to gain industry-relevant experience" },
  { icon: "🎓", text: "Learn company work culture while earning your certification" },
];

const Freshers = () => (
  <div className="row align-items-center flex-md-row-reverse">
    <div className="col-md-6 mb-3" data-aos="fade-left">
      <img src="/fr-2.webp" alt="freshers" className="section-img img-fluid" />
    </div>

    {/* Added px-4 here for padding left and right */}
    <div className="col-md-6 px-5" data-aos="fade-right">
      <h3 className="fw-bold">Opportunities for Freshers</h3>
      <p>
        We help freshers kickstart their careers by providing real corporate
        exposure and training opportunities.
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
      <button className="btn btn-success responsive-btn mt-4 fw-bold">
        <a href="#Getintoch" className="text-decoration-none text-white d-block w-100">
          Get in Touch
        </a>
      </button>
    </div>
  </div>
);

export default Freshers;
