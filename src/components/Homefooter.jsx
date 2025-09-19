// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Homepage.css';
import { Link } from 'react-router-dom';

const Homefooter = () => {
  return (
    <div className="footers bg-dark">
      <div className="container">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mb-4">
            <span className="footer-logo text-light">Techlynx Innovations Pvt Ltd</span>
            <p className="footer-description">
              We provide innovative solutions for your business needs. Our team is dedicated to 
              delivering exceptional results that drive growth and success.
            </p>
            <div className="social-iconss">
              <a href="https://www.facebook.com/people/Techlynx-Innovations/61579158831359/"><FaFacebookF /></a>
              <a href="https://x.com/TechlynxLimited"><FaTwitter /></a>
              <a href="https://www.instagram.com/techlynxinnovations/"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/"><FaLinkedinIn /></a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/training">Training</Link></li>
              <li><Link to="/hire-talent">Hire talent</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-md-3 mb-4 text-break">
            <h5>Contact Info</h5>
            <ul className="contact-info bg-dark">
              <li>
                <FaMapMarkerAlt />
                <span>33-6-73, Arundlepet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P - 522002</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 9989681812 , +91 9542982674</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@techlynxinnovations.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-md-3 mb-4">
            <h5>Newsletter</h5>
            <p className="footer-description">Subscribe to our Youtube Channel for updates and offers.</p>
            <form className="newsletter-form"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "https://www.youtube.com/@techlynxinnovationsprivatelimi";
              }}  
            >
              <div className="mb-2">
                <input type="email" className="form-control bg-white" placeholder="Your Email" required/>
              </div>
              <button type="submit" className="btn btn-primary w-100">Subscribe</button>
            </form>

          </div>
        </div>
        
        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <p>&copy; 2025 Techlynx Innovations Pvt Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefooter;