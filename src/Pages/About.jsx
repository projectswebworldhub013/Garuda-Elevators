import React from 'react'
import AboutHero from '../Components/AboutHero'
import AboutSection from '../Components/AboutSection'
import GarudaStats from '../Components/GarudaStats'
import VisionMissionSection from '../Components/VisionMissionSection'
import CapsuleGallery from '../Components/CapsuleGallery'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <AboutSection/>
      <GarudaStats/>
      <VisionMissionSection/>
      {/* <CapsuleGallery/> */}
    </div>
  )
}

export default About
