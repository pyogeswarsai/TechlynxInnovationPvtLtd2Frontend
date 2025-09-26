import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  ListGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCheckCircle } from "react-icons/fa";
import {
  BsBook,
  BsPersonCheck,
  BsCreditCard,
  BsCameraVideo,
  BsClipboardCheck,
  BsDiagram3,
  BsAward,
} from "react-icons/bs";
import "./course.css";
import HomeNavbar from "../components/HomeNavbar";
import Homefooter from "../components/Homefooter";
import Homesocialmedia from "../components/Homesocialmedia";
import { Form } from "react-bootstrap";

function Course() {
  const slides = [
    {
      title: "Full Stack Development",
      desc: "Become a job-ready Full Stack Developer with hands-on training in React, Node.js, Express & MySQL.",
      sub: "Industry-ready curriculum with live projects.",
      img: "i1.jpg",
    },
    {
      title: "Data Science & AI",
      desc: "Master Data Science, Machine Learning & AI with real-world projects and expert mentorship.",
      sub: "Build predictive models & AI applications.",
      img: "i1.jpg",
    },
    {
      title: "Cloud & DevOps",
      desc: "Learn Cloud Computing & DevOps tools like AWS, Docker, Kubernetes, and CI/CD pipelines.",
      sub: "Gain expertise in scalable infrastructure & automation.",
      img: "i1.jpg",
    },
  ];

  // ---------- One (Courses with Filters) ----------
// ---------- One (Courses with Filters) ----------
  const filterCategories = {
    "All Courses": ["ALL"],
    "Full Stack Development": [
      "Python Full Stack Development",
      "Java Full Stack Development",
      ".NET Full Stack Development",
      "MEAN Stack",
      "MERN Stack",
    ],
    "Programming Languages & Frameworks": [
      "Java",
      "Python",
      "Node.js",
      "Flutter",
      "React Native",
    ],
    "Web Development Roles": [
      "Frontend Developer",
      "Backend Developer",
      "Web Development",
      "PHP Developer",
    ],
    "Testing & QA": [
      "Manual Testing",
      "Automation",
      "Selenium",
      "JUnit",
      "JMeter",
    ],
    "Data Science": ["Data Science", "Data Analytics", "PowerBI", "Tableau"],
    "Business & Marketing": [
      "Business Analyst",
      "Business Intelligence",
      "Digital Marketing",
    ],
    Databases: ["Database Administrator", "MySQL", "MongoDB"],
    "AI & ML": ["Artificial Intelligence", "Machine Learning", "Deep Learning"],
    "Security & Emerging Technologies": [
      "Cyber Security",
      "Blockchain Technology",
      "DevOps",
      "Cloud Computing",
    ],
  };

  const allCourses = [
    {
      title: "Python Full Stack Development",
      duration: "6 Months · Online",
      img: "/python.png",
      price: "49,999",
      path: "/courses/python-full-stack",
    },
    {
      title: "Java Full Stack Development",
      duration: "6 Months · Online",
      img: "/java.png",
      price: "49,999",
      path: "/courses/java-full-stack",
    },
    {
      title: ".NET Full Stack Development",
      duration: "6 Months · Online",
      img: "/net.jpg",
      price: "29,999",
      path: "/courses/net-full-stack",
    },
    {
      title: "MEAN Stack",
      duration: "6 Months · Online",
      img: "/mean.jpg",
      price: "49,999",
      path: "/courses/mean-full-stack",
    },
    {
      title: "MERN Stack",
      duration: "6 Months · Online",
      img: "/mern.jpeg",
      price: "49,999",
      path: "/courses/mern-full-stack",
    },
    {
      title: "Artificial Intelligence",
      duration: "6 Months · Online",
      img: "/ai.jpg",
      price: "99,999",
      path: "/courses/artificial-intelligence",
    },
    {
      title: "Machine Learning",
      duration: "6 Months · Online",
      img: "/ml.jpeg",
      price: "79,999",
      path: "/courses/machine-learning",
    },
    {
      title: "Web Development",
      duration: "6 Months · Online",
      img: "/web.jpg",
      price: "49,999",
      path: "/courses/web-development",
    },
    {
      title: "Cloud Computing",
      duration: "6 Months · Online",
      img: "/cloud.jpg",
      price: "34,999",
      path: "/courses/cloud-computing",
    },
    {
      title: "Database Administrator",
      duration: "6 Months · Online",
      img: "/data-ad.jpeg",
      price: "34,999",
      path: "/courses/database-administration",
    },
    {
      title: "Cyber Security",
      duration: "6 Months · Online",
      img: "/cyber.jpg",
      price: "49,999",
      path: "/courses/cybersecurity",
    },
    {
      title: "Data Science",
      duration: "6 Months · Online",
      img: "/data.jpeg",
      price: "69,999",
      path: "/courses/datascience",
    },
    {
      title: "Frontend Developer",
      duration: "6 Months · Online",
      img: "/front.jpg",
      price: "34,999",
      path: "/courses/frontend-development",
    },
    {
      title: "Backend Developer",
      duration: "6 Months · Online",
      img: "/back.jpg",
      price: "34,999",
      path: "/courses/backend-development",
    },
    {
      title: "Blockchain Technology",
      duration: "6 Months · Online",
      img: "/block.jpg",
      price: "59,999",
      path: "/courses/blockchain-integration",
    },
    {
      title: "DevOps",
      duration: "6 Months · Online",
      img: "/devops.png",
      price: "39,999",
      path: "/courses/devops-engineering",
    },
    {
      title: "Digital Marketing",
      duration: "6 Months · Online",
      img: "/digital.jpg",
      price: "34,999",
      path: "/courses/digital-marketing",
    },
    {
      title: "Manual Testing",
      duration: "6 Months · Online",
      img: "/test.jpg",
      price: "24,999",
      path: "/courses/manual-testing",
    },
    {
      title: "Selenium",
      duration: "6 Months · Online",
      img: "/selenium.png",
      price: "24,999",
      path: "/courses/selenium",
    },
    {
      title: "Automation",
      duration: "6 Months · Online",
      img: "/auto.jpg",
      price: "24,999",
      path: "/courses/automation-testing",
    },
    {
      title: "Java",
      duration: "6 Months · Online",
      img: "/javaCourse.jpg",
      price: "29,999",
      path: "/courses/java",
    },
    {
      title: "Python",
      duration: "6 Months · Online",
      img: "/pythonCourse.jpg",
      price: "29,999",
      path: "/courses/python",
    },
    {
      title: "Node.js",
      duration: "6 Months · Online",
      img: "/NodeCourse.jpg",
      price: "19,999",
      path: "/courses/node",
    },
    {
      title: "Flutter",
      duration: "6 Months · Online",
      img: "/flutterCourse.jpg",
      price: "14,999",
      path: "/courses/flutter",
    },
    {
      title: "React Native",
      duration: "6 Months · Online",
      img: "/reactNativeCourse.jpg",
      price: "19,999",
      path: "/courses/react-native",
    },
    {
      title: "PHP Developer",
      duration: "6 Months · Online",
      img: "/phpCourse.jpg",
      price: "39,999",
      path: "/courses/php-development",
    },
    {
      title: "JUnit",
      duration: "6 Months · Online",
      img: "/junitCourse.jpg",
      price: "17,999",
      path: "/courses/junit",
    },
    {
      title: "JMeter",
      duration: "6 Months · Online",
      img: "/jmeterCourse.jpg",
      price: "17,999",
      path: "/courses/jmeter",
    },
    {
      title: "Data Analytics",
      duration: "6 Months · Online",
      img: "/dataAnalyticsCourse.jpg",
      price: "29,999",
      path: "/courses/data-analytics",
    },
    {
      title: "PowerBI",
      duration: "6 Months · Online",
      img: "/powerBICourse.jpg",
      price: "24,999",
      path: "/courses/powerbi",
    },
    {
      title: "Tableau",
      duration: "6 Months · Online",
      img: "/tableauCourse.jpg",
      price: "24,999",
      path: "/courses/tableau",
    },
    {
      title: "Deep Learning",
      duration: "6 Months · Online",
      img: "/deepLearningCourse.jpg",
      price: "99,999",
      path: "/courses/deep-learning",
    },
    {
      title: "MySQL",
      duration: "6 Months · Online",
      img: "/mysqlCourse.jpg",
      price: "34,999",
      path: "/courses/mysql",
    },
    {
      title: "MongoDB",
      duration: "6 Months · Online",
      img: "/mongodbCourse.jpg",
      price: "34,999",
      path: "/courses/mongoDB",
    },
    {
      title: "Business Intelligence",
      duration: "6 Months · Online",
      img: "/businessIntelligenceCourse.webp",
      price: "24,999",
      path: "/courses/business-intelligence",
    },
    {
      title: "Business Analyst",
      duration: "6 Months · Online",
      img: "/businessAnalystCourse.png",
      price: "24,999",
      path: "/courses/business-analyst",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const handleExploreMore = () => setVisibleCount(allCourses.length);
  const handleShowLess = () => setVisibleCount(6);

  const filteredCourses =
    selectedCategory === "All Courses"
      ? allCourses
      : allCourses.filter((course) =>
          filterCategories[selectedCategory].includes(course.title)
        );

  const finalCourses = filteredCourses.filter((course) =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const highlights = [
    {
      video: "4498849-uhd_3840_2160_25fps.mp4",
      title: "Flexible Online Learning",
      description:
        "Learn anytime, anywhere with access to self-paced modules and expert-led live sessions designed to fit your schedule.",
    },
    {
      video: "5439078-uhd_3840_2160_25fps.mp4",
      title: "Career Launchpad Services",
      description:
        "Get personalized support with resume building, mock interviews, and exclusive job referrals to land your dream role.",
    },
    {
      video: "6209572-uhd_4096_2160_25fps.mp4",
      title: "Top-Tier Faculty & Mentors",
      description:
        "Gain insights from seasoned professionals and industry veterans with proven success in the tech world.",
    },
    {
      video: "5183279-hd_1920_1080_30fps.mp4",
      title: "Program Management & Tracking",
      description:
        "Stay on track with regular progress reviews, milestone tracking, and one-on-one support from your dedicated program manager.",
    },
    {
      video: "7646697-uhd_3840_2160_25fps.mp4",
      title: "Real-World Project Experience",
      description:
        "Master practical skills by building real applications that reflect current industry demands and workflows.",
    },
    {
      video: "5676138-hd_1920_1080_25fps.mp4",
      title: "Community & Peer Learning",
      description:
        "Join a thriving learning community to collaborate, solve problems together, and grow your professional network.",
    },
  ];

  const classroomPoints = [
    "Interactive face-to-face learning with expert trainers.",
    "Hands-on practice with real-time projects.",
    "Personalized guidance and immediate doubt clarification.",
    "Group discussions and collaborative learning.",
    "Structured syllabus with step-by-step mentoring.",
  ];
  const onlinePoints = [
    "Learn from anywhere with live instructor-led sessions.",
    "Access recorded sessions for revision.",
    "Flexible scheduling for students & working professionals.",
    "Interactive Q&A and doubt-solving during classes.",
    "Access to digital study materials and resources.",
  ];
  const selfPacedPoints = [
    "Learn anytime, anywhere at your own convenience.",
    "Lifetime access to pre-recorded video lectures.",
    "Assignments and quizzes for self-assessment.",
    "Study at your own pace without time restrictions.",
    "Best suited for independent learners and working professionals.",
  ];

  const steps = [
    {
      title: "Course Selection",
      content:
        "Browse and explore a wide range of carefully curated courses designed by industry experts. Each course is tailored to match different skill levels, from beginners to advanced learners. You can view detailed curriculum, prerequisites, and career paths before making your choice.",
      icon: <BsBook />,
    },
    {
      title: "Enroll into Course",
      content:
        "Once you’ve selected the right course, click the enroll button to instantly reserve your seat. Our platform ensures a smooth enrollment process with confirmation notifications and student dashboard updates for easy tracking.",
      icon: <BsPersonCheck />,
    },
    {
      title: "Payment",
      content:
        "We provide a secure and seamless payment experience with multiple options such as UPI, Debit/Credit Cards, and Net Banking. Your transactions are encrypted and protected by trusted payment gateways, ensuring 100% safety.",
      icon: <BsCreditCard />,
    },
    {
      title: "Live Classes",
      content:
        "Attend interactive live sessions led by certified trainers. You’ll have the opportunity to ask questions, participate in discussions, and collaborate with peers. All sessions are recorded and made available in your dashboard for anytime access.",
      icon: <BsCameraVideo />,
    },
    {
      title: "Assessments",
      content:
        "Track your learning progress with quizzes, coding assignments, and real-world case studies. Assessments are designed to strengthen your problem-solving skills and prepare you for industry challenges.",
      icon: <BsClipboardCheck />,
    },
    {
      title: "Guidance in Project",
      content:
        "Work on capstone projects under the mentorship of experts. Our mentors provide step-by-step guidance, code reviews, and real-time feedback to help you gain practical exposure and industry-ready experience.",
      icon: <BsDiagram3 />,
    },
    {
      title: "Course Completion Certificate",
      content: (
        <div className="text-center">
          <img
            src="certificate.jpg"
            alt="Certificate"
            className="certificate-img d-block mx-auto"
          />
          <p className="mt-3 text-success fw-bold fs-5">
            🎉 Congratulations! On successful completion of the course, you’ll
            receive an industry-recognized certificate that enhances your
            portfolio and boosts your career opportunities.
          </p>
        </div>
      ),
      icon: <BsAward />,
    },
  ];
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <HomeNavbar />

      {/* Wall Section */}
      <Carousel fade interval={2000} pause="hover">
        {slides.map((slide, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={slide.img}
              alt={slide.title}
              style={{ height: "550px", objectFit: "cover" }}
            />
            <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
              <h2>{slide.title}</h2>
              <p>{slide.desc}</p>
              <small>{slide.sub}</small>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* (Courses) */}
      <div className="courses-section1">
        <Container fluid className="my-5 courses-container1">
          <Row className="g-0 flex-column flex-md-row">
            <Col md={3} className="sidebar-inner1">
              <div className="bg-light p-3 shadow-sm">
                <h5 className="mb-3">Our Popular Courses</h5>
                <ListGroup variant="flush">
                  {Object.keys(filterCategories).map((category, idx) => (
                    <ListGroup.Item
                      key={idx}
                      action
                      active={selectedCategory === category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setVisibleCount(6);
                      }}
                    >
                      {category}
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
            </Col>

<Col md={9} className="p-4 course-content1">
              <div className="course-scrollable-content1">
                <h3 className="mb-4 text-center">
                  The Best Courses that we provide
                </h3>

                {/* Search Bar */}
                <Form className="mb-4 w-75 mx-auto">
                  <Form.Control
                    type="text"
                    placeholder="🔍 Search courses..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </Form>

                <Row>
                  {finalCourses.slice(0, visibleCount).map((course, idx) => (
                    <Col md={6} lg={4} key={idx} className="mb-4">
                      <Card className="h-100 shadow-sm">
                        <Card.Img variant="top" src={course.img} />
                        <Card.Body>
                          <Card.Title className="text-center">
                            {course.title}
                          </Card.Title>
                          <Card.Text className="text-center">
                            {course.duration}
                          </Card.Text>
                          <div className="d-flex justify-content-between align-items-center">
                            <Link to={course.path}>
                              <Button variant="outline-primary">
                                View Program
                              </Button>
                            </Link>
                            <div className="price-circle">
                              ₹{course.price}/-
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
                <div className="text-center mt-4">
                  {visibleCount < filteredCourses.length ? (
                    <Button
                      variant="primary"
                      
                      onClick={handleExploreMore}
                    >
                      Explore More →
                    </Button>
                  ) : (
                    filteredCourses.length > 6 && (
                      <Button
                        variant="primary"
                        
                        onClick={handleShowLess}
                      >
                        Show Less ↑
                      </Button>
                    )
                  )}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Program Highlights */}
      <div className="container py-5">
        <h2 className="text-center mb-5 fw-bold">Program Highlights</h2>
        <div className="row g-5">
          {highlights.map((item, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="highlight-card">
                <video src={item.video} autoPlay loop muted playsInline />
                <div className="title-overlay">
                  <p>{item.title}</p>
                </div>
                <div className="slide-overlay">
                  <div className="slide-text">
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Training Section */}
      <div className="container my-5">
        <h2 className="section-heading text-center fw-bold mb-5">
          We Offer Three Modes of Training
        </h2>

        {/* Classroom Training */}
        <div className="row align-items-center mb-5 mt-5">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              src="class.jpeg"
              alt="Classroom Training"
              className="img-fluid training-img animate-img"
            />
          </div>
          <div className="col-12 col-md-6 animate-text">
            <h3 className="training-heading fw-bold mb-3">
              On-premise Classroom Training
            </h3>
            <ul className="list-unstyled">
              {classroomPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="mb-2 d-flex align-items-start animate-list"
                >
                  <FaCheckCircle className="text-success me-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Online Training */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              src="online.jpeg"
              alt="Online Training"
              className="img-fluid training-img animate-img"
            />
          </div>
          <div className="col-12 col-md-6 animate-text">
            <h3 className="training-heading fw-bold mb-3">
              Instructor-Led Live Online Training
            </h3>
            <ul className="list-unstyled">
              {onlinePoints.map((point, idx) => (
                <li
                  key={idx}
                  className="mb-2 d-flex align-items-start animate-list"
                >
                  <FaCheckCircle className="text-success me-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Self-Paced Training */}
        <div className="row align-items-center mb-5">
          <div className="col-12 col-md-6 mb-3 mb-md-0">
            <img
              src="self.jpeg"
              alt="Self-Paced Training"
              className="img-fluid training-img animate-img"
            />
          </div>
          <div className="col-12 col-md-6 animate-text">
            <h3 className="training-heading fw-bold mb-3">
              Self-Paced Online Training
            </h3>
            <ul className="list-unstyled">
              {selfPacedPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="mb-2 d-flex align-items-start animate-list"
                >
                  <FaCheckCircle className="text-success me-2 mt-1" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Registration Process (Stepper) */}
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Registration Process</h2>
        <div className="stepper d-flex flex-wrap justify-content-between mb-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`step ${activeStep === index ? "active-step" : ""}`}
              onClick={() => setActiveStep(index)}
            >
              <div className="step-circle">{step.icon}</div>
              <p className="step-title">{step.title}</p>
            </div>
          ))}
        </div>
        <div className="card shadow-lg border-0 p-4 rounded-4 animate-fade">
          <h4 className="fw-bold text-primary text-center">
            {steps[activeStep].title}
          </h4>
          <div className="mt-3 fs-5 text-center">
            {steps[activeStep].content}
          </div>
        </div>
      </div>
      <Homesocialmedia />
      <Homefooter/>
    </div>
  );
}

export default Course;
