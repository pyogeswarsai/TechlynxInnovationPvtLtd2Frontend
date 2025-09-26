import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    course: "",
    message: "",
  });

  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps?q=10/3+Ankamma+Nagar+Sali+Pet+Arundelpet+Guntur+Andhra+Pradesh+522002",
      "_blank"
    );
  };

  const getDirections = () => {
    window.open(
      "https://www.google.com/maps/dir/?api=1&destination=10/3+Ankamma+Nagar+Sali+Pet+Arundelpet+Guntur+Andhra+Pradesh+522002",
      "_blank"
    );
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, phone, address, course, message } =
      formData;

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !address ||
      !course ||
      !message
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          phone,
          address,
          course,
          message,
        }),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccessMessageVisible(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          address: "",
          course: "",
          message: "",
        });
        setTimeout(() => setSuccessMessageVisible(false), 4000);
      } else {
        alert(result.message || "Failed to send data");
      }
    } catch (error) {
      alert("An error occurred while sending the data");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="row g-4">
        <div className="col-lg-6">
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <h3 className="h2 fw-bold text-dark mb-4 send">Send us a Message</h3>

            <form onSubmit={handleSubmit} className="d-grid gap-3">
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-control rounded-xl"
                    placeholder="Enter Your First Name"
                  />
                </div>

                <div className="col-md-6">
                  <label className="form-label fw-semibold">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-control rounded-xl"
                    placeholder="Enter Your Last Name"
                  />
                </div>
              </div>

              <label className="form-label">Email Address *</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-control rounded-xl"
                placeholder="Enter Your Email Address"
              />

              <label className="form-label fw-semibold">Phone Number *</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="form-control rounded-xl"
                placeholder="Enter Your 10 Digit Mobile Number"
              />

              <label className="form-label fw-semibold">Your Address *</label>
              <textarea
                id="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows="4"
                className="form-control rounded-xl"
                placeholder="Enter Your Present Address"
              ></textarea>

              <label className="form-label fw-semibold">
                Course Interest *
              </label>
              <select
                id="course"
                value={formData.course}
                onChange={handleChange}
                required
                className="form-select rounded-xl"
              >
                <option value="fs-6">Select a course</option>
                <option value="python-full-stack">Python Full Stack</option>
                <option value="java-full-stack">Java Full Stack</option>
                <option value="dotnet">.Net</option>
                <option value="data-science">Data Science</option>
                <option value="flutter">Flutter</option>
                <option value="react">React</option>
                <option value="ai">AI</option>
                <option value="ml">ML</option>
                <option value="business-analyst">Business Analyst</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="web-development">Web Development</option>
                <option value="cybersecurity">Cybersecurity</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="blockchain">Blockchain</option>
                <option value="devops">DevOps</option>
                <option value="business-intelligence">
                  Business Intelligence
                </option>
              </select>

              <label className="form-label fw-semibold">Message *</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="form-control rounded-xl"
                placeholder="Tell us about your goals and how we can help..."
              ></textarea>

              <button
                type="submit"
                className="btn btn-primary w-100 rounded-xl py-3 shadow-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message 🚀"}
              </button>
            </form>

            {successMessageVisible && (
              <div className="mt-4 p-3 bg-success text-white rounded-xl">
                ✅ Message Sent Successfully! We'll get back to you within 24
                hours.
              </div>
            )}
          </div>
        </div>

        {/* Location + Social Media Section (Same as before) */}
        <div className="col-lg-6 d-flex flex-column gap-4">
          <div className="bg-white rounded-3xl p-4 shadow-xl">
            <h3 className="h3 fw-bold text-dark mb-4 send">Our Locations</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg mb-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.3884187489507!2d80.44121207490933!3d16.303085984410824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a750072463f81%3A0x99b6c2dc7b39e20f!2sTECHLYNX%20INNOVATIONS%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1757658139847!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Techlynx Location"
              ></iframe>
            </div>

            <div className="d-flex flex-wrap gap-3 mb-2">
              <button
                onClick={openGoogleMaps}
                className="btn btn-primary d-flex align-items-center"
              >
                🗺 Open in Google Maps
              </button>
              <button
                onClick={getDirections}
                className="btn btn-secondary d-flex align-items-center"
              >
                🧭 Get Directions
              </button>
            </div>

            <div className="bg-light rounded-2xl p-3">
              <h4 className="fw-bold mb-2">📍 Techlynx Innovations Pvt Ltd</h4>
              <p className="fs-6">
                10/3, near Tagore chowk, Sali Pet, Arundelpet, Guntur, Andhra
                Pradesh 522601
              </p>
              <div className="row text-sm">
                <div className="col-6">
                  <strong className="fs-5 send">🏢 Facilities:</strong> Modern classrooms, computer
                  labs, library
                </div>
                <div className="col-6">
                  <strong className="fs-5 send">🚌 Transport:</strong> Well connected by public
                  transport
                </div>
                <div className="col-6 mt-1">
                  <strong className="fs-5 send">🏪 Nearby:</strong> Collection O Hotel Jaya Fortune,
                  Tagore chowk, Arundelpet, Guntur
                </div>
                <div className="col-6 mt-1">
                  <strong className="fs-5 send">📞 Contact:</strong> +91-9989681812 , +91-9542982674
                </div>
              </div>
            </div>
          </div>

            <div className="bg-white rounded-3xl p-4 shadow-xl">
            <h3 className="h4 fw-bold text-dark mb-3 send">Connect With Us</h3>
            <div className="row g-2 text-center">
              <div className="col-6 col-md-6">
                <a
                  href="https://www.facebook.com/profile.php?id=61579158831359"
                  target="_blank"
                  className="btn btn-primary text-dark s1 d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
              </div>
              <div className="col-6 col-md-6">
                <a
                  href="https://x.com/TechlynxLimited"
                  target="_blank"
                  className="btn btn-warning s1 d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
              <div className="col-6 col-md-6">
                <a
                  href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/"
                  target="_blank"
                  className="btn btn-dark s1 d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </div>
              <div className="col-6 col-md-6">
                <a
                  href="https://www.youtube.com/@techlynxinnovationsprivatelimi"
                  target="_blank"
                  className="btn btn-danger s1 d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-youtube"></i> YouTube
                </a>
              </div>

              {/* Instagram Centered with Left Space */}
              <div className="col-6 col-md-6">
                <a
                  href="https://www.instagram.com/techlynxinnovations/"
                  target="_blank"
                  className="btn btn-info text-white s1 d-flex align-items-center justify-content-center"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
