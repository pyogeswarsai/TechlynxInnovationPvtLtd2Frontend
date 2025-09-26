import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import "./ConnectWithUs.css";

function ConnectWithUs() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ " + data.error);
      }
    } catch (error) {
      setStatus("❌ Failed to send message");
    }
  };

  return (
    <section className="connect-section py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-5">
          Connect <span className="fw-bold">With Us</span>
        </h2>

        <div className="row g-4">
          {/* Left - Contact Info */}
          <div className="col-lg-5 d-flex flex-column justify-content-center">
            <div className="contact-info p-4 shadow-sm rounded">
              <h5 className="fw-bold mb-3 text-center text-dark">Get In Touch</h5>

              <b><p><FaMapMarkerAlt className="me-2 text-primary" />Registered address: </p></b>
              <p>33-6-73, Arundelpet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P - 522002.</p>
              <b><p><FaMapMarkerAlt className="me-2 text-primary" />Residential address: </p></b>
              <p>#10/3, Near Tagore chowk, Sali Pet, Arundelpet, Guntur, Andhra Pradesh - 522601.</p>
              <b><p>Phone No: </p></b>
              <p><FaPhone className="me-2 text-primary" /> +91 9989681812</p>
              <p><FaPhone className="me-2 text-primary" /> +91 9542982674</p>
              <b><p>Mail Id: </p></b>
              <p><FaEnvelope className="me-2 text-primary" />info@techlynxinnovations.com</p>
              <p><FaEnvelope className="me-2 text-primary" />hr@techlynxinnovations.com</p>


              <div className="social-icons mt-3">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedin /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="col-lg-7">
            <form className="p-4 shadow-sm rounded bg-white" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="email" name="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </div>
              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea name="message" className="form-control" rows="4" value={formData.message} onChange={handleChange} placeholder="Your message"></textarea>
              </div>
              <button type="submit" className="btn btn-primary m-auto d-block">Send Message</button>
              {status && <p className="text-center mt-3">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConnectWithUs;
