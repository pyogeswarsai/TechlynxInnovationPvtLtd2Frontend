import React from 'react'

import TrainingHome from '../Components/TrainingHome';
import Modes from '../Components/Modes';
import Steps from '../Components/Steps';
import CarouselBoxes from '../Components/Carouselboxes';
import Reviews from '../Components/Reviews';
import ConnectWithUs from '../Components/ConectWithUs';
import HomeNavbar from '../components/HomeNavbar';
import Homefooter from '../components/Homefooter';

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
      <Homefooter />
    </div>
  )
}

export default TrainingPage