import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const QaTestingServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is QA & Testing?",
      answer: "QA & Testing ensures software is bug-free, reliable, and meets user expectations through manual and automated testing methods."
    },
    {
      question: "Do you provide both manual and automated testing?",
      answer: "Yes, we provide functional, regression, performance, and automation testing to cover all aspects of software quality."
    },
    {
      question: "Which tools do you use for testing?",
      answer: "We use Selenium, JUnit, TestNG, Postman, JMeter, Appium, Cypress, and other modern QA tools."
    },
    {
      question: "Why is QA important for my project?",
      answer: "QA reduces risks, prevents costly bugs, improves customer satisfaction, and ensures smooth user experiences."
    },
    {
      question: "Can you test mobile apps too?",
      answer: "Yes, we provide QA services for web, mobile, and enterprise applications."
    }
  ];

  return (
    <div className="qa-testing-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>QA & Testing Services</h1>
          <p className="fs-5">Delivering high-quality software through rigorous testing practices</p>
          <a href="#contact" className="btn">Request a Free QA Audit</a>
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
                QA & Testing
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Ensuring Software Excellence</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we provide end-to-end QA & Testing services to ensure your applications are reliable, scalable, and meet industry standards.</p>
              <p className="text-body fs-5">Our QA experts combine manual and automated testing to identify issues early, reduce risks, and enhance user satisfaction.</p>
              <p className="text-body fs-5">From functional testing to performance and security validation, we help you deliver flawless software products.</p>
            </div>
            <div className="overview-image">
              <img src="https://th.bing.com/th/id/OIP.73215pBAITZFyxRfBKvapwHaDy?w=300&h=178&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="QA Testing" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our QA & Testing Services</h2>
          <p className="text-center text-body">Comprehensive solutions to ensure software quality and performance</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🧪</div>
              <h3>Functional Testing</h3>
              <p className="text-primary fs-5">Ensuring features work as expected across platforms.</p>
              <ul>
                <li>Requirement validation</li>
                <li>Regression testing</li>
                <li>End-to-end scenarios</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🤖</div>
              <h3>Automation Testing</h3>
              <p className="text-primary fs-5">Faster releases with Selenium, Cypress, and Appium.</p>
              <ul>
                <li>Automated test scripts</li>
                <li>Cross-browser testing</li>
                <li>Continuous testing</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📊</div>
              <h3>Performance Testing</h3>
              <p className="text-primary fs-5">Ensuring apps perform under heavy load.</p>
              <ul>
                <li>Load & stress testing</li>
                <li>Scalability testing</li>
                <li>JMeter integration</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔒</div>
              <h3>Security Testing</h3>
              <p className="text-primary fs-5">Identifying vulnerabilities and securing your app.</p>
              <ul>
                <li>Penetration testing</li>
                <li>Data protection validation</li>
                <li>Compliance testing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx for QA</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>End-to-End Coverage</h3>
              <p className="text-dark fs-5">We cover functional, performance, and security testing.</p>
            </div>
            <div className="benefit">
              <h3>Automation First</h3>
              <p className="text-dark fs-5">Accelerated testing cycles with automation frameworks.</p>
            </div>
            <div className="benefit">
              <h3>Experienced Team</h3>
              <p className="text-dark fs-5">QA engineers with expertise across domains and tools.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Techlynx identified critical bugs before launch, saving us thousands in post-release fixes."</p>
              <p className="testimonial-author">- Sarah Williams, Product Owner</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Their automation framework reduced our regression testing time from weeks to hours."</p>
              <p className="testimonial-author">- Kevin Brown, Engineering Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our QA Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirement Analysis</h3>
              <p className="text-dark">Understanding software requirements and use cases.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Test Planning</h3>
              <p className="text-dark">Creating strategies for manual and automated testing.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Test Execution</h3>
              <p className="text-dark">Running test cases, scripts, and scenarios.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Defect Reporting</h3>
              <p className="text-dark">Tracking and reporting issues for fixes.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Final Validation</h3>
              <p className="text-dark">Ensuring product is bug-free before release.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">QA & Testing Pricing</h2>
          <p className="text-center text-dark">Flexible engagement models for every business</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic QA</h3>
              <p className="text-dark">Manual testing for small projects</p>
              <div className="price">₹4,000+</div>
              <ul className="plan-features">
                <li>Manual testing</li>
                <li>Basic reporting</li>
                <li>1 month support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Automation Suite</h3>
              <p className="text-dark">Test automation for medium projects</p>
              <div className="price">₹12,000+</div>
              <ul className="plan-features">
                <li>Automated test scripts</li>
                <li>Cross-browser testing</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise QA</h3>
              <p className="text-dark">Comprehensive QA for large-scale systems</p>
              <div className="price">₹30,000+</div>
              <ul className="plan-features">
                <li>Performance & security testing</li>
                <li>Automation + manual mix</li>
                <li>6 months support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
          <p className="text-center text-dark" style={{ marginTop: "2rem" }}>Need a tailored QA strategy? <a href="#contact">Contact us</a> for a custom plan.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">QA & Testing FAQs</h2>
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
          <h2>Want Flawless Software?</h2>
          <p>Let our QA experts ensure your product is bug-free and ready for market.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e91e63;
          --accent: #3498db;
          --light: #f8f9fa;
          --dark: #2c3e50;
          --text: #333;
          --text-light: #7f8c8d;
        }
        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
        body { line-height: 1.6; color: var(--text); background-color: #ffffff; }
        .container { width: 100%; max-width: 1400px; margin: 0 auto; padding: 0 15px; }
        h1, h2, h3, h4 { color: var(--primary); margin-bottom: 1rem; line-height: 1.2; }
        h1 { font-size: 2.5rem; } h2 { font-size: 2rem; } h3 { font-size: 1.5rem; }
        p { margin-bottom: 1rem; }
        .btn {
          display: inline-block; background: var(--secondary); color: white; padding: 0.8rem 1.8rem;
          border: none; border-radius: 30px; cursor: pointer; text-decoration: none; font-weight: 600;
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(233, 30, 99, 0.3);
        }
        .btn:hover { background: #c2185b; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(233, 30, 99, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(233, 30, 99, 0.8)), 
                     url('https://images.unsplash.com/photo-1558089687-0f3d8f7c036a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
          background-size: cover; background-position: center; color: white; padding: 8rem 0; text-align: center;
        }
        .hero h1 { color: white; font-size: 3.2rem; margin-bottom: 1.5rem; text-shadow: 0 2px 4px rgba(0,0,0,0.3); }
        .hero p { font-size: 1.3rem; max-width: 700px; margin: 0 auto 2.5rem; text-shadow: 0 1px 2px rgba(0,0,0,0.2); }
        .overview { background: white; }
        .overview-content { display: flex; align-items: center; gap: 4rem; }
        .overview-text { flex: 1; }
        .overview-image { flex: 1; border-radius: 12px; overflow: hidden; box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .overview-image img { width: 100%; height: auto; display: block; transition: transform 0.5s ease; }
        .overview-image img:hover { transform: scale(1.03); }
        .offerings { background: var(--light); }
        .offering-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2.5rem; margin-top: 2rem; }
        .offering-card {
          background: white; border-radius: 12px; padding: 2.5rem; box-shadow: 0 10px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border-top: 4px solid var(--secondary); text-align: center;
        }
        .offering-card:hover { transform: translateY(-10px); box-shadow: 0 15px 30px rgba(0,0,0,0.1); }
        .offering-card h3 { color: var(--secondary); margin: 1.2rem 0; }
        .offering-card .icon { font-size: 3rem; color: var(--secondary); margin-bottom: 1rem; }
        .offering-card ul { list-style: none; padding: 0; margin: 1.5rem 0; text-align: left; }
        .offering-card ul li { padding: 0.5rem 0; position: relative; padding-left: 1.5rem; }
        .offering-card ul li:before { content: "✓"; color: var(--secondary); position: absolute; left: 0; font-weight: bold; }
        .services { background: white; }
        .service-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .service-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .service-tab.active { background: var(--secondary); color: white; }
        .tech-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; margin-top: 2rem; }
        .tech-card {
          background: white; border-radius: 12px; padding: 2rem; text-align: center; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
          transition: all 0.3s ease; border: 1px solid #f1f1f1;
        }
        .tech-card:hover { transform: translateY(-7px); box-shadow: 0 12px 25px rgba(0,0,0,0.1); }
        .tech-logo { font-size: 3rem; margin-bottom: 1.5rem; }
        .why-us { background: linear-gradient(to bottom, #f8f9fa, #f1f3f5); }
        .benefits { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 2rem; }
        .benefit {
          flex: 1; min-width: 300px; background: white; padding: 2.5rem; border-radius: 12px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); transition: all 0.3s ease; border-left: 4px solid var(--secondary);
        }
        .benefit:hover { transform: translateY(-5px); }
        .testimonials { margin-top: 4rem; }
        .testimonial {
          background: white; padding: 2.5rem; border-radius: 12px; margin-bottom: 1.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative;
        }
        .testimonial:before {
          content: '"'; position: absolute; top: -15px; left: 20px; font-size: 4rem;
          color: var(--secondary); opacity: 0.2; font-family: Georgia, serif;
        }
        .testimonial-author { font-weight: bold; margin-top: 1.5rem; color: var(--secondary); font-style: italic; }
        .process { background: white; }
        .process-steps { display: flex; flex-wrap: wrap; gap: 2rem; margin-top: 3rem; position: relative; }
        .process-steps:before {
          content: ""; position: absolute; top: 50px; left: 10%; right: 10%; height: 3px;
          background: var(--secondary); z-index: 1;
        }
        .step {
          flex: 1; min-width: 180px; text-align: center; padding: 2rem 1.5rem; position: relative; z-index: 2;
          background: white; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }
        .step-number {
          background: var(--secondary); color: white; width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-weight: bold;
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(233, 30, 99, 0.3);
        }
        .pricing { background: linear-gradient(to bottom, #f1f3f5, #f8f9fa); }
        .pricing-plans { display: flex; flex-wrap: wrap; gap: 2.5rem; margin-top: 3rem; }
        .plan {
          flex: 1; min-width: 300px; background: white; border-radius: 12px; padding: 2.5rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.05); position: relative; transition: all 0.3s ease;
        }
        .plan.featured { transform: scale(1.05); border: 2px solid var(--secondary); z-index: 2; }
        .plan.featured:hover { transform: scale(1.07); }
        .plan:hover { transform: translateY(-10px); }
        .popular-badge {
          position: absolute; top: -12px; right: 20px; background: var(--secondary); color: white;
          padding: 5px 15px; border-radius: 20px; font-size: 0.9rem; font-weight: bold;
        }
        .plan h3 { color: var(--secondary); border-bottom: 2px solid var(--light); padding-bottom: 1.2rem; margin-bottom: 1.2rem; }
        .price { font-size: 2.8rem; font-weight: bold; color: var(--primary); margin: 1.5rem 0; }
        .plan-features { list-style: none; margin: 2rem 0; padding: 0; }
        .plan-features li { padding: 0.8rem 0; border-bottom: 1px solid #eee; text-align: center; position: relative; padding-left: 1.8rem; }
        .plan-features li:before { content: "•"; color: var(--secondary); position: absolute; left: 0; font-size: 1.5rem; top: 0.4rem; }
        .faq { background: white; }
        .faq-item { margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .faq-question {
          font-weight: bold; color: var(--primary); cursor: pointer; display: flex; justify-content: space-between;
          align-items: center; padding: 1.5rem; background: var(--light); transition: background 0.3s ease; font-size: 1.1rem;
        }
        .faq-question:hover { background: #e9ecef; }
        .faq-answer { padding: 0; max-height: 0; overflow: hidden; transition: all 0.3s ease; }
        .faq-answer.active { padding: 1.5rem; max-height: 500px; }
        .cta {
          background: linear-gradient(135deg, var(--secondary), #c2185b); color: white; text-align: center; padding: 6rem 0;
        }
        .cta h2 { color: white; font-size: 2.5rem; margin-bottom: 1.5rem; }
        .cta p { max-width: 700px; margin: 0 auto 2.5rem; font-size: 1.2rem; }
        .cta .btn { background: white; color: var(--secondary); margin-top: 1.5rem; font-size: 1.2rem; padding: 1rem 2.5rem; }
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

export default QaTestingServices;
