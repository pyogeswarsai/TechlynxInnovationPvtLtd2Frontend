import React from "react";

function HomeTopNavbar() {
  return (
    <div
      className="text-light py-2 small topNavContainer"
      // style={{
      //   background: "linear-gradient(90deg, #00c6ff, #0072ff)", // logo gradient
      // }}
    >
      <div className="fs-6 mb-1 px-5 d-flex flex-wrap justify-content-between align-items-center">
        {/* Left Side - Contacts */}
        <div className="d-flex fw-bold  flex-wrap gap-4">
          <span>📞 +91 9989681812</span>
          <span>📞 +91 9542982674</span>
        </div>

        <div className="d-flex fw-bold  flex-wrap gap-4">
          <span>✉️ info@techlynxinnovations.com</span>
          <span>✉️ hr@techlynxinnovations.com</span>
        </div>

        {/* Right Side - Language */}
        <div>
          🌐 EN
        </div>
      </div>
      <div className="topNavContainer">
        <marquee className="fw-bold fs-6"><span className="text-warning">Important Security Notice:- </span>
        Beware of Fraudulent Emails, Payment Reqests & Calls We never request payments or sensitive 
          information via unsolicited emails. third-party links Unknown 
          calls/persons. ✅ All official communications will come only 
          from our verified domain: info@techlynxinnovations.com ✅ If 
          you receive any suspicious message, do not respond, click links, 
          or make any payments.</marquee>
      </div>
    </div>
  );
}

export default HomeTopNavbar;
