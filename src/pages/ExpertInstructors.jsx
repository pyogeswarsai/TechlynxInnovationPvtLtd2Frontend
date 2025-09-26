import React from "react";
import styled, { keyframes } from "styled-components";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaReact,
  FaAngular,
  FaVuejs,
  FaPhp,
  FaGit,
  FaDocker,
} from "react-icons/fa";

import {
  SiRubyonrails,
  SiKotlin,
  SiSwift,
  SiTypescript,
  SiGo,
  SiC,
  SiCplusplus,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

const slideShow = keyframes`
  0% { background-image: url("https://wordandway.org/wp-content/uploads/2017/08/webRNS-CARTER-CHURCH1-072817.jpg"); }
  33% { background-image: url("https://i.pinimg.com/736x/db/ef/99/dbef99e72c80addb81a9b39c3c80b8a6.jpg"); }
  66% { background-image: url("https://i.pinimg.com/736x/9d/a3/aa/9da3aad4357c549e9a3449e667afd7f9.jpg"); }
  100% { background-image: url("https://i.pinimg.com/1200x/da/e5/15/dae5151f2233ec2c33a168a5bd4418a5.jpg"); }
`;


// Fade-in animation
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled Components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  position: relative;
  overflow-x: hidden;
`;

/* Floating animation for circles */
const FloatingCircle = styled.div`
  position: absolute;
  border-radius: 50%;
  background-color: rgba(0, 123, 255, 0.1);
  animation: float 20s infinite ease-in-out;

  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
`;

const HeroSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-attachment: fixed;
  background-size: cover;
  // background-position: center;
  min-height: 730px;
  padding: 0 20px;
  color: #ff0000ff;
  text-align: left;
  animation: ${slideShow} 10s infinite ease-in-out;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    padding: 0 15px;
  }
`;

const HeroText = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  padding-top: 100px;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
    padding-top: 60px;
  }

  @media (max-width: 600px) {
    font-size: 1.8rem;
    padding-top: 40px;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);  /* Default: 4 cards on laptops/desktops */
  gap: 25px;
  padding: 20px;
  text-align: center;

  @media (max-width: 991px) {   /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {   /* Mobile */
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 20px rgba(0, 123, 255, 0.2);
  }

  @media (max-width: 991px) {  /* Tablet breakpoint */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {  /* Mobile */
    grid-template-columns: 1fr;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
  margin-bottom: 15px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 60px 0 30px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const InstructorsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* Default: 3 cards per row */
  gap: 25px;
  padding: 0 20px 50px;

  @media (max-width: 991px) {   /* Tablet */
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {   /* Mobile */
    grid-template-columns: 1fr;
  }
`;

const InstructorCard = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 1s ease forwards;
  opacity: 0;

  &:hover {
    transform: translateY(-5px);
    background: #e9900aff;
  }

  &:hover .social-icons {
    opacity: 1;
    transform: translateY(0);
  }
`;

const InstructorImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 400px;
  height: 250px;
  margin: 0 auto 15px;
  border-radius: 10px;

  @media (max-width: 480px) {
    height: 200px;
  }
`;

const InstructorImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialIcons = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 0;
  transform: translateY(-50%) translateX(20px);
  transition: all 0.3s ease;

  ${InstructorImageWrapper}:hover & {
    opacity: 1;
    transform: translateY(-50%) translateX(0);
  }

  a {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const InstructorName = styled.h3`
  margin: 10px 0 5px;
`;

const InstructorTitle = styled.p`
  font-size: 14px;
  color: #555;
`;

const HorizontalLine = styled.hr`
  width: 70px;
  border: 2px solid #fd2010ff;
  margin: 15px auto;
`;

const CategoriesSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: #4a9799ff;
  padding: 50px 30px;
  gap: 40px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 20px;
    text-align: center;
  }
`;

const CategoriesLeft = styled.div`
  flex: 1;
  min-width: 280px;
`;

const CategoriesRight = styled.div`
  flex: 2;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 20px;
`;

const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.5rem;
  color: #ffffff;
`;

const CategoryName = styled.span`
  font-size: 1rem;
  margin-top: 8px;
  text-align: center;
`;

const ScrollingIconsWrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const ScrollingIcons = styled.div`
  display: flex;
  gap: 30px;
  animation: scroll 20s linear infinite;

  @keyframes scroll {
    0% {
      transform: translateX(10%);
    }
    100% {
      transform: translateX(-80%);
    }
  }
`;

const ExpertInstructors = () => {
  const features = [
    { id: 1, title: "Online Courses", imageUrl: "https://i.pinimg.com/1200x/22/87/12/228712316612e1ddbc0877a14ae370d1.jpg" },
    { id: 2, title: "Expert Trainers", imageUrl: "https://i.pinimg.com/1200x/ff/24/a1/ff24a1b6b96e8c86d9d6026d4c3cefd5.jpg" },
    { id: 3, title: "Get Certification", imageUrl: "https://i.pinimg.com/1200x/68/a1/c0/68a1c0ce46484dfe6185b29dfb8a534e.jpg" },
    { id: 4, title: "Job Opportunity", imageUrl: "https://i.pinimg.com/736x/40/07/a2/4007a2c7a1515c29231fb087357ad6a3.jpg" },
  ];

  const instructors = [
    { id: 1, name: "John Doe", title: "React Specialist", imageUrl: "https://i.pinimg.com/736x/ef/2f/be/ef2fbe1ed2d83bc599221cb50f206037.jpg" },
    { id: 2, name: "Jane Smith", title: "Fullstack Developer", imageUrl: "https://chaceacademy.com/wp-content/uploads/2023/08/2.png" },
    { id: 3, name: "Mike Johnson", title: "Python Expert", imageUrl: "https://static5.depositphotos.com/1000393/426/i/450/depositphotos_4261879-stock-photo-teacher-portrait.jpg" },
    { id: 4, name: "Sarah Williams", title: "UI/UX Designer", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGZhPXIG4kr8N_8aU8wC9CG6HkRiu5jvWRJ_Vl2be72l0Vlskcfzw6wMjl8ZekNok9h2E&usqp=CAU" },
    { id: 5, name: "David Lee", title: "DevOps Engineer", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MPFub_Z9XBVVXhKwHjqu7FneIH5VLhcHRg&s" },
    { id: 6, name: "Emily Davis", title: "Machine Learning Expert", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0VJUohwYnIQ4ny5e24EdD8arqjXMAOHwo2_5RQSVCPfL033YsOXQr-8ggkDWNc7EHCc&usqp=CAU" },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <HeroSection>
        <HeroText className="display-1 get ">
          Empowering Experts, Shaping Futures
          <p className="fs-5 text-light send text-center mt-3">
            Our training programs are designed to foster practical skills, industry insights, and career growth,
            bridging the gap between learning and employment.
          </p>
        </HeroText>
      </HeroSection>

      {/* Feature Grid */}
      <FeatureGrid className="bg-primary">
        {features.map((feature) => (
          <FeatureCard key={feature.id}>
            <FeatureImage src={feature.imageUrl} alt={feature.title} />
            <h4 className="send">{feature.title}</h4>
          </FeatureCard>
        ))}
      </FeatureGrid>

      {/* Expert Instructors Section */}
      <SectionTitle className="send">OUR EXPERT INSTRUCTORS</SectionTitle>
      <InstructorsGrid>
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id}>
            <InstructorImageWrapper>
              <InstructorImage src={instructor.imageUrl} alt={instructor.name} />
              <SocialIcons className="social-icons">
                <a href="#" className="bg-warning p-2 rounded-circle">
                  <FaLinkedin size={16} />
                </a>
                <a href="#" className="bg-warning p-2 rounded-circle">
                  <FaTwitter size={16} />
                </a>
                <a href="#" className="bg-warning p-2 rounded-circle">
                  <FaGithub size={16} />
                </a>
              </SocialIcons>
            </InstructorImageWrapper>
            <InstructorName className="heading">{instructor.name}</InstructorName>
            <HorizontalLine />
            <InstructorTitle>{instructor.title}</InstructorTitle>
          </InstructorCard>
        ))}
      </InstructorsGrid>

      {/* Categories Section */}
      <CategoriesSection>
        <CategoriesLeft>
          <h2 className="text-warning h1 fw-bold heading">Explore Our Categories</h2>
          <p className="send">
            Discover the most popular programming languages and technologies that help you master your career.
            Get hands-on experience in Python, Java, HTML, and more with our expert instructors.
          </p>
        </CategoriesLeft>

        <CategoriesRight className="pt-5 mt-3">
          <ScrollingIconsWrapper>
            <ScrollingIcons>
              <CategoryCard><FaPython size={32} /><CategoryName>Python</CategoryName></CategoryCard>
              <CategoryCard><FaJava size={32} /><CategoryName>Java</CategoryName></CategoryCard>
              <CategoryCard><FaHtml5 size={32} /><CategoryName>HTML5</CategoryName></CategoryCard>
              <CategoryCard><FaCss3Alt size={32} /><CategoryName>CSS3</CategoryName></CategoryCard>
              <CategoryCard><FaJs size={32} /><CategoryName>JavaScript</CategoryName></CategoryCard>
              <CategoryCard><FaNodeJs size={32} /><CategoryName>Node.js</CategoryName></CategoryCard>
              <CategoryCard><FaReact size={32} /><CategoryName>React</CategoryName></CategoryCard>
              <CategoryCard><FaAngular size={32} /><CategoryName>Angular</CategoryName></CategoryCard>
              <CategoryCard><FaVuejs size={32} /><CategoryName>Vue.js</CategoryName></CategoryCard>
              <CategoryCard><FaPhp size={32} /><CategoryName>PHP</CategoryName></CategoryCard>
              <CategoryCard><SiRubyonrails size={32} /><CategoryName>Ruby on Rails</CategoryName></CategoryCard>
              <CategoryCard><SiKotlin size={32} /><CategoryName>Kotlin</CategoryName></CategoryCard>
              <CategoryCard><SiSwift size={32} /><CategoryName>Swift</CategoryName></CategoryCard>
              <CategoryCard><SiTypescript size={32} /><CategoryName>TypeScript</CategoryName></CategoryCard>
              <CategoryCard><SiGo size={32} /><CategoryName>Go</CategoryName></CategoryCard>
              <CategoryCard><SiC size={32} /><CategoryName>C</CategoryName></CategoryCard>
              <CategoryCard><SiCplusplus size={32} /><CategoryName>C++</CategoryName></CategoryCard>
              <CategoryCard><SiMongodb size={32} /><CategoryName>MongoDB</CategoryName></CategoryCard>
              <CategoryCard><SiMysql size={32} /><CategoryName>MySQL</CategoryName></CategoryCard>
              <CategoryCard><FaGit size={32} /><CategoryName>Git</CategoryName></CategoryCard>
              <CategoryCard><FaDocker size={32} /><CategoryName>Docker</CategoryName></CategoryCard>
            </ScrollingIcons>
          </ScrollingIconsWrapper>
        </CategoriesRight>
      </CategoriesSection>
    </PageContainer>
  );
};

export default ExpertInstructors;