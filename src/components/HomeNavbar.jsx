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
          className="d-flex align-items-center text-wrap fs-4 fw-bold text-dark"
        >
          <img
            src="/logo.jpg"
            alt="Techlynx Logo"
            width="45"
            height="45"
            className="me-2"
          />
          Techlynx Innovations Pvt. Ltd
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="ms-auto fs-5 fw-semibold">
            {/* Multi-Level Dropdown */}
            <div className="nav-item dropdown multi-dropdown">
              <Link
                to=""
                className="nav-link dropdown-toggle text-dark"
                role="button"
              >
                Courses
              </Link>
              <ul className="dropdown-menu">

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Full Stack Developer</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/java-full-stack" className="dropdown-item">Java full stack</Link></li>
                    <li><Link to="/courses/python-full-stack" className="dropdown-item">Python full stack</Link></li>
                    <li><Link to="/courses/net-full-stack" className="dropdown-item">.NET full stack</Link></li>
                    <li><Link to="/courses/mern-full-stack" className="dropdown-item">MERN full stack</Link></li>
                    <li><Link to="/courses/mean-full-stack" className="dropdown-item">MEAN full stack</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Software Developer</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/frontend-development" className="dropdown-item">Frontend Developer</Link></li>
                    <li><Link to="/courses/backend-development" className="dropdown-item">Backend Developer</Link></li>
                    <li><Link to="/courses/web-development" className="dropdown-item">Web Development</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Software Testing</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/manual-testing" className="dropdown-item">Manual Testing</Link></li>
                    <li><Link to="/courses/automation-testing" className="dropdown-item">Automation Testing</Link></li>
                    <li><Link to="/courses/selenium" className="dropdown-item">Selenium</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Data Science</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/datascience" className="dropdown-item">Data Science</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">AI & ML</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/artificial-intelligence" className="dropdown-item">Artificial Intelligence</Link></li>
                    <li><Link to="/courses/machine-learning" className="dropdown-item">Machine learning</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Database Management</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/database-administration" className="dropdown-item">Database Administration</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Business & Digital</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/business-analyst-intelligence" className="dropdown-item">Business Analyst & Intelligence</Link></li>
                    <li><Link to="/courses/digital-marketing" className="dropdown-item">Digital Marketing</Link></li>
                  </ul>
                </li>

                <li className="dropdown-submenu">
                  <Link to="" className="dropdown-item">Emerging Tech</Link>
                  <ul className="dropdown-menu">
                    <li><Link to="/courses/cybersecurity" className="dropdown-item">Cybersecurity</Link></li>
                    <li><Link to="/courses/blockchain-integration" className="dropdown-item">Blockchain Integration</Link></li>
                    <li><Link to="/courses/devops-engineering" className="dropdown-item">DevOps Engineering</Link></li>
                    <li><Link to="/courses/cloud-computing" className="dropdown-item">Cloud Computing</Link></li>
                  </ul>
                </li>                                                                               

                <li>
                  <Link to="/courses" className="dropdown-item fw-bold">View All Courses</Link>
                </li>
              </ul>
            </div>

            <Nav.Link href="/training" className="text-dark">Training</Nav.Link>
            <Nav.Link href="/hire-talent" className="text-dark">Hire Talent</Nav.Link>
            <Nav.Link href="/contact-us" className="text-dark">Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default HomeNavbar;