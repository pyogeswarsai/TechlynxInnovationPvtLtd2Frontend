import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero_hire from '../components/Hero_hire'
import Wedo from '../components/Wedo'
import Jobcart from '../components/Jobcart'
import CareerPrep from '../components/CareerPrep'
import Testimonials from '../components/Testimonials'
import Getintoch from '../components/Getintoch';
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
