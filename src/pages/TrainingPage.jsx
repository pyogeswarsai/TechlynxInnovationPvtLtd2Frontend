import React from 'react'

import TrainingHome from '../components/TrainingHome';
import Modes from '../components/Modes';
import Steps from '../components/Steps';
import CarouselBoxes from '../components/Carouselboxes';
import Reviews from '../components/Reviews';
import ConnectWithUs from '../components/ConectWithUs';
import HomeNavbar from '../components/HomeNavbar';
import Homefooter from '../components/Homefooter';
import Homesocialmedia from '../components/Homesocialmedia';

const TrainingPage = () => {
  return (
    <div>
      <HomeNavbar />
      <TrainingHome />
      <Modes/>
      <Steps />
      <CarouselBoxes/>
      <Reviews />
      <ConnectWithUs/>
      <Homesocialmedia />
      <Homefooter />
    </div>
  )
}

export default TrainingPage