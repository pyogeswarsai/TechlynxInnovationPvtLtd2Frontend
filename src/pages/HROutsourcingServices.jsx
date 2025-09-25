import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HROutsourcingServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is HR outsourcing?",
      answer: "HR outsourcing allows businesses to delegate HR functions like payroll, compliance, recruitment, and employee engagement to external experts."
    },
    {
      question: "Why should we outsource HR?",
      answer: "Outsourcing reduces costs, saves time, ensures compliance, and allows you to focus on core business operations."
    },
    {
      question: "Do you handle payroll and compliance?",
      answer: "Yes, we provide complete payroll processing, statutory compliance, and tax-related HR services."
    },
    {
      question: "Is HR outsourcing suitable for startups?",
      answer: "Absolutely! Startups benefit the most by getting professional HR services without hiring a full-time HR team."
    },
    {
      question: "Do you provide employee engagement solutions?",
      answer: "Yes, we support employee engagement, training, and HR policy creation as part of our outsourcing solutions."
    }
  ];

  return (
    <div className="hr-outsourcing-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>HR Outsourcing Services</h1>
          <p className="fs-5">Streamline HR operations with expert outsourcing solutions</p>
          <a href="#contact" className="btn">Outsource HR Today</a>
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
                HR Outsourcing
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Focus on Business, Leave HR to Us</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">Techlynx Innovations provides reliable HR outsourcing services that simplify your HR functions and reduce overhead costs.</p>
              <p className="text-body fs-5">From payroll management to compliance and recruitment, our experts ensure your workforce is managed efficiently.</p>
              <p className="text-body fs-5">We serve startups, SMEs, and large enterprises with scalable HR solutions.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1350&q=80" alt="HR Outsourcing" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our HR Outsourcing Services</h2>
          <p className="text-center text-body">Comprehensive HR support for every business size</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">💰</div>
              <h3>Payroll Management</h3>
              <p className="text-primary fs-5">Accurate salary processing and compliance handling.</p>
              <ul>
                <li>Payroll processing</li>
                <li>Tax deductions</li>
                <li>Statutory compliance</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📑</div>
              <h3>Compliance Management</h3>
              <p className="text-primary fs-5">Stay legally compliant with labor laws and regulations.</p>
              <ul>
                <li>PF, ESI, PT, TDS filings</li>
                <li>Labor law compliance</li>
                <li>Audit support</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">👥</div>
              <h3>Recruitment Support</h3>
              <p className="text-primary fs-5">Outsource hiring needs to our recruitment specialists.</p>
              <ul>
                <li>Candidate sourcing</li>
                <li>Screening & interviews</li>
                <li>Onboarding assistance</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎯</div>
              <h3>HR Strategy & Engagement</h3>
              <p className="text-primary fs-5">Enhance workplace culture with effective HR strategies.</p>
              <ul>
                <li>HR policy creation</li>
                <li>Employee engagement</li>
                <li>Training & development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx for HR Outsourcing</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Cost Efficiency</h3>
              <p className="text-dark fs-5">Save costs by outsourcing HR tasks instead of maintaining an in-house HR team.</p>
            </div>
            <div className="benefit">
              <h3>Expertise</h3>
              <p className="text-dark fs-5">Access HR professionals with deep industry knowledge.</p>
            </div>
            <div className="benefit">
              <h3>Scalability</h3>
              <p className="text-dark fs-5">Easily scale HR operations as your business grows.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Techlynx streamlined our payroll and compliance. We focus on growth now."</p>
              <p className="testimonial-author">- Rahul Verma, CFO</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Their HR outsourcing solutions saved us time and reduced overhead costs significantly."</p>
              <p className="testimonial-author">- Neha Kapoor, Startup Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Outsourcing Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Assessment</h3>
              <p className="text-dark">Understand HR needs and define scope of services.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Transition</h3>
              <p className="text-dark">Smooth transfer of HR functions to our team.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p className="text-dark">Handle payroll, compliance, and recruitment processes.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Monitoring</h3>
              <p className="text-dark">Track and review HR performance metrics.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Continuous Support</h3>
              <p className="text-dark">Ongoing HR support for employees and management.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">HR Outsourcing Packages</h2>
          <p className="text-center text-dark">Flexible HR outsourcing plans to fit your business</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Basic</h3>
              <p className="text-dark">For small businesses</p>
              <div className="price">₹500</div>
              <ul className="plan-features">
                <li>Payroll processing</li>
                <li>Basic compliance</li>
                <li>Email support</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Standard</h3>
              <p className="text-dark">For growing businesses</p>
              <div className="price">₹1,500</div>
              <ul className="plan-features">
                <li>Payroll & compliance</li>
                <li>Recruitment support</li>
                <li>Employee engagement</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p className="text-dark">For large organizations</p>
              <div className="price">Custom Pricing</div>
              <ul className="plan-features">
                <li>Full HR outsourcing</li>
                <li>Dedicated HR manager</li>
                <li>24/7 support</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">HR Outsourcing FAQs</h2>
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
          <h2>Want to Simplify HR?</h2>
          <p>Let Techlynx Innovations handle your HR needs while you focus on business growth.</p>
          <Link to="/contact-us" className="btn">Get Started</Link>
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

export default HROutsourcingServices;
