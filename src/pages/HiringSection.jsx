import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_hire from '../Components/Hero_hire'
import Wedo from '../Components/Wedo'
import Jobcart from '../Components/Jobcart'
import CareerPrep from '../Components/CareerPrep'
import Testimonials from '../Components/Testimonials'
import Getintoch from '../Components/Getintoch';
import JobApplication from "./JobApplication"
import HomeNavbar from '../components/HomeNavbar';
import Homefooter from '../components/Homefooter';
const HiringSection = () => {
  return (
    <div>
      <HomeNavbar />
      <Hero_hire />
      <Wedo />
      <section id='Jobcart'>
        <Jobcart  />
      </section>
      <CareerPrep />
      <Testimonials />
      <section id='Getintoch'>
        <Getintoch />
      </section>
      <Homefooter />
    </div>
  )
}

export default HiringSection;
