import React from "react";
import { Button } from "react-bootstrap"; 
import { Link } from "react-router-dom"; 
const HeroSection1 = () => {
  return (
    <div className="w-full"
    style={{
      marginBottom:"150px",
      margintop:"50px;",
      
    }}>
      {/* Hero Section */}
      <section className="container mt-5 mb-5">
        <div className="row ">
          {/* Left Side - Text */}
          <div className="col-md-6 text-center text-md-start">
            <h1 className="fw-bold display-4 text-dark bg-white d-inline px-2">
              Coach Minds, Create Opportunities, Change Lives
            </h1>
            <p className="lead mb-4 fs-5">
              At Techlynx Innovations, we coach, train, and place talent within
              our ecosystem—bridging learning with real-world impact.
            </p>
            <div>
              <Link to="/courses">
                <Button variant="primary" className="fs-4 me-3 fw-bold">
                  🚀 Explore Courses
                </Button>
              </Link>
              
              <Link to="/hire-talent">
                <Button variant="outline-primary" className="fs-4 fw-bold">
                  🤝 Hire Talent
                </Button>
              </Link>
            </div>
          </div>

          
<div className="col-md-6 text-center mt-0 md-0 position-relative d-flex justify-content-center">
  
  <img
    src="https://www.foundit.in/career-advice/wp-content/uploads/2023/05/What-is-Professional-Development.jpg"
    alt="TechLynx Logo"
    className=" position-absolute   img-fluid position-relative"
    style={{
      width: "520px",
      height: "350px",
      
      zIndex: 1,
       
    }}
  />

  
  <img
    src="https://static.vecteezy.com/system/resources/previews/024/354/252/non_2x/businessman-isolated-illustration-ai-generative-free-photo.jpg"
    alt="Student"
    className="rounded-circle border border-5 border-primary img-fluid position-relative"
    style={{
      width: "290px",
      height: "258px",
      marginTop:"60px",
      zIndex: 2,
      
    }}
  />
</div>

        </div>
      </section>
    </div>
  );
};

export default HeroSection1;