import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DevOpsServices = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is DevOps?",
      answer: "DevOps is a culture and set of practices that combines software development (Dev) and IT operations (Ops) to shorten development cycles, improve software quality, and enable continuous delivery."
    },
    {
      question: "What is CI/CD?",
      answer: "CI/CD (Continuous Integration and Continuous Delivery/Deployment) automates software builds, testing, and deployment, ensuring faster and more reliable releases."
    },
    {
      question: "Which tools do you use for DevOps?",
      answer: "We use Jenkins, GitHub Actions, GitLab CI, Docker, Kubernetes, Ansible, Terraform, AWS, Azure, and GCP tools depending on project requirements."
    },
    {
      question: "How does DevOps benefit businesses?",
      answer: "DevOps improves collaboration, reduces downtime, increases deployment speed, and ensures better scalability and reliability of applications."
    },
    {
      question: "Can you integrate CI/CD into existing projects?",
      answer: "Yes, we can design and implement CI/CD pipelines tailored for your existing infrastructure and technology stack."
    }
  ];

  return (
    <div className="devops-services">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>DevOps & CI/CD Services</h1>
          <p className="fs-4">Accelerating software delivery with automation and continuous integration</p>
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
                DevOps & CI/CD
              </li>
            </ol>
          </nav>
        </div>
        <div className="container">
          <h2 className="text-center">Streamline Your Software Delivery</h2>
          <div className="overview-content">
            <div className="overview-text">
              <p className="text-body fs-5">At Techlynx Innovations, we empower businesses with DevOps practices that unify development and operations, ensuring faster and more reliable releases.</p>
              <p className="text-body fs-5">Our CI/CD services automate the build, test, and deployment cycle, enabling you to deliver new features quickly and securely.</p>
              <p className="text-body fs-5">Whether you’re a startup or an enterprise, our DevOps expertise helps you scale with agility and efficiency.</p>
            </div>
            <div className="overview-image">
              <img src="https://th.bing.com/th/id/OIP.1-NFr14Kbd5o1AqQ0KW9XQHaEP?w=295&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="DevOps & CI/CD" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="offerings">
        <div className="container">
          <h2 className="text-center">Our DevOps & CI/CD Services</h2>
          <p className="text-center text-body">Comprehensive solutions for continuous delivery and infrastructure automation</p>
          <div className="offering-grid">
            <div className="offering-card">
              <div className="icon">⚡</div>
              <h3>CI/CD Pipeline Setup</h3>
              <p className="text-primary fs-5">Automated build, test, and deployment pipelines.</p>
              <ul>
                <li>Continuous integration</li>
                <li>Continuous delivery</li>
                <li>Version control integration</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🐳</div>
              <h3>Containerization</h3>
              <p className="text-primary fs-5">Docker & Kubernetes solutions for scalable deployments.</p>
              <ul>
                <li>Microservices deployment</li>
                <li>Orchestration</li>
                <li>Container security</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">🔧</div>
              <h3>Infrastructure as Code</h3>
              <p className="text-primary fs-5">Automating infrastructure with Terraform & Ansible.</p>
              <ul>
                <li>Cloud provisioning</li>
                <li>Configuration management</li>
                <li>Scalable infrastructure</li>
              </ul>
            </div>
            <div className="offering-card">
              <div className="icon">📈</div>
              <h3>Monitoring & Logging</h3>
              <p className="text-primary fs-5">Ensuring visibility and reliability in production.</p>
              <ul>
                <li>Centralized logging</li>
                <li>Real-time monitoring</li>
                <li>Alerting systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="text-center text-dark f5-5">Why Choose Techlynx for DevOps</h2>
          <div className="benefits">
            <div className="benefit">
              <h3>Faster Delivery</h3>
              <p className="text-dark fs-5">CI/CD pipelines accelerate release cycles significantly.</p>
            </div>
            <div className="benefit">
              <h3>Reliable Systems</h3>
              <p className="text-dark fs-5">Continuous monitoring ensures system uptime and stability.</p>
            </div>
            <div className="benefit">
              <h3>Cloud Expertise</h3>
              <p className="text-dark fs-5">AWS, Azure, and GCP-based infrastructure solutions.</p>
            </div>
          </div>
          <div className="testimonials">
            <h3 className="text-center">What Our Clients Say</h3>
            <div className="testimonial">
              <p className="text-dark fs-5">"Techlynx set up a robust CI/CD pipeline for us, cutting deployment times by 70%."</p>
              <p className="testimonial-author">- Michael Carter, CTO</p>
            </div>
            <div className="testimonial">
              <p className="text-dark fs-5">"Our cloud migration and DevOps automation transformed how we deliver software."</p>
              <p className="testimonial-author">- Ayesha Khan, Product Manager</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="process">
        <div className="container">
          <h2 className="text-center">Our DevOps Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Assessment</h3>
              <p className="text-dark">Analyzing current workflows and infrastructure.</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Planning</h3>
              <p className="text-dark">Designing a tailored DevOps roadmap for your business.</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Implementation</h3>
              <p className="text-dark">Setting up CI/CD pipelines, IaC, and automation tools.</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Testing</h3>
              <p className="text-dark">Validating automation, deployments, and monitoring tools.</p>
            </div>
            <div className="step">
              <div className="step-number">5</div>
              <h3>Optimization</h3>
              <p className="text-dark">Continuous improvement of processes and tools.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="pricing">
        <div className="container">
          <h2 className="text-center">DevOps & CI/CD Pricing</h2>
          <p className="text-center text-dark">Flexible plans based on your infrastructure size</p>
          <div className="pricing-plans">
            <div className="plan">
              <h3>Starter</h3>
              <p className="text-dark">For startups adopting DevOps</p>
              <div className="price">₹8,000+</div>
              <ul className="plan-features">
                <li>Basic CI/CD pipeline</li>
                <li>Cloud setup</li>
                <li>Monitoring dashboard</li>
                <li>1 month support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan featured">
              <div className="popular-badge">Most Popular</div>
              <h3>Growth</h3>
              <p className="text-dark">For scaling businesses</p>
              <div className="price">₹20,000+</div>
              <ul className="plan-features">
                <li>Advanced CI/CD pipelines</li>
                <li>Container orchestration</li>
                <li>Infrastructure as Code</li>
                <li>3 months support</li>
              </ul>
              <a href="#contact" className="btn">Get Started</a>
            </div>
            <div className="plan">
              <h3>Enterprise</h3>
              <p className="text-dark">For large organizations</p>
              <div className="price">₹50,000+</div>
              <ul className="plan-features">
                <li>Multi-cloud DevOps</li>
                <li>High availability setups</li>
                <li>Custom automation</li>
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
          <h2 className="text-center">DevOps & CI/CD FAQs</h2>
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
          <h2>Ready to Automate Your Delivery?</h2>
          <p>Contact us for a consultation on how DevOps and CI/CD can transform your development cycle.</p>
          <Link to="/contact-us" className="btn">Get in Touch</Link>
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
      `}</style>    </div>
  );
};

export default DevOpsServices;
