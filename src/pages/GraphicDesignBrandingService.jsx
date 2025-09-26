import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GraphicDesignBrandingService = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStack, setActiveStack] = useState('design');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleStackChange = (stack) => {
    setActiveStack(stack);
  };

  const faqs = [
    {
      question: "What is included in your branding services?",
      answer: "We provide logo design, color palette creation, typography, brand guidelines, and complete visual identity design."
    },
    {
      question: "Can you redesign an existing brand identity?",
      answer: "Yes, we help refresh or completely rebrand your business identity while maintaining brand recognition."
    },
    {
      question: "Do you provide marketing materials?",
      answer: "Absolutely. We design brochures, business cards, social media creatives, ads, presentations, and more."
    },
    {
      question: "How do you ensure uniqueness in design?",
      answer: "We conduct competitor research, brainstorm creative concepts, and ensure all designs reflect your brand values and story."
    },
    {
      question: "Do you provide digital assets for online branding?",
      answer: "Yes, we design digital assets such as banners, UI/UX elements, social media templates, and brand kits."
    }
  ];

  const stacks = {
    design: [
      { name: "Adobe Photoshop", logo: "🖼️", description: "Photo editing and creative graphics" },
      { name: "Adobe Illustrator", logo: "🎨", description: "Vector graphics and logo design" },
      { name: "CorelDRAW", logo: "✏️", description: "Professional vector illustration" },
      { name: "Canva", logo: "📱", description: "Quick and modern design templates" }
    ],
    branding: [
      { name: "Logo Design", logo: "🌟", description: "Unique logos that represent your brand identity" },
      { name: "Typography", logo: "🔤", description: "Custom font styling for consistency" },
      { name: "Color Theory", logo: "🌈", description: "Strategic color palettes to match your brand personality" },
      { name: "Brand Guidelines", logo: "📘", description: "Complete branding manuals for consistency" }
    ],
    digital: [
      { name: "Social Media Design", logo: "📢", description: "Creative posts, ads, and stories for all platforms" },
      { name: "UI/UX Design", logo: "💻", description: "Modern interfaces for websites and apps" },
      { name: "Marketing Collateral", logo: "📰", description: "Brochures, flyers, presentations" },
      { name: "Motion Graphics", logo: "🎞️", description: "Animated visuals and explainer videos" }
    ]
  };

  return (
    <div className="graphic-design-branding">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Graphic Design & Branding</h1>
          <p className="fs-5">Build a powerful and memorable brand identity with stunning visuals.</p>
          <a href="#contact" className="btn">Request a Free Brand Audit</a>
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
                Graphic Design & Branding
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Creative Design That Inspires</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we help brands stand out with unique, modern, and impactful graphic designs.</p>
              <p className="text-body fs-5">Our team creates everything from logos and marketing materials to full branding packages that establish a lasting identity.</p>
              <p className="text-body fs-5">We blend creativity with strategy to make your brand visually consistent across digital and print platforms.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1350&q=80" alt="Graphic Design" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Graphic Design & Branding Services</h2>
          <p className="text-center text-body">Creative solutions to build and elevate your brand</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🌟</div>
              <h3>Logo & Identity</h3>
              <p className="text-primary fs-5">Unique logo designs and complete brand identity kits.</p>
              <ul>
                <li>Logo design</li>
                <li>Typography</li>
                <li>Color palette</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📢</div>
              <h3>Marketing Materials</h3>
              <p className="text-primary fs-5">Print and digital designs that promote your business effectively.</p>
              <ul>
                <li>Brochures & flyers</li>
                <li>Business cards</li>
                <li>Posters & ads</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📱</div>
              <h3>Digital Branding</h3>
              <p className="text-primary fs-5">Engaging designs for websites and social platforms.</p>
              <ul>
                <li>Social media creatives</li>
                <li>Web banners</li>
                <li>Email templates</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎞️</div>
              <h3>Motion Graphics</h3>
              <p className="text-primary fs-5">Dynamic animations and videos to bring your brand to life.</p>
              <ul>
                <li>Explainer videos</li>
                <li>Animated logos</li>
                <li>Promotional videos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Expertise */}
      <section className="stacks">
        <div className="container">
          <h2 className="text-center">Our Design Tools & Expertise</h2>
          <p className="text-center text-dark f5-5">We craft designs using industry-leading tools</p>
          <div className="stack-tabs">
            <button className={`stack-tab ${activeStack === 'design' ? 'active' : ''}`} onClick={() => handleStackChange('design')}>
              Design Tools
            </button>
            <button className={`stack-tab ${activeStack === 'branding' ? 'active' : ''}`} onClick={() => handleStackChange('branding')}>
              Branding
            </button>
            <button className={`stack-tab ${activeStack === 'digital' ? 'active' : ''}`} onClick={() => handleStackChange('digital')}>
              Digital Media
            </button>
          </div>
          <div className="tech-grid">
            {stacks[activeStack].map((tech, index) => (
              <div className="tech-card" key={index}>
                <div className="tech-logo">{tech.logo}</div>
                <h3>{tech.name}</h3>
                <p className="text-dark">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="text-center">Graphic Design & Branding FAQs</h2>
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
          <h2>Let’s Design Your Brand Story</h2>
          <p>Contact us today to create a unique and powerful brand identity that resonates with your audience.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
        </div>
      </section>

      <style jsx>{`
        :root {
          --primary: #2c3e50;
          --secondary: #e67e22;
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
          box-shadow: 0 4px 6px rgba(230, 126, 34, 0.3);
        }

        .btn:hover {
          background: #d35400;
          transform: translateY(-3px);
          box-shadow: 0 6px 8px rgba(230, 126, 34, 0.4);
        }

        .text-center { text-align: center; }

        section { padding: 5rem 0; }

        .hero {
          background: linear-gradient(135deg, rgba(44, 62, 80, 0.85), rgba(230, 126, 34, 0.8));
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

        .stacks { background: white; }

        .stack-tabs {
          display: flex;
          justify-content: center;
          margin: 2.5rem 0;
          flex-wrap: wrap;
        }

        .stack-tab {
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

        .stack-tab.active {
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
          box-shadow: 0 5px 10px rgba(230, 126, 34, 0.3);
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
          background: linear-gradient(135deg, var(--secondary), #d35400);
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

export default GraphicDesignBrandingService;
