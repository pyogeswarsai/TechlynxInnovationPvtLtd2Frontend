import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DigitalMarketingServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is included in Digital Marketing?",
      answer: "Our digital marketing services include SEO, social media marketing, PPC, email campaigns, and content marketing."
    },
    {
      question: "How long does it take to see results?",
      answer: "SEO usually takes 3-6 months to show measurable results, while PPC and social media campaigns can deliver faster outcomes."
    },
    {
      question: "Do you handle social media management?",
      answer: "Yes, we manage social media accounts, create content, and run targeted ad campaigns."
    },
    {
      question: "Can digital marketing help my small business?",
      answer: "Absolutely! Digital marketing helps businesses of all sizes increase visibility, generate leads, and boost sales."
    },
    {
      question: "Do you provide analytics and reports?",
      answer: "Yes, we provide detailed performance reports to track ROI and campaign effectiveness."
    }
  ];

  return (
    <div className="digital-marketing-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Digital Marketing Services</h1>
          <p className="fs-5">Boost your online presence and drive business growth</p>
          <a href="#contact" className="btn">Get Free Marketing Audit</a>
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
                Digital Marketing
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Grow Your Business Online</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we craft tailored digital marketing strategies to help your business attract, engage, and convert customers online.</p>
              <p className="text-body fs-5">From SEO to paid ads, our team ensures your brand gets maximum visibility across search engines and social platforms.</p>
              <p className="text-body fs-5">We combine data-driven strategies and creative content to deliver measurable growth for your business.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=1350&q=80" alt="Digital Marketing" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Digital Marketing Services</h2>
          <p className="text-center text-body">Comprehensive strategies to build your brand online</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🔍</div>
              <h3>SEO Optimization</h3>
              <p className="text-primary fs-5">Improve visibility and rank higher on search engines.</p>
              <ul>
                <li>On-page & off-page SEO</li>
                <li>Keyword research</li>
                <li>Technical SEO</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📱</div>
              <h3>Social Media Marketing</h3>
              <p className="text-primary fs-5">Engage audiences with creative campaigns.</p>
              <ul>
                <li>Social media management</li>
                <li>Ad campaigns (Facebook, Instagram, LinkedIn)</li>
                <li>Content creation</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">💻</div>
              <h3>PPC Advertising</h3>
              <p className="text-primary fs-5">Get instant traffic with Google Ads & display campaigns.</p>
              <ul>
                <li>Google & Bing Ads</li>
                <li>Remarketing campaigns</li>
                <li>Conversion optimization</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">✉️</div>
              <h3>Email & Content Marketing</h3>
              <p className="text-primary fs-5">Build customer relationships through engaging content.</p>
              <ul>
                <li>Email campaigns</li>
                <li>Blog & article writing</li>
                <li>Lead nurturing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx for Digital Marketing</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Data-Driven Approach</h3>
              <p className="text-dark fs-5">We track every campaign to maximize ROI.</p>
            </div>
            <div className="benefit">
              <h3>Creative Campaigns</h3>
              <p className="text-dark fs-5">Stand out with engaging visuals and strategies.</p>
            </div>
            <div className="benefit">
              <h3>Proven Results</h3>
              <p className="text-dark fs-5">We’ve helped businesses boost traffic and sales consistently.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Our sales skyrocketed thanks to Techlynx’s SEO and PPC strategies!"</p>
              <p className="testimonial-author">- John Davis, E-commerce Founder</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Their social media team grew our followers and engagement by 300% in 6 months."</p>
              <p className="testimonial-author">- Anjali Mehta, Marketing Head</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our Marketing Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Research & Strategy</h3>
              <p className="text-dark">Understand your business goals and audience.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Campaign Setup</h3>
              <p className="text-dark">Design ads, content, and SEO strategies.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Execution</h3>
              <p className="text-dark">Launch and manage campaigns across channels.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Monitoring</h3>
              <p className="text-dark">Track performance using analytics tools.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Optimization</h3>
              <p className="text-dark">Refine strategies for maximum ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">Digital Marketing Packages</h2>
          <p className="text-center text-dark">Flexible plans to fit your business needs</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Starter</h3>
              <p className="text-dark">Perfect for small businesses</p>
              <div className="price">₹1,000+</div>
              <ul className="plan-features">
                <li>Basic SEO</li>
                <li>Social media setup</li>
                <li>Email campaigns</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Growth</h3>
              <p className="text-dark">For businesses ready to scale</p>
              <div className="price">₹3,000+</div>
              <ul className="plan-features">
                <li>Advanced SEO</li>
                <li>Social media ads</li>
                <li>PPC campaigns</li>
              </ul>
              <a href="#contact" className="btn">Choose Plan</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p className="text-dark">Comprehensive strategy for large businesses</p>
              <div className="price">₹8,000+</div>
              <ul className="plan-features">
                <li>Full SEO management</li>
                <li>Content marketing</li>
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
          <h2 className="text-center">Digital Marketing FAQs</h2>
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
          <h2>Ready to Grow Your Business?</h2>
          <p>Let our digital marketing experts take your brand to the next level.</p>
          <Link to="/contact-us" className="btn">Get Started</Link>
        </div>
      </section>
      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #9b59b6;
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
          transition: all 0.3s ease; box-shadow: 0 4px 6px rgba(155, 89, 182, 0.3);
        }
        .btn:hover { background: #8e44ad; transform: translateY(-3px); box-shadow: 0 6px 8px rgba(155, 89, 182, 0.4); }
        .text-center { text-align: center; }
        section { padding: 5rem 0; }
        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(155, 89, 182, 0.8));
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
        .platforms { background: white; }
        .platform-tabs { display: flex; justify-content: center; margin: 2.5rem 0; flex-wrap: wrap; }
        .platform-tab {
          padding: 0.9rem 2.2rem; background: #ff6f61; border: none; font-weight: 600; cursor: pointer;
          transition: all 0.3s ease; margin: 0.5rem; border-radius: 30px; font-size: 1.1rem;
        }
        .platform-tab.active { background: var(--secondary); color: white; }
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
          font-size: 1.5rem; box-shadow: 0 5px 10px rgba(155, 89, 182, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #8e44ad); color: white; text-align: center; padding: 6rem 0;
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

export default DigitalMarketingServices;
