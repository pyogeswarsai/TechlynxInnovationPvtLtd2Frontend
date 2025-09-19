// FAQSection.jsx
import React, { useState } from "react";
import { Accordion, Form, Button, Container } from "react-bootstrap";

const faqs = [
  {
    question: "What training programs does Techlynx offer?",
    answer:
      "We provide hands-on training in Full Stack Development, Cloud Computing, AI Solutions, Data Analytics, Cybersecurity, Mobile App Development, and more.",
  },
  {
    question: "Are the training sessions online or offline?",
    answer:
      "We offer both online and offline sessions to suit different learning needs.",
  },
  {
    question: "Do I get a certificate after course completion?",
    answer:
      "Yes, every participant receives an industry-recognized certificate from Techlynx Innovations.",
  },
  {
    question: "Does Techlynx provide internship opportunities?",
    answer:
      "Yes, we regularly offer internships where candidates work on real-time projects under mentorship.",
  },
  {
    question: "Can I join Techlynx as a full-time employee after training?",
    answer:
      "High-performing trainees and interns may be offered full-time roles at Techlynx.",
  },
  {
    question: "What job roles are available at Techlynx?",
    answer:
      "We hire interns, full stack developers, cloud engineers, AI engineers, UI/UX designers, mobile app developers, and more.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes, we provide career guidance, interview preparation, and placement support through our hiring partners.",
  },
  {
    question: "What if I face issues during the application process?",
    answer:
      "You can always contact our support team at support@techlynxinnovations.com for assistance.",
  },
  {
    question: "What payment options are available for training?",
    answer:
      "We accept UPI, net banking, debit/credit cards, and EMI options for selected programs.",
  },
  {
    question: "Is there a refund policy if I discontinue training?",
    answer:
      "Yes, refund policies vary depending on the course. Please check the Terms & Conditions page for detailed information.",
  },
];

function Homefaq() {
  const [search, setSearch] = useState("");

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-5 bg-light">
      <Container className="text-center">
        <h2 className="fw-bold mb-3">Frequently Asked Questions</h2>
        <p className="text-muted mb-4">
          Find answers to common questions about Techlynx Training & Careers
        </p>

        {/* Search Bar */}
        <Form.Control
          type="text"
          placeholder="Search questions..."
          className="mb-4 w-75 mx-auto rounded-pill shadow-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Accordion */}
        <Accordion className="text-start">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                className="mb-3 rounded-3 shadow-sm faq-card"
              >
                <Accordion.Header>{faq.question}</Accordion.Header>
                <Accordion.Body>{faq.answer}</Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <p className="text-muted text-center">No results found.</p>
          )}
        </Accordion>

        {/* Contact Support */}
        <div className="mt-5">
          <p className="text-muted">Still have questions?</p>
          <a href="mailto:hr@techlynxinnovations.com">
          <button variant="primary" className="btn btn-primary">
            Contact Support
          </button></a>
        </div>
      </Container>

      {/* Custom Styles */}
      <style>
        {`
          .faq-card {
            transition: all 0.3s ease-in-out;
            border: none;
          }
          .faq-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 6px 18px rgba(0,0,0,0.1);
          }
          .accordion-button {
            border-radius: 12px !important;
          }
          .accordion-button:not(.collapsed) {
            background-color: #f0f8ff;
            font-weight: 600;
          }
        `}
      </style>
    </section>
  );
}

export default Homefaq;