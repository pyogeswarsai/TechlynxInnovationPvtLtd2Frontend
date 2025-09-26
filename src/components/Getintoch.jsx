import React from 'react';
import './Getintoch.css';
import { Link } from 'react-router-dom';

const Getintoch = () => {
  const handleConnect = () => {
    alert('Thank you for showing interest! Our HR team will connect with you shortly.');
  };

  return (
    <div className="contact-container container">
      
      <img src="https://www.mainboardsuccess.co.uk/wp-content/uploads/2021/03/get-in-touch-image-.png" alt="get in toch"  className='img-responsive d-block mx-auto'/>

      <div className="content-section">
        <h2>Start Your Career with Us</h2>
        <p>
          At TECHLYNX INNOVATIONS PVT LTD, we believe in nurturing fresh talent and providing a platform to grow, innovate, and thrive.
          Whether you're just out of college or looking for your first break, our team is here to guide you, train you, and help
          you succeed in the world of technology.
        </p>
        <p>
          Join a team that values learning, supports growth, and builds the future together.
        </p>
        <p>
          🚀 Your journey starts here. Let's grow together!
        </p>

        <Link to="/contact-us" className='link-getin'><button className="connect-btn mb-2" >
          Connect With Us
        </button></Link>
      </div>
    </div>
  );
};

export default Getintoch;