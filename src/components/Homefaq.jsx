// FAQSection.jsx
import React, { useState } from "react";
import { Accordion, Form, Button, Container } from "react-bootstrap";

const faqs = [
  {
    question: "What does your company do?",
    answer:
      "We are a technology solutions provider offering software development, IT consulting, cloud services, cybersecurity, and digital transformation solutions to businesses across various industries.",
  },
  {
    question: "Where is your company located?",
    answer:
      "Our headquarters are located in [Guntur, AP, India], with additional offices and remote teams serving clients globally.",
  },
  {
    question: "How long have you been in business?",
    answer:
      "We have been delivering IT services and innovative solutions for over [X years], working with startups, SMEs, and enterprise-level organizations.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "We serve industries such as finance, healthcare, education, e-commerce, manufacturing, logistics, retail, and technology startups.",
  },
  {
    question: "Do you provide services internationally?",
    answer:
      "Yes, we serve clients across multiple countries and time zones through both onsite and remote engagement models.",
  },
  {
    question: "What services do you offer?",
    answer:
      "Our services include software development, mobile app development, IT consulting, cloud solutions, cybersecurity, digital marketing, data analytics, and IT infrastructure management.",
  },
  {
    question: "Do you provide custom software development?",
    answer:
      "Yes, we specialize in custom software solutions tailored to meet the unique needs and goals of your business.",
  },
  {
    question: "Can you help with mobile application development?",
    answer:
      "Absolutely. We design and develop Android, iOS, and cross-platform mobile apps optimized for performance, security, and user experience.",
  },
  {
    question: "Do you offer cloud migration and management?",
    answer:
      "Yes, we help businesses migrate to cloud platforms (AWS, Azure, Google Cloud), optimize workloads, and manage cloud infrastructure efficiently.",
  },
  {
    question: "What cybersecurity solutions do you provide?",
    answer:
      "Our cybersecurity services include vulnerability assessments, penetration testing, endpoint protection, compliance audits, and 24/7 monitoring.",
  },
  {
    question: "Do you offer IT support and maintenance?",
    answer:
      "Yes, we provide ongoing technical support, system monitoring, bug fixes, updates, and maintenance to ensure smooth business operations.",
  },
  {
    question: "How do you start a new project?",
    answer:
      "We begin with a consultation to understand your requirements, followed by proposal submission, planning, design, development, testing, and deployment.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines depend on complexity. Small projects may take 2–6 weeks, while enterprise solutions can take several months.",
  },
  {
    question: "Do you use Agile methodology?",
    answer:
      "Yes, we follow Agile and Scrum practices to ensure transparency, flexibility, and faster delivery.",
  },
  {
    question: "Will I have a dedicated project manager?",
    answer:
      "Yes, every client is assigned a dedicated project manager to ensure smooth communication and project tracking.",
  },
  {
    question: "Can you work with our in-house team?",
    answer:
      "Absolutely, we can collaborate with your internal IT team for joint development, consulting, or support.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with a wide range of technologies including Java, .NET, Python, PHP, React, Angular, Node.js, Flutter, AWS, Azure, Google Cloud, and more.",
  },
  {
    question: "Do you provide AI and Machine Learning solutions?",
    answer:
      "Yes, we develop AI/ML-based solutions for predictive analytics, chatbots, automation, and business intelligence.",
  },
  {
    question: "Can you integrate software with existing systems?",
    answer:
      "Yes, we offer API development and system integration services to seamlessly connect with your existing applications.",
  },
  {
    question: "Do you offer website development and digital solutions?",
    answer:
      "Yes, we provide responsive web design, e-commerce platforms, CMS development, SEO, and digital marketing solutions.",
  },
  {
    question: "How do you ensure data security?",
    answer:
      "We follow strict security protocols including encryption, secure authentication, firewalls, and GDPR/ISO compliance.",
  },
  {
    question: "Are your solutions GDPR and HIPAA compliant?",
    answer:
      "Yes, we ensure that solutions adhere to compliance standards required for industries such as healthcare and finance.",
  },
  {
    question: "Do you sign NDAs for projects?",
    answer:
      "Yes, we sign Non-Disclosure Agreements (NDAs) to protect client confidentiality and intellectual property.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Pricing depends on the complexity, technology stack, and timeline of the project. We offer flexible engagement models: fixed price, hourly, or dedicated team.",
  },
  {
    question: "Do you offer free consultation?",
    answer:
      "Yes, we provide an initial consultation free of charge to understand your project requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept payments via bank transfer, credit card, and secure online payment gateways.",
  },
  {
    question: "Do you offer long-term contracts?",
    answer:
      "Yes, we offer both short-term projects and long-term contracts for continuous support and collaboration.",
  },
  {
    question: "Do you hire freshers?",
    answer:
      "Yes, we welcome fresh graduates and provide training programs to help them grow in the IT industry.",
  },
  {
    question: "How can I apply for a job in your company?",
    answer:
      "You can apply through our Careers page or send your resume to [HR email ID].",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Yes, we offer internships for students and freshers to gain practical IT experience.",
  },
  {
    question: "What skills do you look for in candidates?",
    answer:
      "We value strong problem-solving skills, coding expertise, teamwork, adaptability, and willingness to learn.",
  },
  {
    question: "Do you collaborate with other IT companies?",
    answer:
      "Yes, we partner with IT companies, startups, and enterprises for joint projects, outsourcing, and technology collaborations.",
  },
  {
    question: "Do you work with startups?",
    answer:
      "Absolutely. We help startups with MVP development, product scaling, funding pitch support, and IT consultation.",
  },
  {
    question: "Can you provide dedicated IT resources?",
    answer:
      "Yes, we offer staff augmentation and dedicated development teams to meet your business needs.",
  },
  {
    question: "Do you provide white-label solutions?",
    answer:
      "Yes, we provide white-label software solutions that can be customized and branded for your company.",
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
        <div className="faq-scroll">
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
        </div>

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