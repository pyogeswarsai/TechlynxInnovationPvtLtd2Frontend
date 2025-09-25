import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';
import HomeProjects from './pages/HomeProjects';

import Pythonfullstack from './pages/pythonFullStack';
import Java from "./pages/java";
import Net from "./pages/net";
import Mean from "./pages/mean";
import Mern from "./pages/mern";
import WebDevelopment from "./pages/webdevelopment";
import Frontend from "./pages/frontend";
import Backend from "./pages/backend";
import Ai from "./pages/ai";
import Ml from "./pages/ml";
import Cloud from "./pages/cloud";
import Cyber from "./pages/cyber";
import DataBase from "./pages/database";
import DataScience from "./pages/datascience";
import BlockChain from "./pages/blockchain";
import Devops from "./pages/devops";
import BusinessAnalyst from "./pages/business";
import Digital from "./pages/digital";
import Testing from "./pages/testing";
import Selenium from "./pages/selenium";
import Automation from "./pages/automation";
import EnrollForm from "./pages/enroll";
import Course from './pages/Course';

import ServiceHomepage from './pages/ServiceHomepage';
import FullStackDevelopmentServices from './pages/FullStackDevelopment';
import MobileAppDevelopmentServices from './pages/MobileAppDevelopment';
import AISolutionsServices from './pages/AISolutions';
import DataAnalyticsServices from './pages/DataAnalytics';
import CloudSerives from './pages/CloudServices';
import CyberSecurityServices from './pages/CyberSecurity';
import BlockchainDevelopmentServices from './pages/BlockchainDevelopment';
import UIUXDesignServices from './pages/UIUXDesign';
import WebDevelopmentServices from './pages/WebDevelopmentServices';
import DevOpsServices from './pages/DevOpsServices';
import QaTestingServices from './pages/QaTestingServices';
import ItSupportMaintenanceServices from './pages/ItSupportMaintenance';
import DigitalMarketingServices from './pages/DigitalMarketingServices';
import HRRecruitmentServices from './pages/HRRecruitmentServices';
import HROutsourcingServices from './pages/HROutsourcingServices';

import TrainingPage from './pages/TrainingPage';

import HiringSection from "./pages/HiringSection"
import JobApplication from "./pages/JobApplication"

import MainContactPage from './pages/MainContactPage';
import ExpertInstructors from './pages/ExpertInstructors';




const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/projects' element={<HomeProjects />} />

      <Route path='/courses' element={<Course />} />
      <Route path="/courses/python-full-stack" element={<Pythonfullstack />} />
      <Route path="/courses/java-full-stack" element={<Java />} />
      <Route path="/courses/net-full-stack" element={<Net />} />
      <Route path="/courses/mean-full-stack" element={<Mean />} />
      <Route path="/courses/mern-full-stack" element={<Mern />} />
      <Route path="/courses/web-development" element={<WebDevelopment />} />
      <Route path="/courses/frontend-development" element={<Frontend />} />
      <Route path="/courses/backend-development" element={<Backend />} />
      <Route path="/courses/artificial-intelligence" element={<Ai />} />
      <Route path="/courses/machine-learning" element={<Ml />} />
      <Route path="/courses/cloud-computing" element={<Cloud />} />
      <Route path="/courses/cybersecurity" element={<Cyber />} />
      <Route path="/courses/database-administration" element={<DataBase />} />
      <Route path="/courses/datascience" element={<DataScience />} />
      <Route path="/courses/blockchain-integration" element={<BlockChain />} />
      <Route path="/courses/devops-engineering" element={<Devops />} />
      <Route path="/courses/business-analyst-intelligence" element={<BusinessAnalyst />} />
      <Route path="/courses/digital-marketing" element={<Digital />} />
      <Route path="/courses/manual-testing" element={<Testing />} />
      <Route path="/courses/selenium" element={<Selenium />} />
      <Route path="/courses/automation-testing" element={<Automation />} />
      <Route path="/enroll" element={<EnrollForm />} />

      <Route path='/services' element={<ServiceHomepage />} />
      <Route path='/services/full-stack-development-service' element={<FullStackDevelopmentServices />}/>
      <Route path='/services/web-development-service' element={<WebDevelopmentServices />} />
      <Route path='/services/mobile-app-development-service' element={<MobileAppDevelopmentServices />} />
      <Route path='/services/ai-solutions-service' element={<AISolutionsServices />} />
      <Route path='/services/data-analytics-service' element={<DataAnalyticsServices />} />
      <Route path='/services/cloud-services-service' element={<CloudSerives />} />
      <Route path='/services/devops-cicd-service' element={<DevOpsServices />} />
      <Route path='/services/cybersecurity-service' element={<CyberSecurityServices />} />
      <Route path='/services/blockchain-development-service'element={<BlockchainDevelopmentServices />} />
      <Route path='/services/qa-testing-service' element={<QaTestingServices />} />
      <Route path='/services/uiux-design-service' element={<UIUXDesignServices />} />
      <Route path='/services/itsupport-maintenance-service' element={<ItSupportMaintenanceServices />} />
      <Route path='/services/digital-marketing-service' element={<DigitalMarketingServices />} />
      <Route path='/services/recruitment-service' element={<HRRecruitmentServices />} />
      <Route path='/services/hr-outsourcing-service' element={<HROutsourcingServices />} />

      <Route path='/training' element={<TrainingPage />} />

      <Route path="/hire-talent" element={<HiringSection />} />
      <Route path="/hire-talent/job-form" element={<JobApplication />} />

      <Route path='/contact-us' element={<MainContactPage />} />
      <Route path='/contact-us/instructors' element={<ExpertInstructors />} />
    </Routes>
  )
}

export default App