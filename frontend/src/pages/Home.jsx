import React from 'react'
import  Header  from '../components/Header'
import NavBar from '../components/NavBar'
const Home = () => {
  return (
    <div >
      <NavBar className='w-screen h-auto flex flex-col' />
      <Header/>
      <h2>Home Page</h2>
    </div>
  )
}

export default Home