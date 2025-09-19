import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homepage.css";

const steps = [
  {
    title: "Learn",
    desc: "Gain strong fundamentals from expert mentors with real-world knowledge.",
    icon: "📘",
  },
  {
    title: "Practice",
    desc: "Hands-on coding exercises and live project practice.",
    icon: "💻",
  },
  {
    title: "Projects",
    desc: "Work on industry-level projects and case studies.",
    icon: "🚀",
  },
  {
    title: "Mock Interviews",
    desc: "Prepare with real interview simulations and guidance.",
    icon: "🎤",
  },
  {
    title: "Work @ Techlynx",
    desc: "Kickstart your career with internal job opportunities at Techlynx.",
    icon: "🏢",
  },
];

function Hometraining() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // animations repeat when scrolling back
      mirror: true, // animate elements when scrolling past them in reverse
    });
  }, []);

  return (
    <section className="training-methodology py-5">
      <div className="container text-center">
        <h2 className="section-title mb-5" data-aos="fade-up">
          Our <span>Training Methodology</span>
        </h2>
        <div className="steps-row d-flex flex-wrap justify-content-center">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flip-card mx-3 mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 150}
            >
              <div className="flip-card-inner">
                {/* Front */}
                <div className="flip-card-front d-flex flex-column justify-content-center align-items-center">
                  <div className="icon mb-3">{step.icon}</div>
                  <h5>{step.title}</h5>
                </div>

                {/* Back */}
                <div className="flip-card-back d-flex flex-column justify-content-center align-items-center">
                  <p>{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hometraining;
