import React from 'react'
// import  Header  from '../components/Header'
import HeroSection from '../components/HeroSection'
import FindJobsGlimpse from '../components/FindJobsGlimpse'
import Testimonials from '../components/Testimonials'
import ContactUs from '../components/ContactUs'

const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <HeroSection />
      <Testimonials />
      <FindJobsGlimpse />
      <ContactUs/>
    </div>
  )
}

export default Home