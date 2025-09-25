import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HRRecruitmentServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What industries do you recruit for?",
      answer: "We recruit across IT, finance, healthcare, engineering, and more depending on client requirements."
    },
    {
      question: "Do you provide temporary and permanent staffing?",
      answer: "Yes, we offer both permanent hiring and temporary/contract staffing solutions."
    },
    {
      question: "How do you ensure candidate quality?",
      answer: "We use thorough screening, background checks, and technical assessments to ensure only top-quality candidates."
    },
    {
      question: "Can you handle bulk hiring?",
      answer: "Absolutely! We specialize in campus recruitment, job fairs, and bulk hiring drives."
    },
    {
      question: "Do you offer HR consultancy?",
      answer: "Yes, along with recruitment, we provide HR policy consultation and talent management services."
    }
  ];

  return (
    <div className="hr-recruitment-services">
      {/* Hero Section */}
      <section className="hero" >
        <div className="container">
          <h1>HR Recruitment Services</h1>
          <p className="fs-5">Connecting businesses with the right talent</p>
          <a href="#contact" className="btn">Hire Top Talent</a>
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
                HR Recruitment
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Empowering Businesses with the Right People</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we provide end-to-end HR recruitment services that help organizations hire the right talent quickly and efficiently.</p>
              <p className="text-body fs-5">Our team leverages advanced sourcing strategies, assessments, and interviews to ensure quality hiring.</p>
              <p className="text-body fs-5">Whether you need niche professionals or bulk hiring, we are your trusted recruitment partner.</p>
            </div>
            <div className="overview-image">
              <img src="https://static.vecteezy.com/system/resources/previews/014/770/514/large_2x/executives-touch-human-resource-network-structure-hr-effective-management-and-recruitment-of-hr-effective-organizational-structure-training-employment-practice-photo.jpg" alt="HR Recruitment" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our HR Recruitment Services</h2>
          <p className="text-center text-body">Tailored solutions for all hiring needs</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🧑‍💼</div>
              <h3>Permanent Staffing</h3>
              <p className="text-primary fs-5">Hire long-term employees who fit your company culture.</p>
              <ul>
                <li>Executive search</li>
                <li>Mid-level recruitment</li>
                <li>Leadership hiring</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🕒</div>
              <h3>Temporary & Contract Staffing</h3>
              <p className="text-primary fs-5">Flexible workforce solutions for short-term projects.</p>
              <ul>
                <li>Project-based staffing</li>
                <li>Contract-to-hire</li>
                <li>Seasonal workforce</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎓</div>
              <h3>Campus Recruitment</h3>
              <p className="text-primary fs-5">Engage top talent from universities and colleges.</p>
              <ul>
                <li>Job fairs</li>
                <li>College tie-ups</li>
                <li>Graduate programs</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📋</div>
              <h3>HR Consulting</h3>
              <p className="text-primary fs-5">Expert guidance on HR policies and workforce management.</p>
              <ul>
                <li>HR strategy</li>
                <li>Employee engagement</li>
                <li>Policy development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx for Recruitment</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Vast Talent Network</h3>
              <p className="text-dark fs-5">We connect you with a wide pool of pre-screened candidates.</p>
            </div>
            <div className="benefit">
              <h3>Quick Turnaround</h3>
              <p className="text-dark fs-5">Reduce hiring time with our efficient recruitment process.</p>
            </div>
            <div className="benefit">
              <h3>Customized Solutions</h3>
              <p className="text-dark fs-5">We tailor recruitment strategies to fit your unique needs.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Techlynx helped us fill critical positions within weeks. Excellent service!"</p>
              <p className="testimonial-author">- Priya Sharma, HR Head</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Their campus hiring drive brought us top graduates we’re proud to have onboard."</p>
              <p className="testimonial-author">- Rakesh Nair, Recruitment Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Recruitment Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Requirement Analysis</h3>
              <p className="text-dark">Understand hiring needs and job roles.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Sourcing</h3>
              <p className="text-dark">Identify and reach potential candidates.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Screening & Interviews</h3>
              <p className="text-dark">Assess skills, experience, and cultural fit.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Selection</h3>
              <p className="text-dark">Shortlist and finalize candidates with client input.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Onboarding</h3>
              <p className="text-dark">Ensure smooth joining and integration process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Recruitment Plans</h2>
          <p className="text-center text-dark">Flexible plans to suit every business</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Startup</h3>
              <p className="text-dark">For small teams and early-stage companies</p>
              <div className="price">From ₹500/hire</div>
              <ul className="plan-features">
                <li>Basic candidate sourcing</li>
                <li>1–2 positions</li>
                <li>Email support</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Growth</h3>
              <p className="text-dark">Best for scaling businesses</p>
              <div className="price">From ₹1,000/hire</div>
              <ul className="plan-features">
                <li>End-to-end recruitment</li>
                <li>Up to 10 positions</li>
                <li>Dedicated recruiter</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p className="text-dark">For large organizations</p>
              <div className="price">Custom Pricing</div>
              <ul className="plan-features">
                <li>Bulk hiring & campus drives</li>
                <li>Executive search</li>
                <li>Dedicated account manager</li>
              </ul>
              <a href="#contact" className="btn">Get a Quote</a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">Recruitment FAQs</h2>
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
          <h2>Need to Hire Top Talent?</h2>
          <p>Let Techlynx Innovations find the right candidates for your organization.</p>
          <Link to="/contact-us" className="btn">Get Started</Link>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #00b894;
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
          box-shadow: 0 4px 6px rgba(0, 184, 148, 0.3);
        }

        .btn:hover {
          background: #009c7b;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(0, 184, 148, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(0, 184, 148, 0.8));
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

        .solutions { background: white; }

        .solution-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .solution-tab {
          padding: 0.9rem 2.2rem;
          background: #a061ffff;
          border: none;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          margin: 0.5rem;
          border-radius: 30px;
          font-size: 1.1rem;
        }

        .solution-tab.active {
          background: #ff4757;
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
          box-shadow: 0 5px 10px rgba(0, 184, 148, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #009c7b);
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
      `}</style>    </div>
  );
};

export default HRRecruitmentServices;
