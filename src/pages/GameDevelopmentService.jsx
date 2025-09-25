import React from "react";
import { FaGamepad, FaLaptopCode, FaCube, FaVrCardboard, FaMobileAlt, FaUsers } from "react-icons/fa";

const GameDevelopmentService = () => {
  return (
    <div className="service-page">
      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://img.freepik.com/free-vector/game-development-concept-illustration_114360-8314.jpg"
          alt="Game Development"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Game Development</h1>
          <p>
            Designing and developing immersive, interactive, and engaging games across platforms to entertain and inspire players.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="overview">
        <h2>Overview</h2>
        <p>
          Techlynx Innovations provides end-to-end game development services, from concept design and prototyping 
          to coding, testing, and deployment. Our team blends creativity with cutting-edge technology to deliver 
          exceptional gaming experiences on mobile, PC, console, and VR/AR platforms.
        </p>
      </section>

      {/* Offerings */}
      <section className="offerings">
        <h2>Our Game Development Services</h2>
        <div className="offering-cards">
          <div className="offering-card">
            <FaGamepad className="icon" />
            <h3>PC & Console Games</h3>
            <p>High-performance games developed for PC, PlayStation, Xbox, and other consoles.</p>
          </div>
          <div className="offering-card">
            <FaMobileAlt className="icon" />
            <h3>Mobile Game Development</h3>
            <p>Fun and engaging games for iOS and Android platforms.</p>
          </div>
          <div className="offering-card">
            <FaCube className="icon" />
            <h3>3D & 2D Game Design</h3>
            <p>Immersive 3D environments and creative 2D graphics for all genres.</p>
          </div>
          <div className="offering-card">
            <FaVrCardboard className="icon" />
            <h3>AR/VR Game Development</h3>
            <p>Next-gen gaming experiences with augmented and virtual reality.</p>
          </div>
          <div className="offering-card">
            <FaLaptopCode className="icon" />
            <h3>Game Prototyping</h3>
            <p>Rapid prototyping to bring ideas to life and test gameplay mechanics.</p>
          </div>
          <div className="offering-card">
            <FaUsers className="icon" />
            <h3>Multiplayer & Online Games</h3>
            <p>Build interactive online and multiplayer gaming platforms with real-time engagement.</p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <h2>Our Process</h2>
        <ol>
          <li>Define game concept, story, and target audience</li>
          <li>Create design documents, art, and gameplay mechanics</li>
          <li>Develop game architecture and coding</li>
          <li>Integrate audio, graphics, and effects</li>
          <li>Test gameplay, fix bugs, and optimize performance</li>
          <li>Launch and provide post-release support</li>
        </ol>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <h2>Pricing</h2>
        <p>
          Game development costs depend on the complexity, platform, and features. 
          We offer flexible pricing models for indie projects, enterprise games, and large-scale productions.
        </p>
      </section>

      {/* FAQs */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3>Which platforms do you develop games for?</h3>
          <p>We develop games for mobile (iOS & Android), PC, consoles, and AR/VR devices.</p>
        </div>
        <div className="faq-item">
          <h3>Can you handle both design and development?</h3>
          <p>Yes, we offer end-to-end services including design, coding, graphics, and post-launch support.</p>
        </div>
        <div className="faq-item">
          <h3>Do you build multiplayer games?</h3>
          <p>Absolutely! We specialize in real-time multiplayer and online gaming solutions.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Bring Your Game Idea to Life</h2>
        <p>
          Partner with Techlynx Innovations to create immersive games that captivate players worldwide.
        </p>
        <button className="cta-button">Contact Us</button>
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

export default GameDevelopmentService;
