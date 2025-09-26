import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What courses do you offer?",
      answer:
        "We offer comprehensive courses in Web Development, Data Science, AI & Machine Learning, Cybersecurity, Cloud Computing, and Mobile Development and so on. All courses are designed with industry experts and include hands-on projects.",
    },
    {
      question: "How long are the training programs?",
      answer:
        "Our training programs range from 3-month bootcamps to 12-month certifications. Weekend classes and flexible schedules are available to suit working professionals.",
    },
    {
      question: "Do you provide job placement assistance?",
      answer:
        "Yes, we offer resume building sessions, mock interview preparation, and industry partner connections to help you land your dream job.",
    },
    {question:"How much do your services cost?",
      answer:" Pricing depends on the complexity, technology stack, and timeline of the project. We offer flexible engagement models: fixed price, hourly, or dedicated team.",
    },
    {
      question: "Will I have a dedicated project manager?",
      answer: "Yes, every client is assigned a dedicated project manager to ensure smooth communication and project tracking",
    },
    {question:"Do you provide AI and Machine Learning solutions?",
    answer:"Yes, we develop AI/ML-based solutions for predictive analytics, chatbots, automation, and business intelligence.",},
    {
      question: "What are the admission requirements?",
      answer:
        "For general courses, a high school diploma is required. Advanced programs require basic programming knowledge or prior experience in tech.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-100 py-5" style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center fw-bold mb-5 send">Frequently Asked Questions</h2>

        <div className="d-flex flex-column gap-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-4 shadow custom-shadow cursor-pointer"
              onClick={() => toggle(idx)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0 send fw-bold">{item.question}</h5>
                <span style={{ fontSize: "1.5rem" }}>
                  {openIndex === idx ? "−" : "+"}
                </span>
              </div>
              {openIndex === idx && (
                <div className="mt-3 text-secondary">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;