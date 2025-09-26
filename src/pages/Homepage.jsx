import React from 'react'
import HomeTopNavbar from '../components/HomeTopNavbar'
import HomeNavbar from '../components/HomeNavbar'
import Homehero from '../components/Homehero'
import Homewhychooseus from '../components/Homewhychooseus'
import Homecourses from '../components/Homecourses'
import Hometraining from '../components/Hometraining'
import Homehiretalent from '../components/Homehiretalent'
import Homebatchorevent from '../components/Homebatchorevent'
import Homefaq from '../components/Homefaq'
import Homecontact from '../components/Homecontact'
import Homefooter from '../components/Homefooter'
import Homesocialmedia from '../components/Homesocialmedia'
import Homeceotalk from '../components/Homeceotalk'
import HomeNavbarTop from '../components/HomeNavbarTop'

const Homepage = () => {
  return (
    <div>
        <HomeNavbarTop />
        <HomeTopNavbar />
        <HomeNavbar />
        <Homehero />
        <Homewhychooseus />
        <Homecourses />
        <Hometraining />
        <Homehiretalent />
        <Homeceotalk />
        <Homebatchorevent />
        
        <Homefaq />
        <Homecontact />
        <Homefooter />
        <Homesocialmedia />
    </div>
  )
}

export default Homepage