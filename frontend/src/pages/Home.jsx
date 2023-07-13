import React from 'react'
// import  Header  from '../components/Header'
import HeroSection from '../components/HeroSection'
import FindJobsGlimpse from '../components/FindJobsGlimpse'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (
    <div className=' overflow-hidden'>
      <HeroSection />
      <Testimonials />
      <FindJobsGlimpse />
    </div>
  )
}

export default Home