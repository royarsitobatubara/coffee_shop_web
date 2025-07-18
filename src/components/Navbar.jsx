import React from 'react'
import { IoIosSearch } from "react-icons/io"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <header className='fixed top-0 flex items-center justify-between w-full py-2 px-30 bg-[var(--primary)] *:select-none *:text-white'>
      <div className='flex items-center gap-2'>
        <img src={logo} alt="logo" width={40} height={40} loading='lazy' className='rounded-full aspect-square border-2' />
        <h2 className='text-sm font-semibold'>Roy Coffee</h2>
      </div>
      <nav className='flex items-center gap-x-4 *:text-sm *:font-semibold'>
        <a href="#">Home</a>
        <a href="">About</a>
        <a href="#menu">Menu</a>
        <a href="">Contact</a>
      </nav>
      <button type='button' className='p-1 shadow-md active:shadow-lg rounded-full cursor-pointer border-2 border-gray-300'><IoIosSearch size={23} /></button>
    </header>
  )
}

export default Navbar