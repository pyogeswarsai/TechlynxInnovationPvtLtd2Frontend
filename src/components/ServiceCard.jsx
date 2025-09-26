// ServiceSection.jsx
import React from "react";
import { Link } from "react-router-dom";
import './ServiceCard.css'; 

const services = [
  {
    title: "Full Stack Development",
    description: "We build scalable front-end and back-end applications tailored for performance and growth.",
    path: "full-stack-development-service",
    vidName: "/Full_Stack_Development.mp4"
  },
  {
    title: "Web Devlopment",
    description: "We craft responsive, SEO-friendly websites that deliver seamless user experiences across devices.",
    path: "web-development-service",
    vidName: "/Web_Development.mp4"
  },
  {
    title: "Mobile App Development",
    description: "We develop intuitive Android and iOS apps optimized for speed, usability, and engagement.",
    path: "mobile-app-development-service",
    vidName: "/Mobile_app_development.mp4"
  },
  {
    title: "AI Solutions",
    description: "We integrate intelligent automation and machine learning to solve complex business challenges.",
    path: "ai-solutions-service",
    vidName: "/AI_Solutions.mp4"
  },
  {
    title: "Data Analytics",
    description: "We turn raw data into actionable insights through advanced visualization and predictive modeling.",
    path: "data-analytics-service",
    vidName: "/Data_Intelligence.mp4"
  },
  {
    title: "Cloud Services",
    description: "We deploy secure, scalable cloud infrastructure to streamline operations and reduce costs.",
    path: "cloud-services-service",
    vidName: "/Cloud_Services.mp4"
  },
  {
    title: "DevOps & CI/CD",
    description: "We automate build, test, and deployment pipelines for faster, more reliable software delivery.",
    path: "devops-cicd-service",
    vidName: "/DevOps_Engineering.mp4"
  },
  {
    title: "Cybersecurity Services",
    description: "We safeguard digital assets with proactive threat detection, encryption, and compliance solutions.",
    path: "cybersecurity-service",
    vidName: "/Cybersecurity.mp4"
  },
  {
    title: "Blockchain Development",
    description: "We build decentralized applications and smart contracts for secure, transparent transactions.",
    path: "blockchain-development-service",
    vidName: "/Blockchain_Development.mp4"
  },
  {
    title: "Quality Assurance & Testing",
    description: "We ensure product quality through rigorous manual and automated testing across platforms.",
    path: "qa-testing-service",
    vidName: "/Testing.mp4"
  },
  {
    title: "UI/UX Design",
    description: "We design visually compelling, user-centric interfaces that drive engagement and retention.",
    path: "uiux-design-service",
    vidName: "/UIUX_Design.mp4"
  },
  {
    title: "IT Support & Maintenance",
    description: "We provide reliable tech support and proactive system maintenance to keep your business running smoothly.",
    path: "itsupport-maintenance-service",
    vidName: "/IT_support.mp4"
  },
  {
    title: "Digital Marketing",
    description: "We boost your online presence with targeted campaigns, SEO, and social media strategies.",
    path: "digital-marketing-service",
    vidName: "/Digital_Marketing.mp4"
  },
  {
    title: "HR Recruitment & Talent Acquisition",
    description: "We help you find and onboard top talent through strategic sourcing and screening.",
    path: "recruitment-service",
    vidName: "/Recruitment.mp4"
  },
  {
    title: "HR Outsourcing Services",
    description: "We manage HR operations—from payroll to compliance—so you can focus on growth.",
    path: "hr-outsourcing-service",
    vidName: "/Hr_service.mp4"
  },
  {
    title: "Custom API Development & Integration",
    description: "We develop robust and scalable APIs tailored to your business needs and integrate them with your existing systems, enabling smooth data flow and automation.",
    path: "custom-api-development",
    vidName: "/Custom_API.mp4"
  },
  {
    title: "IoT Solutions",
    description: "From smart devices to industrial automation, we provide end-to-end IoT solutions that collect, analyze, and act on real-time data for smarter operations.",
    path: "iot-solutions",
    vidName: "/IoT.mp4"
  },
  {
    title: "Content Writing & Copywriting",
    description: "Our creative team crafts compelling content and copy that engages audiences, strengthens brand voice, and drives meaningful results.",
    path: "content-writing",
    vidName: "/Content_Writing.mp4"
  },
  {
    title: "Video Editing & Production",
    description: "We produce professional videos with high-quality editing, animation, and effects to communicate your message effectively across all platforms.",
    path: "video-editing",
    vidName: "/Video_editing.mp4"
  },
  {
    title: "Game Development",
    description: "Our team develops engaging games for web, mobile, and desktop, combining storytelling, graphics, and gameplay mechanics to captivate players.",
    path: "game-development",
    vidName: "/game_development.mp4"
  },
  {
    title: "Graphic Design & Branding",
    description: "We create memorable logos, brand assets, and graphic designs that visually represent your brand and leave a lasting impression.",
    path: "graphic-design",
    vidName: "/Graphic_design.mp4"
  },
  {
    title: "3D Modeling & Animation",
    description: "We design realistic 3D models and animations for games, advertising, architecture, and more, turning concepts into visually stunning realities.",
    path: "3d-modeling",
    vidName: "/Modeling.mp4"
  },
];

const serviceVideos = [

];

const ServiceCard = () => {
  return (
    <section className="py-5 bg-white" id="services">
      <div className="container">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-white">Our Services</h1>
        </div>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-4" key={index}>
              <div className="card service-card h-100 text-center p-4 shadow-sm animate__animated animate__fadeInUp">
                <div className="service-video mb-3">
                  <video className="w-100 rounded" autoPlay loop muted playsInline>
                    <source src={service.vidName} type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>
                </div>
                <h5 className="fw-bold mb-2">{service.title}</h5>
                <p className="text-muted">{service.description}</p>
                <Link to={`/services/${service.path}`} className="btn chnge">Get Started...</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCard;
