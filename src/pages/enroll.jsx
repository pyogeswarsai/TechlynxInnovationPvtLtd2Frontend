import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";
import "./enroll.css";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function EnrollForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    mode: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.course || !form.mode) {
      setError("⚠ Please fill all required fields.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSent(true);
        setForm({
          name: "",
          email: "",
          phone: "",
          course: "",
          mode: "",
          message: "",
        });
      } else {
        // 👇 Custom check for duplicate email
        if (data.error && data.error.includes("Already enrolled")) {
          setError("⚠ This email is already enrolled.");
        } else {
          setError(data.error || "❌ Something went wrong.");
        }
      }
    } catch (err) {
      console.error(err);
      setError("❌ Failed to connect to server.");
    }
  }

  return (
    <section className="enroll-section py-5">
      <div className="container">
        <div className="card enroll-card shadow-lg border-0">
          <div className="row g-0 align-items-center">
            <div className="col-lg-5 p-4 enroll-info">
              <div className="breadcrumb mb-4 custom-breadcrumb text-start">
                <Link
                  to="/courses"
                  className="breadcrumb-link text-primary text-decoration-none"
                >
                  Courses
                </Link>
                <span className="mx-1 text-muted">/</span>
                <span className="text-dark">Enroll Now</span>
              </div>
              <h1 className="fw-bold mb-4 animated-gradient-text">
                Get In Touch With Us
              </h1>
              <p className="text-muted mb-4">
                Explore our courses and enrollment options. Our expert team will
                guide you toward the best path for your career growth.
              </p>
              <div className="info-box d-flex align-items-start mb-3">
                <div className="icon me-3">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Our Location</h6>
                  <small className="text-muted">
                    ➡ 33-6-73, Arundelpet, 19/3, Opp.Ravindranath Tagore Statue, Guntur, A.P-522002.
                  </small>
                  <br />
                  <small className="text-muted">
                   ➡ #10/3, Near Tagore chowk, Sali Pet, Arundelpet, Guntur, A.P-522601.
                  </small>
                </div>
              </div>
              <div className="info-box d-flex align-items-start mb-3">
                <div className="icon me-3">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Phone Number</h6>
                  <small className="text-muted">+91 9989681812</small>
                  <br />
                  <small className="text-muted">+91 9542982674</small>
                </div>
              </div>
              <div className="info-box d-flex align-items-start">
                <div className="icon me-3">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h6 className="fw-semibold mb-1">Email Address</h6>
                  <small className="text-muted">
                    info@techlynxinnovations.com
                  </small><br/>
                  <small className="text-muted">
                    hr@techlynxinnovations.com
                  </small>
                </div>
              </div>

              <div className="footer-icons d-flex justify-content-center gap-4 mt-5">
                <a
                  href="https://www.facebook.com/people/Techlynx-Innovations/61579158831359/"
                  className="facebook"
                >
                  <FaFacebookF />
                </a>
                <a href="https://x.com/TechlynxLimited" className="twitter">
                  <FaXTwitter />
                </a>
                <a
                  href="https://www.youtube.com/@techlynxinnovationsprivatelimi"
                  className="youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.linkedin.com/in/nagul-meera-shaik-0b8650379/"
                  className="linkedin"
                >
                  <FaLinkedinIn />
                </a>
                <a
                  href="https://www.instagram.com/techlynxinnovations/"
                  className="instagram"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
            <div className="col-lg-7 p-4 form-side">
              {!sent ? (
                <>
                  <h3 className="fw-bold mb-3 text-primary text-center">
                    📌 Enroll Now
                  </h3>
                  <form onSubmit={handleSubmit}>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="form-control cool-input mb-2"
                      placeholder="Your Name *"
                      required
                    />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className="form-control cool-input mb-2"
                      placeholder="Your Email *"
                      required
                    />
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="form-control cool-input mb-2"
                      placeholder="Your Phone"
                    />
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="form-control cool-input mb-2"
                      required
                    >
                      <option value="">Select Course *</option>
                      <optgroup label="Full Stack Development">
                        <option>Java Full Stack</option>
                        <option>Python Full Stack</option>
                        <option>.NET Full Stack</option>
                        <option>MERN Stack</option>
                        <option>MEAN Stack</option>
                      </optgroup>
                      <optgroup label="Web Development & Programming">
                        <option>Web Development</option>
                        <option>Frontend Development</option>
                        <option>Backend Development</option>
                        <option>Node.js</option>
                        <option>Flutter</option>
                        <option>React Native</option>
                        <option>Java</option>
                        <option>Python</option>
                        <option>PHP</option>
                      </optgroup>
                      <optgroup label="Data & AI/ML">
                        <option>Data Science</option>
                        <option>Data Analytics</option>

                        <option>Artificial Intelligence</option>
                        <option>Machine Learning</option>
                        <option>Deep Learning</option>
                        <option>Power BI</option>
                        <option>Tableau</option>
                      </optgroup>
                      <optgroup label="Testing & QA">
                        <option>Manual Testing</option>
                        <option>Automation Testing</option>
                        <option>Selenium</option>
                        <option>JUnit</option>
                        <option>JMeter</option>
                      </optgroup>
                      <optgroup label="IT Operations & Security">
                        <option>DevOps</option>
                        <option>Cloud Computing</option>
                        <option>Cyber Security</option>
                        <option>Blockchain Technology</option>
                      </optgroup>
                      <optgroup label="Databases">
                        <option>Database Administrator</option>
                        <option>MySQL</option>
                        <option>MongoDB</option>
                      </optgroup>
                      <optgroup label="Business & Marketing">
                        <option>Business Analyst</option>
                        <option>Digital Marketing</option>
                        <option>Business Intelligence</option>
                      </optgroup>
                    </select>

                    <select
                      name="mode"
                      value={form.mode}
                      onChange={handleChange}
                      className="form-control cool-input mb-2"
                      required
                    >
                      <option value="">Choose Mode *</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>Onsite</option>
                    </select>

                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      className="form-control cool-input mb-2"
                      placeholder="Your Message (optional)"
                    ></textarea>

                    <div className="d-grid">
                      <button className="btn cool-btn py-2" type="submit">
                        🚀 Submit Enrollment
                      </button>
                    </div>

                    {/* Error message */}
                    {error && (
                      <div className="mt-2 text-danger fw-bold text-center">
                        {error}
                      </div>
                    )}
                  </form>
                </>
              ) : (
                <div className="text-center p-4">
                  <h4 className="text-success fw-bold">🎉 Enrollment Sent!</h4>
                  <p className="mb-2">
                    Thank you — our team will contact you within{" "}
                    <strong>24 hours</strong>.
                  </p>
                  <i className="bi bi-check-circle-fill display-4 text-success"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}