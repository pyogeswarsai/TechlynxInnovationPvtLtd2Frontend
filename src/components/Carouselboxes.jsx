import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Carousel.css';

// 🔹 Reusable carousel for one category
function CourseCarousel({ title, courses }) {
  const [index, setIndex] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  // Update cardsPerPage based on screen width
  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) {
        setCardsPerPage(1); // 📱 Mobile → 1 card
      } else if (window.innerWidth < 992) {
        setCardsPerPage(1); // 📲 Tablet → 2 cards
      } else if (window.innerWidth < 1440) {
        setCardsPerPage(2)
      } else {
        setCardsPerPage(3); // 💻 Laptop/Desktop → 3 cards
      }
    };

    updateCards(); // Run on mount
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const visibleCourses = courses.slice(index, index + cardsPerPage);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index + cardsPerPage < courses.length) setIndex(index + 1);
  };

  return (
    <div className="mb-5">
      <h4 className="fw-bold text-light text-center mb-4">{title}</h4>
      <div className="d-flex align-items-center justify-content-center">
        {/* Left Arrow */}
        <button
          className="btn btn-outline-warning border-4 me-3"
          onClick={prev}
          disabled={index === 0}
        >
          ◀
        </button>

        {/* Cards */}
        <div className="d-flex justify-content-center flex-wrap">
          {visibleCourses.map((course, i) => (
            <a
              key={i}
              href={course.link}
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div
                className="card shadow-sm text-center p-3 mx-2"
                style={{
                  width: cardsPerPage === 1 ? "200px" : "250px",
                }}
              >

                <div
                  style={{
                    width: "100px",
                    height: "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  <img
                    src={course.img}
                    alt={course.name}
                    style={{
                      maxWidth: "90%",
                      maxHeight: "90%",
                      objectFit: "contain",
                      display: "block"
                    }}
                  />
                </div>

                <h6 className="mt-3 text-dark">{course.name}</h6>
              </div>
            </a>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          className="btn btn-outline-warning border-4 ms-3"
          onClick={next}
          disabled={index + cardsPerPage >= courses.length}
        >
          ▶
        </button>
      </div>
    </div>
  );
}

// 🔹 Page Component
function Carouselboxes() {
  const courseCategories = {
    "Full Stack Development": [
      {
        name: "Java",
        img: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
        link: "/courses/java-full-stack"
      },
      {
        name: "Python",
        img: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
        link: "/courses/python-full-stack/"
      },
      {
        name: ".NET",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg",
        link: "/courses/net-full-stack/"
      },
      {
        name: "MEAN Stack",
        img: "https://evincedev.com/blog/wp-content/uploads/2017/07/Mean-stack-technology.jpg",
        link: "/courses/mean-full-stack"
      },
      {
        name: "MERN Stack",
        img: "https://i0.wp.com/blog.apitier.com/wp-content/uploads/2023/02/MERN_Stack.jpg?fit=560%2C315&ssl=1",
        link: "/courses/mern-full-stack"
      },
    ],

    "Software Development": [
      {
        name: "Frontend",
        img: "https://media.licdn.com/dms/image/v2/D5612AQFfhTEictqBHA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721174916441?e=2147483647&v=beta&t=IqnGNJxS4J-yaL4rgLBlx-cbNAbFwpEMCRvkkLXsR48",
        link: "/courses/frontend-development"
      },
      {
        name: "Backend",
        img: "https://img.freepik.com/free-vector/back-end-typographic-header-software-development-process-website-interface-design-improvement-programming-coding-it-profession-isolated-flat-vector-illustration_613284-210.jpg",
        link: "/courses/backend-development"
      },
      {
        name: "Web Development",
        img: "https://sitegalleria.com/wp-content/uploads/2019/08/Web-Development-Company-Bangalore.jpeg",
        link: "/courses/web-development"
      },
    ],

    "Software Testing": [
      {
        name: "Manual Testing",
        img: "https://artoftesting.com/wp-content/uploads/2019/12/manual-testing-tutorial.jpg",
        link: "/courses/manual-testing"
      },
      {
        name: "Automation Testing",
        img: "https://cdn.educba.com/academy/wp-content/uploads/2019/09/Automation-Testing.png",
        link: "/courses/automation-testing"
      },
      {
        name: "Selenium",
        img: "https://www.selenium.dev/images/selenium_logo_square_green.png",
        link: "/courses/selenium"
      },
      {
        name: "JUnit",
        img: "https://junit.org/junit5/assets/img/junit5-logo.png",
        link: "/courses/junit"
      },
    ],
    "Database Management": [{
      name: "Database Administration",
      img: "https://datascientest.com/en/files/2024/04/database-admin.webp",
      link: "/courses/database-admininstration"
    },
    ],

    "Data Science & AI/ML": [
      {
        name: "Data Science",
        img: "https://www.codingal.com/resources/wp-content/uploads/2023/04/image_6_1.png",
        link: "/courses/datascience"
      },
      {
        name: "Artificial Intelligence",
        img: "https://pg-p.ctme.caltech.edu/wp-content/uploads/sites/4/2023/03/future_of_ai.jpg",
        link: "/courses/artificial-intelligence"
      },
      {
        name: "Machine Learning",
        img: "https://abctrainings.in/media/thumbnails/machine_learning.jpeg",
        link: "/courses/machine-learning"
      },
    ],

    "Business & Digital": [
      {
        name: "Business Analyst",
        img: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
        link: "/courses/bussiness-analyst-intelligence"
      },
      {
        name: "Digital Marketing",
        img: "https://cdn-icons-png.flaticon.com/512/906/906341.png",
        link: "/courses/digital-marketing"
      },

    ],

    "Emerging Technologies": [
      {
        name: "Cyber Security",
        img: "https://www.hdfcergo.com/images/default-source/cyber-insurance/types-of-vulnerability-in-cyber-security.jpg",
        link: "/courses/cybersecurity"
      },
      {
        name: "Blockchain",
        img: "https://www.bing.com/th/id/OIP.Y9BBelrBQd-gOlVGRrGPZQHaHa?w=195&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        link: "/courses/blockchain-integration"
      },
      {
        name: "DevOps",
        img: "https://upload.wikimedia.org/wikipedia/commons/0/05/Devops-toolchain.svg",
        link: "/courses/devops-engineering"
      },
      {
        name: "Cloud Computing",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Lq4wY3gr4SMhyDgzLL8s1YziyZ4IXlQMoA&s",
        link: "/courses/cloud-computing"
      },
    ],
  };


  return (
  <div className="carousel-section">
    <div className="overlay">
      <div className="container py-5 rounded shadow">
        {/* Main Heading */}
        <h2 className="fw-bold text-center mb-5 text-light">Trending Courses</h2>

        {/* Render subcategories dynamically */}
        {Object.entries(courseCategories).map(([category, courses], idx) => (
          <CourseCarousel key={idx} title={category} courses={courses} />
        ))}
      </div>
    </div>
  </div>
);

}

export default Carouselboxes;
