import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './CareerPrep.css';
import { Link } from 'react-router-dom';

const CareerPrep = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="container-fluid px-3">
      <div className="text-center mb-5 mt-2" data-aos="fade-up">
        <h1 className="fw-bold text-dark heading-main mt-3">
          Career Preparation Support
        </h1>
        <p className="text-muted subheading">
          Get personalized mentoring and expert feedback to boost your career journey
        </p>
      </div>

      
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0" data-aos="fade-right">
          <img
            src="/c4.webp"
            alt="Career Mentoring"
            className="img-fluid rounded shadow w-100"
            style={{ objectFit: 'cover', maxHeight: '320px' }}
          />
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left">
          <h3 className="fw-bold text-muted subheading mb-3">Career Mentoring</h3>
          <ul className="list-unstyled bullet-text">
            <li className="mb-2">🔹 LIVE online sessions with experienced industry professionals</li>
            <li className="mb-2">🔹 Expert mentors guide you on the career path that’s right for you</li>
            <li className="mb-2">🔹 Suggestions on setting your short term and long term career goals</li>
            <li className="mb-2">🔹 Mentors from various domains help you gain valuable industry insights</li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center flex-md-row-reverse mb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0" data-aos="fade-left">
          <img
            src="/c2.jpg"
            alt="CV Review"
            className="img-fluid rounded shadow w-100"
            style={{ objectFit: 'cover', maxHeight: '320px' }}
          />
        </div>
        <div className="col-12 col-md-6" data-aos="fade-right">
          <h3 className="fw-bold text-muted subheading mb-3">CV/LinkedIn Review</h3>
          <ul className="list-unstyled bullet-text">
            <li className="mb-2">🔹 Feedback from experts to make your resume and LinkedIn profiles stand out</li>
            <li className="mb-2">🔹 Personalized and detailed suggestions to improve the content and format of your CV</li>
            <li className="mb-2">🔹 Tips on customizing your resume for the job profile you are applying to</li>
          </ul>
        </div>
      </div>

   
      <div className="row align-items-center mb-5">
        <div className="col-12 col-md-6 mb-3 mb-md-0" data-aos="fade-right">
          <img
            src="/c3.avif"
            alt="Live Projects"
            className="img-fluid rounded shadow w-100"
            style={{ objectFit: 'cover', maxHeight: '320px' }}
          />
        </div>
        <div className="col-12 col-md-6" data-aos="fade-left">
          <h3 className="fw-bold text-muted subheading mb-3">Live Projects</h3>
          <ul className="list-unstyled bullet-text">
            <li className="mb-2">🔹 Work on real-time industry projects to gain hands-on experience</li>
            <li className="mb-2">🔹 Apply theoretical knowledge to solve practical challenges</li>
            <li className="mb-2">🔹 Collaborate with mentors and peers on live assignments</li>
            <li className="mb-2">🔹 Build a strong project portfolio to showcase to employers</li>
          </ul>
        </div>
      </div>

      <div className="text-center mb-4" data-aos="zoom-in">
        <p className="footer-text text-dark">
          Your future starts now! Gain the experience, mentorship, and real-world exposure you need to 
          stand out and build a career you’ll be proud of.
        </p>
      </div>

      <div className="text-center">
        <Link to="/training"><button className="btn btn-info  text-white fw-bolder fs-5 px-4 py-2 mb-5 btn-large">
          Learn More
        </button></Link>
      </div>
    </div>
  );
};

export default CareerPrep;
