import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Jobcart.css";
import { Link } from "react-router-dom";

const jobs = [
  // Full Stack Development
{
  id: "JOB101",
  title: "Java Full Stack Developer",
  desc: "Builds scalable applications using Java for backend and modern frontend frameworks.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j101.jpg",
},
{
  id: "JOB102",
  title: "Python Full Stack Developer",
  desc: "Develops full stack apps using Python backend and responsive web technologies.",
  salary: "₹9–14 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j102.jpeg",
},
{
  id: "JOB103",
  title: ".NET Full Stack Developer",
  desc: "Specializes in .NET technologies to deliver end-to-end web solutions.",
  salary: "₹7–11 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j103.jpeg",
},
{
  id: "JOB104",
  title: "MERN Full Stack Developer",
  desc: "Works with MongoDB, Express, React, and Node.js to create web apps.",
  salary: "₹10–15 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j104.jpeg",
},
{
  id: "JOB105",
  title: "MEAN Full Stack Developer",
  desc: "Delivers dynamic apps using MongoDB, Express, Angular, and Node.js.",
  salary: "₹9–14 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j105.webp",
},

// Programming Languages & Frameworks
{
  id: "JOB201",
  title: "Java Developer",
  desc: "Builds enterprise-grade applications using Java.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j201.jpeg",
},
{
  id: "JOB202",
  title: "Python Developer",
  desc: "Creates robust backend and data-driven solutions using Python.",
  salary: "₹9–14 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j202.jpeg",
},
{
  id: "JOB203",
  title: "Node.js Developer",
  desc: "Develops scalable backend APIs with Node.js.",
  salary: "₹9–13 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j203.webp",
},
{
  id: "JOB204",
  title: "Flutter Developer",
  desc: "Builds cross-platform mobile apps using Flutter.",
  salary: "₹7–11 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j204.webp",
},
{
  id: "JOB205",
  title: "React Native Developer",
  desc: "Creates mobile apps using React Native framework.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j205.webp",
},

// Web Development Roles
{
  id: "JOB301",
  title: "Frontend Developer",
  desc: "Designs and develops user-friendly web interfaces.",
  salary: "₹6–10 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j301.jpeg",
},
{
  id: "JOB302",
  title: "Backend Developer",
  desc: "Manages databases and server-side APIs.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j302.jpeg",
},
{
  id: "JOB303",
  title: "Web Developer",
  desc: "Builds responsive websites and web apps.",
  salary: "₹5–9 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j303.jpeg",
},
{
  id: "JOB304",
  title: "PHP Developer",
  desc: "Creates server-side apps using PHP.",
  salary: "₹4–7 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "./j304.png",
},

// Testing & QA
{
  id: "JOB401",
  title: "Manual Tester",
  desc: "Performs manual testing for quality assurance.",
  salary: "₹3–6 LPA",
  experience: "0-2 years",
  location: "Guntur",
  img: "/j401.jpeg",
},
{
  id: "JOB402",
  title: "Automation Tester",
  desc: "Automates test cases for faster QA cycles.",
  salary: "₹5–9 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j402.jpg",
},
{
  id: "JOB403",
  title: "Selenium Tester",
  desc: "Specializes in test automation with Selenium.",
  salary: "₹5–9 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j403.jpg",
},
{
  id: "JOB404",
  title: "JUnit Tester",
  desc: "Focuses on Java-based unit testing with JUnit.",
  salary: "₹5–8 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j404.png",
},
{
  id: "JOB405",
  title: "JMeter Tester",
  desc: "Conducts performance and load testing with JMeter.",
  salary: "₹5–8 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j405.webp",
},

// Data Analytics
{
  id: "JOB501",
  title: "Data Scientist",
  desc: "Analyzes data and builds predictive models.",
  salary: "₹12–18 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j501.webp",
},
{
  id: "JOB502",
  title: "Data Analyst",
  desc: "Interprets data to provide business insights.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j502.jpeg",
},
{
  id: "JOB503",
  title: "Power BI Developer",
  desc: "Creates dashboards and reports using Power BI.",
  salary: "₹6–10 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j503.png",
},
{
  id: "JOB504",
  title: "Tableau Developer",
  desc: "Builds interactive visualizations with Tableau.",
  salary: "₹7–11 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j504.jpeg",
},

// AI & ML
{
  id: "JOB601",
  title: "AI Engineer",
  desc: "Develops AI-driven solutions for business problems.",
  salary: "₹15–22 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j601.webp",
},
{
  id: "JOB602",
  title: "Machine Learning Engineer",
  desc: "Builds machine learning models and pipelines.",
  salary: "₹12–20 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j602.jpg",
},
{
  id: "JOB603",
  title: "Deep Learning Engineer",
  desc: "Specializes in neural networks and deep learning.",
  salary: "₹15–24 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j603.jpg",
},

// Security & Emerging Tech
{
  id: "JOB701",
  title: "Cybersecurity Specialist",
  desc: "Secures systems and networks from threats.",
  salary: "₹10–15 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j701.jpeg",
},
{
  id: "JOB702",
  title: "Blockchain Developer",
  desc: "Builds decentralized applications using blockchain.",
  salary: "₹12–18 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j702.png",
},
{
  id: "JOB703",
  title: "DevOps Engineer",
  desc: "Automates CI/CD pipelines and deployment workflows.",
  salary: "₹10–16 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j703.jpg",
},
{
  id: "JOB704",
  title: "Cloud Engineer",
  desc: "Manages and deploys applications on cloud platforms.",
  salary: "₹11–17 LPA",
  experience: "2-4 years",
  location: "Guntur",
  img: "/j704.jpeg",
},

// Databases
{
  id: "JOB801",
  title: "MySQL Developer",
  desc: "Designs and manages relational databases with MySQL.",
  salary: "₹5–9 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j801.png",
},
{
  id: "JOB802",
  title: "MongoDB Developer",
  desc: "Works with NoSQL databases using MongoDB.",
  salary: "₹6–10 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j802.jpeg",
},

// Business & Marketing
{
  id: "JOB901",
  title: "Business Intelligence Specialist",
  desc: "Delivers BI solutions and dashboards.",
  salary: "₹8–12 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j901.jpg",
},
{
  id: "JOB902",
  title: "Business Analyst",
  desc: "Bridges business needs with technical solutions.",
  salary: "₹7–11 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j902.jpg",
},
{
  id: "JOB903",
  title: "Digital Marketing Specialist",
  desc: "Runs SEO, SEM, and social media campaigns.",
  salary: "₹5–9 LPA",
  experience: "1-3 years",
  location: "Guntur",
  img: "/j903.png",
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
