import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Steps.css';

const steps = [
  {
  icon: "bi-card-checklist",
  title: "Follow 3A",
  desc: (
    <>
      Our structured learning model focuses on{" "}
      <span style={{ color: "yellow",fontWeight:"bold" }}>Attendance</span>,{" "}
      <span style={{ color: "yellow",fontWeight:"bold" }}>Assignment</span> &{" "}
      <span style={{ color: "yellow",fontWeight:"bold" }}>Assessment</span>, encouraging consistency and helping you achieve a success score.
    </>
  )
},
  {
    icon: "bi-person-gear",
    title: "Industry-Specific Skills",
    desc:(
    <>
      Gain hands-on expertise with tools and technologies tailored to high-demand roles in{" "}
      <span style={{color:"yellow",fontWeight:"bold"}}> data, development, cloud, testing and marketing.</span>
    </>
    )
  },
{
    icon: "bi-person-badge",
    title: "Profile Building",
    desc:(
    <>
      Get expert guidance on{" "}
      <span style={{color:"yellow",fontWeight:"bold"}}>resume creation, LinkedIn, and web portfolio development</span>,to confidently present your skills to employers.
    </>
    )
  },
  {
    icon: "bi-file-earmark-check",
    title: "Exam",
    desc:(
    <>
      Clear the {" "}
      <span style={{color:"yellow",fontWeight:"bold"}}>final evaluation exam designed to test your technical understanding and practical readiness</span>,Clear the  to conquer real-world challenges.
    </>
    )
  },
  {
  icon: "bi-award",
  title: "Global Certification",
  desc: (
    <>
      <span style={{ color: "yellow", fontWeight: "bold" }}>
        Earn globally recognized certifications
      </span>
      , that validate your expertise and enhance your professional credibility across industries.
    </>
  )
},
{
  icon: "bi-briefcase",
  title: "Integrated Internship",
  desc: (
    <>
      Apply your{" "}
      <span style={{ color: "yellow", fontWeight: "bold" }}>
        knowledge in real projects and case studies through an internship
      </span>{" "}
       real projects, real impact.
    </>
  )
}
];

function Steps() {
  return (
    <div className="bg-main py-5">
      <div className="heading-main mb-5">
        Turn Your Learning Into a Career That You’re Proud Of
      </div>
      <div className="steps-container">
        <div className="steps-row g-4 justify-content-center">
          {steps.map((item, idx) => (
            <div className={`flip-card ${idx % 2 !== 0 ? "stagger" : ""}`} key={idx}>
              <div className="flip-card-inner">
                {/* Front side */}
                <div className="flip-card-front d-flex flex-column align-items-center justify-content-center">
                  <i className={`bi ${item.icon} fs-2 text-success mb-2`} />
                  <div className="fw-bold">{item.title}</div>
                </div>
                {/* Back side */}
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center text-white">
                  <p className="fs-6">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Steps;