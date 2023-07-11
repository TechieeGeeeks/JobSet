import React from 'react'
// import  Header  from '../components/Header'
import NavBar from '../components/NavBar'
import HomeCards from '../components/HomeCards'
import HeroSection from '../components/HeroSection'
import FindJobsGlimpse from '../components/FindJobsGlimpse'
import Footer from '../components/Footer'
import Testimonials from '../components/Testimonials'
const Home = () => {
  return (

    

    <div className=' overflow-hidden'>
      
      {/* <Header/> */}
      <NavBar />
      <HeroSection />
      <HomeCards />
      <Testimonials />
      <FindJobsGlimpse />
      <Footer />
    </div>
  )
}

export default Home