import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VideoEditingService = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [activeStack, setActiveStack] = useState('editing');

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleStackChange = (stack) => {
    setActiveStack(stack);
  };

  const faqs = [
    {
      question: "What types of videos do you edit?",
      answer: "We edit corporate videos, ads, social media reels, explainer videos, YouTube content, music videos, and event highlights."
    },
    {
      question: "Do you create motion graphics?",
      answer: "Yes, we design professional motion graphics, intros, and animated transitions to enhance your videos."
    },
    {
      question: "Can you edit videos for social media?",
      answer: "Absolutely! We create engaging short-form videos optimized for Instagram, TikTok, Facebook, and YouTube."
    },
    {
      question: "Do you provide color correction and grading?",
      answer: "Yes, we offer cinematic color correction and grading to give your videos a professional look."
    },
    {
      question: "Which tools do you use?",
      answer: "We use Adobe Premiere Pro, After Effects, Final Cut Pro, DaVinci Resolve, and advanced plugins."
    }
  ];

  const stacks = {
    editing: [
      { name: "Adobe Premiere Pro", logo: "🎬", description: "Industry-standard editing for films & commercials" },
      { name: "Final Cut Pro", logo: "🍏", description: "Professional editing for Apple/macOS workflows" },
      { name: "DaVinci Resolve", logo: "🎨", description: "Advanced color grading & video post-production" },
      { name: "Filmora", logo: "✨", description: "Quick editing for social media & short videos" }
    ],
    graphics: [
      { name: "After Effects", logo: "⚡", description: "Motion graphics, intros, and VFX" },
      { name: "Cinema 4D", logo: "🎭", description: "3D motion graphics integration" },
      { name: "Blender", logo: "🐵", description: "3D animation & visual effects" },
      { name: "Element 3D", logo: "🌐", description: "3D models inside After Effects" }
    ],
    sound: [
      { name: "Adobe Audition", logo: "🎧", description: "Audio editing & mixing for videos" },
      { name: "Pro Tools", logo: "🎹", description: "Professional audio post-production" },
      { name: "Logic Pro", logo: "🎵", description: "Music editing & sound effects" },
      { name: "Sound Design", logo: "🔊", description: "Custom soundscapes & effects" }
    ]
  };

  return (
    <div className="video-editing">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Video Editing Services</h1>
          <p className="fs-5">Transform raw footage into captivating stories with professional editing, effects, and sound design.</p>
          <a href="#contact" className="btn">Request Free Demo</a>
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
                Video Editing
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Crafting Stories Through Visuals</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we turn your raw footage into polished, cinematic videos that engage and inspire audiences.</p>
              <p className="text-body fs-5">Our team specializes in corporate video editing, ads, social media reels, and storytelling for brands of all sizes.</p>
              <p className="text-body fs-5">From transitions and motion graphics to sound design and color grading — we deliver videos that leave an impact.</p>
            </div>
            <div className="overview-image">
              <img src="https://images.unsplash.com/photo-1586899028174-e7098604235b?auto=format&fit=crop&w=1350&q=80" alt="Video Editing" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our Video Editing Services</h2>
          <p className="text-center text-body">Professional editing solutions for businesses, creators, and brands</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">🎬</div>
              <h3>Corporate & Ads</h3>
              <p className="text-primary fs-5">Polished videos for business promotions and ads.</p>
              <ul>
                <li>Corporate films</li>
                <li>Product commercials</li>
                <li>Explainer videos</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📱</div>
              <h3>Social Media Editing</h3>
              <p className="text-primary fs-5">Short-form content designed for digital platforms.</p>
              <ul>
                <li>Instagram Reels</li>
                <li>YouTube videos</li>
                <li>TikTok & Facebook videos</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎨</div>
              <h3>Motion Graphics</h3>
              <p className="text-primary fs-5">Engaging animations and transitions for branding.</p>
              <ul>
                <li>Logo animations</li>
                <li>Dynamic titles</li>
                <li>Infographic videos</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🎧</div>
              <h3>Sound & Color</h3>
              <p className="text-primary fs-5">Cinematic sound design and color grading.</p>
              <ul>
                <li>Sound mixing</li>
                <li>Voiceover integration</li>
                <li>Color correction</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Expertise */}
      <section className="stacks">
        <div className="container">
          <h2 className="text-center">Our Video Editing Expertise</h2>
          <p className="text-center text-dark f5-5">Advanced tools for world-class video production</p>
          <div className="stack-tabs">
            <button className={`stack-tab ${activeStack === 'editing' ? 'active' : ''}`} onClick={() => handleStackChange('editing')}>
              Editing
            </button>
            <button className={`stack-tab ${activeStack === 'graphics' ? 'active' : ''}`} onClick={() => handleStackChange('graphics')}>
              Motion Graphics
            </button>
            <button className={`stack-tab ${activeStack === 'sound' ? 'active' : ''}`} onClick={() => handleStackChange('sound')}>
              Sound & Music
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
          <h2 className="text-center">Video Editing FAQs</h2>
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
          <h2>Need Professional Video Editing?</h2>
          <p>Let us edit, enhance, and bring your footage to life with stunning visuals and sound.</p>
          <Link to="/contact-us" className="btn">Start Your Project</Link>
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

export default VideoEditingService;
