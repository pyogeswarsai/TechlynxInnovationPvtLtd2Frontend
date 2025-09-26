import React, { useState } from "react";
import "./Job.css";
import { Link } from "react-router-dom";

function JobApplication() {
  const [submitted, setSubmitted] = useState(false);
  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    resume: null,
    coverLetter: "",
    experience: [{ company: "", role: "", years: "" }],
    education: [{ institution: "", degree: "", year: "" }],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleExpChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExp = [...formData.experience];
    updatedExp[index][name] = value;
    setFormData((prev) => ({ ...prev, experience: updatedExp }));
  };

  const handleEduChange = (index, e) => {
    const { name, value } = e.target;
    const updatedEdu = [...formData.education];
    updatedEdu[index][name] = value;
    setFormData((prev) => ({ ...prev, education: updatedEdu }));
  };

  const addExperience = () => {
    setFormData((prev) => ({
      ...prev,
      experience: [...prev.experience, { company: "", role: "", years: "" }],
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "" }],
    }));
  };

  const removeExperience = (index) => {
    setFormData((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const removeEducation = (index) => {
    setFormData((prev) => ({
      ...prev,
      education: prev.education.filter((_, i) => i !== index),
    }));
  };

  const resetForm = () => {
    setSubmitted(false);
    setAlreadyApplied(false);
    setServerMessage("");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      position: "",
      resume: null,
      coverLetter: "",
      experience: [{ company: "", role: "", years: "" }],
      education: [{ institution: "", degree: "", year: "" }],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // check missing fields
    const missing = [];

    if (!formData.fullName || !formData.fullName.trim()) {
      missing.push("Full Name");
    }
    if (!formData.email || !formData.email.trim()) {
      missing.push("Email");
    }
    if (!formData.phone || !formData.phone.trim()) {
      missing.push("Phone");
    }
    if (!formData.position || !formData.position.trim()) {
      missing.push("Position Applied For");
    }
    if (!formData.resume) {
      missing.push("Resume Upload");
    }

    formData.experience.forEach((exp, idx) => {
      const num = idx + 1;
      if (!exp.company || !exp.company.trim()) {
        missing.push(`Experience ${num} Company`);
      }
      if (!exp.role || !exp.role.trim()) {
        missing.push(`Experience ${num} Role`);
      }
      if (!exp.years || !exp.years.trim()) {
        missing.push(`Experience ${num} Years`);
      }
    });

    formData.education.forEach((edu, idx) => {
      const num = idx + 1;
      if (!edu.institution || !edu.institution.trim()) {
        missing.push(`Education ${num} Institution`);
      }
      if (!edu.degree || !edu.degree.trim()) {
        missing.push(`Education ${num} Degree`);
      }
      if (!edu.year || !edu.year.trim()) {
        missing.push(`Education ${num} Year`);
      }
    });

    if (missing.length > 0) {
      alert("Please fill in the following required fields:\n" + missing.join("\n"));
      return;
    }

    // build FormData
    const data = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      if (key === "experience" || key === "education") {
        data.append(key, JSON.stringify(val));
      } else {
        data.append(key, val);
      }
    });

    try {
      const res = await fetch("http://localhost:5000/api/careers/apply", {
        method: "POST",
        body: data,
      });
      const result = await res.json();

      if (res.ok) {
        if (result.already_applied) {
          setAlreadyApplied(true);
          setServerMessage(result.message || "You already applied for this job.");
        } else {
          setSubmitted(true);
          setServerMessage(result.message || "Application submitted successfully.");
        }
      } else {
        // some server side error
        alert(result.error || "Something went wrong on submission.");
      }
    } catch (error) {
      console.error("Network error:", error);
      alert("Failed to submit application. Please try again later.");
    }
  };

  return (
    <div className="container-fluid min-vh-100 min-vw-100 d-flex flex-column bg-light">
      <main className="row flex-grow-1 shadow rounded">
        <div className="col-md-4 d-none d-md-flex p-0">
          <img src="../job-1.jpg" alt="Job Opportunity" className="job-image" />
        </div>

        <div className="text-form col-12 col-md-8 p-4 p-md-5 d-flex flex-column bg-white">
          { !submitted && !alreadyApplied ? (
            <>
              <div className="d-flex align-items-center justify-content-center mb-3 company-header">
                <img
                  src="../logo.jpg"
                  alt="Company Logo"
                  className="company-logo me-3"
                />
                <h3 className="company-name">Techlynx Innovations Pvt Ltd</h3>
              </div>

              <h2 className="mb-4 text-center form-title">Job Application Form</h2>

              <form className="d-flex flex-column h-100" onSubmit={handleSubmit}>
                <div className="flex-grow-1 px-3">
                  {/* Full Name */}
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Enter your Full Name"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Phone */}
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      className="form-control"
                      placeholder="Enter your PhoneNo"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Position */}
                  <div className="mb-3">
                    <label htmlFor="position" className="form-label">
                      Position Applied For
                    </label>
                    <select
                      id="position"
                      name="position"
                      className="form-select"
                      value={formData.position}
                      onChange={handleChange}
                    >
                      <option value="">Select position</option>
                      {[
{ id: "JOB101", title: "Java Full Stack Developer"},
                        { id: "JOB102", title: "Python Full Stack Developer"},
                        { id: "JOB103", title: "NET Full Stack Develope" },
                        { id: "JOB104", title: "MERN Full Stack Developer" },
                        { id: "JOB105", title: "MEAN Full Stack Developer" },
                        { id: "JOB201", title: "Java Developer" },
                        { id: "JOB202", title: "Python Developer" },
                        { id: "JOB203", title: "Node.js Developer" },
                        { id: "JOB204", title: "Flutter Developer" },
                        { id: "JOB205", title: "React Native Developer" },
                        { id: "JOB301", title: "Frontend Developer" },
                        { id: "JOB302", title: "Backend Developer" },
                        { id: "JOB303", title: "Web Developer" },
                        { id: "JOB304", title: "PHP Developer" },
                        { id: "JOB401", title: "Manual Tester" },
                        { id: "JOB402", title: "Automation Tester" },
                        { id: "JOB403", title: "Selenium Tester" },
                        { id: "JOB404", title: "JUnit Tester" },
                        { id: "JOB405", title: "JMeter Tester" },
                        { id: "JOB501", title: "Data Scientist" },
                        { id: "JOB502", title: "Data Analyst" },
                        { id: "JOB503", title: "Power BI Developer" },
                        { id: "JOB504", title: "Tableau Develope" },
                        { id: "JOB601", title: "AI Engineer" },
                        { id: "JOB602", title: "Machine Learning Engineer" },
                        { id: "JOB603", title: "Deep Learning Engineer" },
                        { id: "JOB701", title: "Cybersecurity Specialist" },
                        { id: "JOB702", title: "Blockchain Developer" },
                        { id: "JOB703", title: "DevOps Engineer" },
                        { id: "JOB704", title: "Cloud Engineer" },
                        { id: "JOB801", title: "MySQL Developer" },
                        { id: "JOB802", title: "MongoDB Developer" },
                        { id: "JOB901", title: "Business Intelligence Specialist" },
                        { id: "JOB902", title: "Business Analyst" },
                        { id: "JOB903", title: "Digital Marketing Specialist" },
                      ].map((job) => (
                        <option key={job.id} value={job.id}>
                          {job.id} - {job.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Resume Upload */}
                  <div className="mb-3 col-mb-6">
                    <label className="form-label">Upload Resume</label>
                    <input
                      type="file"
                      name="resume"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Experience */}
                  <div className="mb-3">
                    <label className="form-label">Experience</label>
                    {formData.experience.map((exp, index) => (
                      <div className="row mb-2" key={index}>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="form-control"
                            value={exp.company}
                            onChange={(e) => handleExpChange(index, e)}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="role"
                            placeholder="Role"
                            className="form-control"
                            value={exp.role}
                            onChange={(e) => handleExpChange(index, e)}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="years"
                            placeholder="Years"
                            className="form-control"
                            value={exp.years}
                            onChange={(e) => handleExpChange(index, e)}
                          />
                        </div>
                        {index > 0 && (
                          <div className="col-md-1">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => removeExperience(index)}
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={addExperience}
                    >
                      + Add Experience
                    </button>
                  </div>

                  {/* Education */}
                  <div className="mb-3">
                    <label className="form-label">Education</label>
                    {formData.education.map((edu, index) => (
                      <div className="row mb-2" key={index}>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="institution"
                            placeholder="Institution"
                            className="form-control"
                            value={edu.institution}
                            onChange={(e) => handleEduChange(index, e)}
                          />
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="degree"
                            placeholder="Degree"
                            className="form-control"
                            value={edu.degree}
                            onChange={(e) => handleEduChange(index, e)}
                          />
                        </div>
                        <div className="col-md-3">
                          <input
                            type="text"
                            name="year"
                            placeholder="Year"
                            className="form-control"
                            value={edu.year}
                            onChange={(e) => handleEduChange(index, e)}
                          />
                        </div>
                        {index > 0 && (
                          <div className="col-md-1">
                            <button
                              type="button"
                              className="btn btn-danger btn-sm"
                              onClick={() => removeEducation(index)}
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                    <button
                      type="button"
                      className="btn btn-link"
                      onClick={addEducation}
                    >
                      + Add Education
                    </button>
                  </div>

                  {/* Cover Letter */}
                  <div className="mb-3">
                    <label className="form-label">Cover Letter</label>
                    <textarea
                      name="coverLetter"
                      placeholder="Role-Focused/Optional"
                      className="form-control"
                      rows="4"
                      value={formData.coverLetter}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="text-center mt-auto">
                  <button type="submit" className="btn btn-info text-white px-4 m-1">
                    Submit Application
                  </button>
                  <Link to="/hire-talent">
                    <button type="button" className="btn btn-info text-white m-1">
                      Go Back
                    </button>
                  </Link>
                </div>
              </form>
            </>
          ) : alreadyApplied ? (
            <div className="text-center my-auto">
              <h3 className="text-dark">⚠ {serverMessage}</h3>
              {/* <p>We’ll reach you if your skills match.</p> */}
              <button className="btn btn-secondary mt-3 me-2" onClick={resetForm}>
                Submit Another Application
              </button>
              <Link to="/hire-talent">
                <button className="btn btn-secondary mt-3">Go Back To Hire Page</button>
              </Link>
            </div>
          ) : (
            <div className="text-center my-auto">
              <h3 className="text-success">🎉 {serverMessage}</h3>
              <p>We’ll review your application and get back to you soon.</p>
              <button className="btn btn-secondary mt-3 me-2" onClick={resetForm}>
                Submit Another Application
              </button>
              <Link to="/hire-talent">
                <button className="btn btn-secondary mt-3">Go Back To Hire Page</button>
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default JobApplication;