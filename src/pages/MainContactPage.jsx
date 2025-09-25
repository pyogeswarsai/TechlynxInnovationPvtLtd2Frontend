import React from 'react'
import Header from "../components/Header";
import GetInTouch from "../components/GetInTouch";
import ContactPage from "../components/ContactPage";
import FeedbackSection from "../components/FeedbackSection";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import HomeNavbar from '../components/HomeNavbar';
import Homesocialmedia from '../components/Homesocialmedia';

const MainContactPage = () => {
  return (
    <div>
      <HomeNavbar />    
      <Header />
      <GetInTouch />
      <ContactPage />
      <FeedbackSection />
      <FAQ />
      <Homesocialmedia />
      <Footer />
    </div>
  )
}

export default MainContactPage