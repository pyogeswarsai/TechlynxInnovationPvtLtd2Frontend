import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/Homepage';

import Python from './Pages/python';
import Java from "./Pages/java";
import Net from "./Pages/net";
import Mean from "./Pages/mean";
import Mern from "./Pages/mern";
import WebDevelopment from "./Pages/webdevelopment";
import Frontend from "./Pages/frontend";
import Backend from "./Pages/backend";
import Ai from "./Pages/ai";
import Ml from "./Pages/ml";
import Cloud from "./Pages/cloud";
import Cyber from "./Pages/cyber";
import DataBase from "./Pages/database";
import DataScience from "./Pages/datascience";
import BlockChain from "./Pages/blockchain";
import Devops from "./Pages/devops";
import BusinessAnalyst from "./Pages/business";
import Digital from "./Pages/digital";
import Testing from "./Pages/testing";
import Selenium from "./Pages/selenium";
import Automation from "./Pages/automation";
import EnrollForm from "./Pages/enroll";
import Course from './pages/Course';

import TrainingPage from './pages/TrainingPage';

import HiringSection from "./Pages/HiringSection"
import JobApplication from "./Pages/JobApplication"

import MainContactPage from './pages/MainContactPage';
import ExpertInstructors from './pages/ExpertInstructors';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />

      <Route path='/courses' element={<Course />} />
      <Route path="/courses/python-full-stack" element={<Python />} />
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

      <Route path='/training' element={<TrainingPage />} />

      <Route path="/hire-talent" element={<HiringSection />} />
      <Route path="/hire-talent/job-form" element={<JobApplication />} />

      <Route path='/contact-us' element={<MainContactPage />} />
      <Route path='/contact-us/instructors' element={<ExpertInstructors />} />
    </Routes>
  )
}

export default App