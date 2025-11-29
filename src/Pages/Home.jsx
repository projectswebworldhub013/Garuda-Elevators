import React from 'react'
import HeroSection from '../Components/HeroSection'
import ElevatorsShowcase from '../Components/ElevatorsShowcase'
// import FeaturedProjects from '../Components/FeatruredProjects'
import HowWeWork from '../Components/HowWeWork'
import WhyChooseUs from '../Components/WhyChooseUs'
import Testimonials from '../Components/Testimonials'
import GarudaStats from '../Components/GarudaStats'
import PartnersMarquee from '../Components/PartnersMaequee'
import CapsuleGallery from '../Components/CapsuleGallery'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <ElevatorsShowcase/>
      <WhyChooseUs/>
      <PartnersMarquee/>
      <HowWeWork/>
      {/* <FeaturedProjects/> */}
      <CapsuleGallery/>
      <GarudaStats/>
      <Testimonials/>
    </div>
  )
}

export default Home
