import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WebDevelopmentServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is web development?",
      answer: "Web development is the process of creating and maintaining websites and web applications, including design, coding, deployment, and performance optimization."
    },
    {
      question: "Which technologies do you use for web development?",
      answer: "We work with HTML5, CSS3, JavaScript, React, Angular, Bootstrap, Tailwind, and back-end frameworks like Node.js, Django, and PHP for complete web solutions."
    },
    {
      question: "How long does it take to build a website?",
      answer: "It depends on project complexity. Simple websites take 1–2 months, while dynamic business or e-commerce sites may take 3–6 months."
    },
    {
      question: "Do you make websites responsive and mobile-friendly?",
      answer: "Yes, we ensure every website we build is responsive, mobile-friendly, and optimized for performance across all devices."
    },
    {
      question: "How much does a website cost?",
      answer: "Pricing varies by complexity. Basic websites start from $5,000, business sites from $15,000, and advanced platforms or e-commerce sites can go beyond $40,000."
    }
  ];

  return (
    <div className="web-development-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Web Development Services</h1>
          <p className="fs-5">Professional websites that are modern, responsive, and scalable.</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>
      </section>

      {/* Service Overview */}
      <section className="overview">
        <div className="container mb-5">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Web Development
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Building Modern Websites</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we craft websites that combine sleek designs with powerful functionality. From corporate websites to e-commerce solutions, we ensure a strong digital presence for your business.</p>
              <p className="text-body fs-5">We focus on responsive design, SEO optimization, and performance to deliver websites that not only look great but also drive results.</p>
              <p className="text-body fs-5">Whether you’re a startup or an enterprise, our web development solutions adapt to your business goals.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1350&q=80" alt="Web development" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Web Development Services</h2>
          <p className="text-center text-body">Comprehensive solutions tailored to your digital presence</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🎨</div>
              <h3>Custom Website Design</h3>
              <p className="text-primary fs-5">Unique, visually appealing designs tailored to your brand.</p>
              <ul>
                <li>Responsive layouts</li>
                <li>User-centric design</li>
                <li>SEO-friendly structure</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🛒</div>
              <h3>E-Commerce Development</h3>
              <p className="text-primary fs-5">Robust online stores with secure payment gateways.</p>
              <ul>
                <li>Product catalogs</li>
                <li>Payment integration</li>
                <li>Inventory management</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">⚙️</div>
              <h3>Web Application Development</h3>
              <p className="text-primary fs-5">Dynamic applications that streamline business processes.</p>
              <ul>
                <li>Custom dashboards</li>
                <li>API integration</li>
                <li>Scalable architecture</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔒</div>
              <h3>Website Maintenance</h3>
              <p className="text-primary fs-5">Continuous updates and security enhancements.</p>
              <ul>
                <li>Bug fixes</li>
                <li>Content updates</li>
                <li>Performance optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx Innovations</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Creative Design</h3>
              <p className="text-dark fs-5">Visually stunning websites designed to capture attention.</p>
            </div>
            <div className="benefit">
              <h3>Performance Focused</h3>
              <p className="text-dark fs-5">Fast, responsive, and SEO-friendly websites.</p>
            </div>
            <div className="benefit">
              <h3>End-to-End Support</h3>
              <p className="text-dark fs-5">From planning to post-launch, we’ve got you covered.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Techlynx redesigned our company website, and our engagement rates tripled within months."</p>
              <p className="testimonial-author">- Jessica Smith, Marketing Director</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Our e-commerce sales grew significantly after Techlynx built our online store."</p>
              <p className="testimonial-author">- Daniel Lee, Founder of TrendyMart</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Web Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirement Analysis</h3>
              <p className="text-dark">Understanding your goals, audience, and features.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Design & Prototyping</h3>
              <p className="text-dark">Crafting wireframes and stunning design mockups.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Development</h3>
              <p className="text-dark">Building responsive, dynamic websites with modern tools.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className="text-dark">Ensuring flawless performance across devices.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Launch & Support</h3>
              <p className="text-dark">Deploying your site and providing continuous support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Affordable Pricing</h2>
          <p className="text-center text-dark">Flexible packages for all business sizes</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic Website</h3>
              <p className="text-dark">Simple static websites with essential features</p>
              <div className="price">₹5,000+</div>
              <ul className="plan-features">
                <li>Up to 5 pages</li>
                <li>Responsive design</li>
                <li>Basic SEO</li>
                <li>1 month support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Business Website</h3>
              <p className="text-dark">Dynamic websites for growing companies</p>
              <div className="price">₹15,000+</div>
              <ul className="plan-features">
                <li>Custom design</li>
                <li>Content management system</li>
                <li>SEO optimization</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>E-Commerce Solution</h3>
              <p className="text-dark">Advanced online stores with secure transactions</p>
              <div className="price">₹40,000+</div>
              <ul className="plan-features">
                <li>Product catalogs</li>
                <li>Payment integration</li>
                <li>Scalable features</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
          <p className="text-center text-dark" style={{ marginTop: "2rem" }}>Need a custom solution? <a href="#contact">Contact us</a> for a tailored proposal.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">Web Development FAQs</h2>
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFaq(index)}>
                {faq.question} <span>{openFaqIndex === index ? '-' : '+'}</span>
              </div>
              {openFaqIndex === index && (
                <div className="faq-answer active">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <div className="container">
          <h2>Ready to Build Your Website?</h2>
          <p>Contact us for a free consultation and quote to create a high-performance website for your business.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #0984e3;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
          line-height: 1.6;
          color: var(--text);
          background-color: #ffffff;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 15px;
        }

        h1, h2, h3, h4 {
          color: var(--primary);
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        h1 { font-size: 2.5rem; }
        h2 { font-size: 2rem; }
        h3 { font-size: 1.5rem; }

        p { margin-bottom: 1rem; }

        .btn {
          display: inline-block;
          background: var(--secondary);
          color: white;
          padding: 0.8rem 1.8rem;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(9, 132, 227, 0.3);
        }

        .btn:hover {
          background: #0870c1;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(9, 132, 227, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(9, 132, 227, 0.8));
          background-size: cover;
          background-position: center;
          color: white;
          padding: 8rem 0;
          text-align: center;
        }

        .hero h1 {
          color: white;
          font-size: 3.2rem;
          margin-bottom: 1.5rem;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }

        .hero p {
          font-size: 1.3rem;
          max-width: 700px;
          margin: 0 auto 2.5rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .overview { background: white; }

        .overview-content {
          display: flex;
          align-items: center;
          gap: 4rem;
        }

        .overview-text { flex: 1; }

        .overview-image {
          flex: 1;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .overview-image img {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .overview-image img:hover { transform: scale(1.03); }

        .offerings { background: var(--light); }

        .offering-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .offering-card {
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-top: 4px solid var(--secondary);
          text-align: center;
        }

        .offering-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        }

        .offering-card h3 {
          color: var(--secondary);
          margin: 1.2rem 0;
        }

        .offering-card .icon {
          font-size: 3rem;
          color: var(--secondary);
          margin-bottom: 1rem;
        }

        .offering-card ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }

        .offering-card ul li {
          padding: 0.5rem 0;
          position: relative;
          padding-left: 1.5rem;
        }

        .offering-card ul li:before {
          content: "✓";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-weight: bold;
        }

        .services { background: white; }

        .service-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .service-tab {
          padding: 0.9rem 2.2rem;
          background: #ff6f61;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
        }

        .service-tab.active {
          background: var(--secondary);
          color: white;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }

        .tech-card {
          background: white;
          border-radius: 12px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border: 1px solid #f1f1f1;
        }

        .tech-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.1);
        }

        .tech-logo {
          font-size: 3rem;
          margin-bottom: 1.5rem;
        }

        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }

        .benefits {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 2rem;
        }

        .benefit {
          flex: 1;
          min-width: 300px;
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          border-left: 4px solid var(--secondary);
        }

        .benefit:hover { transform: translateY(-5px); }

        .testimonials { margin-top: 4rem; }

        .testimonial {
          background: white;
          padding: 2.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
        }

        .testimonial:before {
          content: '"';
          position: absolute;
          top: -15px;
          left: 20px;
          font-size: 4rem;
          color: var(--secondary);
          opacity: 0.2;
          font-family: Georgia, serif;
        }

        .testimonial-author {
          font-weight: bold;
          margin-top: 1.5rem;
          color: var(--secondary);
          font-style: italic;
        }

        .process { background: white; }

        .process-steps {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          margin-top: 3rem;
          position: relative;
        }

        .process-steps:before {
          content: "";
          position: absolute;
          top: 50px;
          left: 10%;
          right: 10%;
          height: 3px;
          background: var(--secondary);
          z-index: 1;
        }

        .step {
          flex: 1;
          min-width: 180px;
          text-align: center;
          padding: 2rem 1.5rem;
          position: relative;
          z-index: 2;
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .step-number {
          background: var(--secondary);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-weight: bold;
          font-size: 1.5rem;
          box-shadow: 0 5px 10px rgba(9, 132, 227, 0.3);
        }

        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }

        .pricing-plans {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          margin-top: 3rem;
        }

        .plan {
          flex: 1;
          min-width: 300px;
          background: white;
          border-radius: 12px;
          padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          position: relative;
          transition: all 0.3s ease;
        }

        .plan.featured {
          transform: scale(1.05);
          border: 2px solid var(--secondary);
          z-index: 2;
        }

        .plan.featured:hover { transform: scale(1.07); }

        .plan:hover { transform: translateY(-10px); }

        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--secondary);
          color: white;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: bold;
        }

        .plan h3 {
          color: var(--secondary);
          border-bottom: 2px solid var(--light);
          padding-bottom: 1.2rem;
          margin-bottom: 1.2rem;
        }

        .price {
          font-size: 2.8rem;
          font-weight: bold;
          color: var(--primary);
          margin: 1.5rem 0;
        }

        .plan-features {
          list-style: none;
          margin: 2rem 0;
          padding: 0;
        }

        .plan-features li {
          padding: 0.8rem 0;
          border-bottom: 1px solid #eee;
          text-align: center;
          position: relative;
          padding-left: 1.8rem;
        }

        .plan-features li:before {
          content: "•";
          color: var(--secondary);
          position: absolute;
          left: 0;
          font-size: 1.5rem;
          top: 0.4rem;
        }

        .faq { background: white; }

        .faq-item {
          margin-bottom: 1.5rem;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }

        .faq-question {
          font-weight: bold;
          color: var(--primary);
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem;
          background: var(--light);
          transition: background 0.3s ease;
          font-size: 1.1rem;
        }

        .faq-question:hover { background: #e9ecef; }

        .faq-answer {
          padding: 0;
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-answer.active {
          padding: 1.5rem;
          max-height: 500px;
        }

        .cta {
          background: linear-gradient(135deg, var(--secondary), #0870c1);
          color: white;
          text-align: center;
          padding: 6rem 0;
        }

        .cta h2 {
          color: white;
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
        }

        .cta p {
          max-width: 700px;
          margin: 0 auto 2.5rem;
          font-size: 1.2rem;
        }

        .cta .btn {
          background: white;
          color: var(--secondary);
          margin-top: 1.5rem;
          font-size: 1.2rem;
          padding: 1rem 2.5rem;
        }

        @media (max-width: 768px) {
          .overview-content { flex-direction: column; }
          .hero h1 { font-size: 2.3rem; }
          .process-steps:before { display: none; }
          .plan.featured { transform: scale(1); }
          section { padding: 3.5rem 0; }
        }
      `}</style>

    </div>
  );
};

export default WebDevelopmentServices;
