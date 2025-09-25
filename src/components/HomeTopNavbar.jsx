// src/components/NavbarContact.jsx
import React, { useState } from "react";
import "./Homepage.css";

const NavbarContact = () => {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="navbar-contact">
      {/* Desktop / Tablet */}
      <div className="d-none d-lg-block">
        <div className="contact-info-top">
          <span>📞+91 9989681812</span>
          <span>📞+91 9542982674</span>
          <span>📧info@techlynxinnovations.com</span>
          <span>📧hr@techlynxinnovations.com</span>
          <span>HR: +91 6309390893</span>
        </div>
        <div className="scroll-bottom">
          <marquee behavior="scroll" direction="left">
            🚨 Important Security Notice: Beware of Fraudulent Emails, Payment Reqests & Calls. We never 
              request payments or sensitive information via unsolicited 
              emails, third-party links, Unknown calls/persons. ✅ All official 
              communications will come only from our verified domain: 
              info@techlynxinnovations.com, hr@techlynxinnovations.com ✅ If you 
              receive any suspicious message, do not respond, click links,  or make any payments.
          </marquee>
        </div>
      </div>

      {/* Mobile */}
      <div className="d-lg-none mobile-contact">
        <button
          className="toggle-btn"
          onClick={() => setShowContacts(!showContacts)}
        >
          {showContacts ? "Hide Contact Info ▲" : "Show Contact Info ▼"}
        </button>

        {showContacts && (
          <div className="mobile-contacts">
            <div className="contact-info-top">
              <p>📞 +91 9989681812</p>
              <p>📞 +91 9542982674</p>
              <p>📧 info@techlynxinnovations.com</p>
              <p>📧 hr@techlynxinnovations.com</p>
              <p>HR: +91 9707 240 250</p>
            </div>
            <div className="scroll-bottom">
              <marquee behavior="scroll" direction="left">
              🚨 Important Security Notice:
              Beware of Fraudulent Emails, Payment Reqests & Calls. We never 
              request payments or sensitive information via unsolicited 
              emails, third-party links, Unknown calls/persons. ✅ All official 
              communications will come only from our verified domain: 
              info@techlynxinnovations.com, hr@techlynxinnovations.com ✅ If you 
              receive any suspicious message, do not respond, click links,  or make any payments.
              </marquee>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarContact;
