import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Wedo.css";

// Import category components
import Students from "./Students";
import Freshers from "./Freshers";
import Experienced from "./Experienced";

const categories = [
  { key: "students", img: "/stu-1.webp", label: "Students" },
  { key: "freshers", img: "/fr1.jpg", label: "Freshers" },
  { key: "experienced", img: "/exp1.jpg", label: "Experienced" },
];

function Wedo() {
  const [activeTab, setActiveTab] = useState("students");

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "students":
        return <Students />;
      case "freshers":
        return <Freshers />;
      case "experienced":
        return <Experienced />;
      default:
        return <Students />;
    }
  };

  return (
    <div className="container py-5">
      {/* Heading Section */}
      <div className="text-center main-body mb-5">
        <h1
          className="fw-bolder mt-2 wedoHeading"
          data-aos="fade-down"
        >
          Proactive Recruitment Strategy
        </h1>
<p className="lead main-topic   text-black w-100 mt-3" data-aos="fade-up">
          We have divided our process into three categories:{" "}
          <strong>Students</strong>, <strong>Freshers</strong>, and{" "}
          <strong>Experienced </strong>. <br />
        </p>
        <p>  Select the category that suits you best to explore the step-by-step
          process. By choosing this company, you are taking the right path
          towards your career growth.
        </p>
      </div>

      {/* Top Row: Category Images */}
      <div className="row text-center mb-4" data-aos="fade-up">
        {categories.map((item) => (
          <div className="col-md-4 mb-3" key={item.key}>
            <div
              className={`category-card ${activeTab === item.key ? "active" : ""}`}
              onClick={() => setActiveTab(item.key)}
              style={{ backgroundImage: `url(${item.img})` }}
            >
              <div className="overlay">
                <h4>{item.label}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render Selected Component */}
      {renderContent()}
    </div>
  );
}

export default Wedo;
