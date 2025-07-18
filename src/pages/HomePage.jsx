import React from 'react'
import Navbar from '../components/Navbar'

import { SiCoffeescript } from "react-icons/si"
import Menu from '../components/Menu'

function HomePage() {



  return (
    <div className='h-[300vh]'>

      {/* Header */}
      <Navbar />

      {/* Home */}
      <div id='home' className='flex items-center h-dvh w-full px-50 bg-[url(../assets/bg.jpeg)] bg-no-repeat bg-cover text-white  '>
        <div className='float-start'>
          <h3 className='text-xl font-semibold'>Welcome!</h3>
          <h2 className='text-5xl font-bold stroke-cyan-500 stroke-3'>We serve the richest coffee</h2>
          <h2 className='text-5xl font-bold'>in the city!</h2>
          <button type='button' className='px-6 py-2 text-sm font-bold bg-white text-[var(--primary)] rounded-full cursor-pointer my-3 shadow-md hover:shadow-xl active:scale-95 transition-all duration-200'>Order Now</button>
        </div>
      </div>

      {/* Menu */}
      <Menu />
    </div>
  )
}

export default HomePage