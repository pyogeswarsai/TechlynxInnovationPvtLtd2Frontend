import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jobcart.css";
import { Link } from "react-router-dom";

const jobs = [
  {
    id: "JOB002",
    title: "Data Scientist",
    desc: "Analyzes large datasets to uncover insights using statistics and ML.",
    salary: "6 LPA",
    experience: "1-3 years",
    location: "Guntur",
    img: "/j2.jpg",
  },
  {
    id: "JOB003",
    title: "Machine Learning Engineer",
    desc: "Builds and optimizes ML algorithms using large datasets and neural networks.",
    salary: "8 LPA",
    experience: "2-4 years",
    location: "Guntur",
    img: "/j3.jpg",
  },
  {
    id: "JOB004",
    title: "Cyber Security Analyst",
    desc: "Monitors IT systems, analyzes threats, and protects against cyberattacks.",
    salary: "12 LPA",
    experience: "3-6 years",
    location: "Guntur",
    img: "/j4.webp",
  },
  {
    id: "JOB005",
    title: "Software Engineer",
    desc: "Designs, develops, and maintains software applications.",
    salary: "5.5 LPA",
    experience: "1-3 years",
    location: "Guntur",
    img: "/j5.jpg",
  },
  {
    id: "JOB006",
    title: "Cloud Engineer",
    desc: "Deploys and manages applications in cloud platforms like AWS and Azure.",
    salary: "7 LPA",
    experience: "2-4 years",
    location: "Guntur",
    img: "/j6.webp",
  },
  {
    id: "JOB007",
    title: "Frontend Developer",
    desc: "Builds user interfaces with React, Angular, or Vue.",
    salary: "4.2 LPA",
    experience: "0-2 years",
    location: "Guntur",
    img: "/j7.jpg",
  },
  {
    id: "JOB008",
    title: "Backend Developer",
    desc: "Designs APIs and manages databases for scalable apps.",
    salary: "6 LPA",
    experience: "1-3 years",
    location: "Guntur",
    img: "/j8.png",
  },
  {
    id: "JOB009",
    title: "HR Executive",
    desc: "Handles recruitment, employee relations, and payroll management.",
    salary: "3.5 LPA",
    experience: "0-2 years",
    location: "Guntur",
    img: "/j9.jpg",
  },
  {
    id: "JOB010",
    title: "HR Manager",
    desc: "Leads HR policies, talent acquisition, and organizational development.",
    salary: "8 LPA",
    experience: "4-7 years",
    location: "Guntur",
    img: "/j10.webp",
  },
  {
    id: "JOB011",
    title: "Business Analyst",
    desc: "Bridges the gap between IT and business requirements.",
    salary: "5.8 LPA",
    experience: "2-4 years",
    location: "Guntur",
    img: "/j11.webp",
  },
  {
    id: "JOB012",
    title: "Project Manager",
    desc: "Oversees projects, ensuring timely delivery within budget.",
    salary: "10 LPA",
    experience: "5-8 years",
    location: "Guntur",
    img: "/j12.png",
  },
  {
    id: "JOB013",
    title: "UI/UX Designer",
    desc: "Creates user-friendly designs and prototypes for apps and websites.",
    salary: "4.8 LPA",
    experience: "1-3 years",
    location: "Guntur",
    img: "/j13.jpg",
  },
  {
    id: "JOB014",
    title: "Digital Marketing Specialist",
    desc: "Plans SEO/SEM campaigns and manages social media presence.",
    salary: "4.2 LPA",
    experience: "1-2 years",
    location: "Guntur",
    img: "/j14.jpg",
  },
  {
    id: "JOB015",
    title: "Talent Acquisition Specialist",
    desc: "Focuses on sourcing and recruiting skilled candidates for roles.",
    salary: "5 LPA",
    experience: "2-4 years",
    location: "Guntur",
    img: "/j15.webp",
  },
  {
    id: "JOB016",
    title: "DevOps Engineer",
    desc: "Automates software development and deployment pipelines, ensuring seamless integration and delivery.",
    salary: "9 LPA",
    experience: "3-5 years",
    location: "Guntur",
    img: "/j16.png",
  },
  {
    id: "JOB001",
    title: "Data Analyst",
    desc: "Collects, cleans, and interprets data using Excel, SQL, and Tableau.",
    salary: "3 LPA",
    experience: "0-2 years",
    location: "Guntur",
    img: "/j1.png",
  },
  {
  id: "JOB017",
  title: "Full Stack Developer",
  desc: "Builds scalable web applications with front-end and back-end technologies.",
  salary: "4.5 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j17.png",
},
];

const Jobcart = () => {
  const [showAll, setShowAll] = useState(false);
  const sectionRef = useRef(null);

  const visibleJobs = showAll ? jobs : jobs.slice(0, 6);

  const handleToggle = () => {
    if (showAll && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setShowAll(!showAll);
  };

  return (
    <div  className="jobcart-wrapper position-relative" ref={sectionRef}>
      

      {/* Overlay */}
      <div className="jobcart-overlay"></div>

      {/* Content */}
      <div className="container position-relative" style={{ zIndex: 2 }}>
        <h1 className="fw-bold  text-center text-white fw-5 mb-4 pt-4">
          Explore Openings 
        </h1>
        <h4 className="text-center mb-5 text-white fw-3">
          Discover job openings and skills that match your career goals in Techlynx Innovations Pvt. Ltd..
        </h4>

        {/* Job Cards Grid */}
        <div className="row g-5">
          {visibleJobs.map((job) => (
            <div className="col-md-6 col-lg-4" key={job.id}>
              <div className="card job-card h-100 shadow-sm">
                <img
                  src={job.img}
                  className="card-img-top job-card-img"
                  alt={job.title}
                />
                <div className="card-body d-flex flex-column">

                  {/* Job Title */}
                  <h5 className="card-title fw-bold">{job.title}</h5>
                  <p className="card-text text-black">{job.desc}</p>

                  {/* Job Details */}
                  <div className="job-details">
                    <p className="fw-bold text-success">💰 {job.salary}</p>
                    <p className="text-black small">🧑‍💻 Experience: {job.experience}</p>
                    <p className="text-black small">📍 {job.location}</p>
                    <p className="text-black small">💼 Job-Id: {job.id}</p>
                  </div>

                  <div className="mt-auto">
                    <Link to="/hire-talent/job-form">
                    <button className="btn btn-info text-white w-100">
                      Apply Now
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center m-4 p-2">
          <button
            className="btn btn-info fw-bolder fs-5 text-white w-30 mb-3"
            onClick={handleToggle}
          >
            {showAll ? "Show Less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobcart;
