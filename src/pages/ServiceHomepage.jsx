import React from 'react'
import HomeNavbar from '../components/HomeNavbar'
import ServiceHero from '../components/ServiceHero'
import ServiceCard from '../components/ServiceCard'
import Homefooter from '../components/Homefooter'
import Homesocialmedia from '../components/Homesocialmedia'

const ServiceHomepage = () => {
  return (
    <div>
        <HomeNavbar />
        <ServiceHero />
        <ServiceCard />
        <Homesocialmedia />
        <Homefooter />
    </div>
  )
}

export default ServiceHomepage