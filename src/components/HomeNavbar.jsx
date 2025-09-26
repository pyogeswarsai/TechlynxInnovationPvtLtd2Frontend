import React, { useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Homepage.css";

import { Link } from "react-router-dom";

function HomeNavbar() {
  useEffect(() => {
    // Enable submenu toggle on mobile
    const submenus = document.querySelectorAll(".dropdown-submenu > .dropdown-item");

    submenus.forEach((item) => {
      item.addEventListener("click", (e) => {
        if (window.innerWidth < 992) { // Bootstrap lg breakpoint
          e.preventDefault();
          let submenu = item.nextElementSibling;
          if (submenu) {
            submenu.classList.toggle("show");
          }
        }
      });
    });

    return () => {
      submenus.forEach((item) => {
        item.replaceWith(item.cloneNode(true)); // cleanup
      });
    };
  }, []);

  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm">
      <div  className="navbar-container container ">
        <Navbar.Brand
          href="/"
          className="d-flex align-items-center text-wrap fs-4 fw-bold text-dark brand-hover"
        >
          <img
            src="/logo.jpg"
            alt="Techlynx Logo"
            width="45"
            height="45"
            className="me-2"
          />
          <span className="brand-text">Techlynx Innovations Pvt. Ltd</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto px-3  fs-5">
            {/* Multi-Level Dropdown */}
            <Link
                to="/"
                className="nav-link "
                role="button"
              >
                Home
              </Link>
            <div className="nav-item px-2 dropdown multi-dropdown ">
              <Link
                to=""
                className=" px-2 nav-link dropdown-toggle"
                role="button"
              >
                 All Courses
              </Link>
              <ul className="dropdown-menu">

                <li className="dropdown-submenu">
                  <Link to="" className=" dropdown-item">Full Stack Developer</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/java-full-stack" className="dropdown-item">Java full stack</Link></li>
                    <li><Link to="/courses/python-full-stack" className="dropdown-item">Python full stack</Link></li>
                    <li><Link to="/courses/net-full-stack" className="dropdown-item">.NET full stack</Link></li>
                    <li><Link to="/courses/mern-full-stack" className="dropdown-item">MERN full stack</Link></li>
                    <li><Link to="/courses/mean-full-stack" className="dropdown-item">MEAN full stack</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className=" dropdown-item">Programming Languages <br/> & Frameworks</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/java" className="dropdown-item">Java</Link></li>
                    <li><Link to="/courses/python" className="dropdown-item">Python</Link></li>
                    <li><Link to="/courses/node" className="dropdown-item">Node.Js</Link></li>
                    <li><Link to="/courses/flutter" className="dropdown-item">Flutter</Link></li>
                    <li><Link to="/courses/react-native" className="dropdown-item">React Native</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className=" px-3 dropdown-item">Web Development</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/frontend-development" className="dropdown-item">Frontend Developer</Link></li>
                    <li><Link to="/courses/backend-development" className="dropdown-item">Backend Developer</Link></li>
                    <li><Link to="/courses/web-development" className="dropdown-item">Web Developmer</Link></li>
                    <li><Link to="/courses/php-development" className="dropdown-item">PHP Developmer</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Testing & QA</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/manual-testing" className="dropdown-item">Manual Testing</Link></li>
                    <li><Link to="/courses/automation-testing" className="dropdown-item">Automation Testing</Link></li>
                    <li><Link to="/courses/selenium" className="dropdown-item">Selenium</Link></li>
                    <li><Link to="/courses/junit" className="dropdown-item">Junit</Link></li>
                    <li><Link to="/courses/jmeter" className="dropdown-item">Jmeter</Link></li>
                  </ul>
                </li>

                <li className=" dropdown-submenu">
                  <Link to="" className="dropdown-item">Data Science</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/datascience" className="dropdown-item">Data Science</Link></li>
                    <li><Link to="/courses/data-analytics" className="dropdown-item">Data Analytics</Link></li>
                    <li><Link to="/courses/powerbi" className="dropdown-item">Power BI</Link></li>
                    <li><Link to="/courses/tableau" className="dropdown-item">Tableau</Link></li>
                  </ul>
                </li>

                <li className=" dropdown-submenu">
                  <Link to="" className="dropdown-item">AI & ML</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/artificial-intelligence" className="dropdown-item">Artificial Intelligence</Link></li>
                    <li><Link to="/courses/machine-learning" className="dropdown-item">Machine learning</Link></li>
                    <li><Link to="/courses/deep-learning" className="dropdown-item">Deep learning</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Security & Emerging Tech</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/cybersecurity" className="dropdown-item">Cybersecurity</Link></li>
                    <li><Link to="/courses/blockchain-integration" className="dropdown-item">Blockchain Integration</Link></li>
                    <li><Link to="/courses/devops-engineering" className="dropdown-item">DevOps Engineering</Link></li>
                    <li><Link to="/courses/cloud-computing" className="dropdown-item">Cloud Computing</Link></li>
                  </ul>
                </li>

                <li className=" dropdown-submenu">
                  <Link to="" className="dropdown-item">Database Management</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/database-administration" className="dropdown-item">Database Administration</Link></li>
                    <li><Link to="/courses/mysql" className="dropdown-item">MySQL</Link></li>
                    <li><Link to="/courses/mongoDB" className="dropdown-item">MongoDB</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Business & Marketing</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/business-analyst" className="dropdown-item">Business Analyst</Link></li>
                    <li><Link to="/courses/business-intelligence" className="dropdown-item">Business Intelligence</Link></li>
                    <li><Link to="/courses/digital-marketing" className="dropdown-item">Digital Marketing</Link></li>
                  </ul>
                </li>                                                                               

                <li>
                  <Link to="/courses" className="dropdown-item fw-bold">View All Courses</Link>
                </li>
              </ul>
            </div>

            <div className="nav-item dropdown multi-dropdown ">
              <Link
                to=""
                className="nav-link dropdown-toggle"
                role="button"
              >
                 Our Services
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/services/full-stack-development-service" className="dropdown-item">Full Stack Development</Link>
                </li>
                <li>
                  <Link to="/services/web-development-service" className="dropdown-item">Web Development</Link>
                </li>
                <li>
                  <Link to="/services/mobile-app-development-service" className="dropdown-item">Mobile App Development</Link>
                </li>
                <li>
                  <Link to="/services/ai-solutions-service" className="dropdown-item">AI Solutions</Link>
                </li>
                <li>
                  <Link to="/services/data-analytics-service" className="dropdown-item">Data Analytics</Link>
                </li>
                <li>
                  <Link to="/services/cloud-services-service" className="dropdown-item">Cloud Services</Link>
                </li>
                <li>
                  <Link to="/services/devops-cicd-service" className="dropdown-item">DevOps & CI/CD</Link>
                </li>
                <li>
                  <Link to="/services/cybersecurity-service" className="dropdown-item">Cybersecurity Services</Link>
                </li>
                <li>
                  <Link to="/services/blockchain-development-service" className="dropdown-item">Blockchain Development</Link>
                </li>
                <li>
                  <Link to="/services/qa-testing-service" className="dropdown-item">Quality Assurance & Testing</Link>
                </li>
                <li>
                  <Link to="/services/uiux-design-service" className="dropdown-item">UI/UX Design & Prototyping</Link>
                </li>
                <li>
                  <Link to="/services/itsupport-maintenance-service" className="dropdown-item">IT Support & Maintenance</Link>
                </li>
                <li>
                  <Link to="/services/digital-marketing-service" className="dropdown-item">Digital Marketing & SEO</Link>
                </li>
                <li>
                  <Link to="/services/recruitment-service" className="dropdown-item">Recruitment & Talent Acquisition</Link>
                </li>
                <li>
                  <Link to="/services/hr-outsourcing-service" className="dropdown-item">HR Outsourcing services</Link>
                </li>
                <li>
                  <Link to="/services/custom-api-development" className="dropdown-item">Custom API Development & Integration</Link>
                </li>
                <li>
                  <Link to="/services/iot-solutions" className="dropdown-item">IoT Solutions</Link>
                </li>
                <li>
                  <Link to="/services/content-writing" className="dropdown-item">Content Writing & Copywriting</Link>
                </li>
                <li>
                  <Link to="/services/video-editing" className="dropdown-item">Video Editing & Production</Link>
                </li>
                <li>
                  <Link to="/services/game-development" className="dropdown-item">Game Development</Link>
                </li>
                <li>
                  <Link to="/services/graphic-design" className="dropdown-item">Graphic Design & Branding</Link>
                </li>
                <li>
                  <Link to="/services/3d-modeling" className="dropdown-item">3D Modeling & Animation</Link>
                </li>               
                <li>
                  <Link to="/services" className="dropdown-item fw-bold">View All Services</Link>
                </li>
              </ul>
            </div>
              <Link
                to="/training"
                className="px-2 nav-link "
                role="button"
              >
                Training
              </Link>
              <Link
                to="/hire-talent"
                className="px-2 nav-link "
                role="button"
              >
                Hire-Talent
              </Link>
              <Link
                to="/contact-us"
                className="px-2 nav-link "
                role="button"
              >
                Contact
              </Link>

          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default HomeNavbar;