// Footer.jsx
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPhone, FaEnvelope, FaYoutube } from 'react-icons/fa';
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
              <a href='https://www.youtube.com/@techlynxinnovationsprivatelimi'><FaYoutube /></a>
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
                <span><span className='text-danger'>Registered Address:</span><br/>33-6-73, Arundlepet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P - 522002</span>
              </li>
              <li>
                <FaMapMarkerAlt />
                <span><span className='text-danger'>Residential Address:</span><br/>10/3, Near Tagore chowk, Sali Pet, Arundelpet, Guntur, AP - 522601</span>
              </li>              
              <li>
                <FaPhone />
                <span>+919989681812 , +919542982674</span>
              </li>
              <li>
                <FaEnvelope />
                <span className='fs-5'>info@techlynxinnovations.com</span>
              </li>
              <li>
                <FaEnvelope />
                <span className='fs-5'>hr@techlynxinnovations.com</span>
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
                <input type="email" className="form-control bg-white text-center" placeholder="Your Email" required/>
              </div>
              <button type="submit" className="btn btn-primary w-100">Subscribe</button>
            </form>

          </div>
        </div>
        
        {/* Copyright */}
        <div className="row">
          <div className="col-12">
            <div className="copyright">
              <p className='fs-6'>&copy; 2025 Techlynx Innovations Pvt Ltd. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homefooter;