import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import CustomerCommentItem from '../components/CustomerCommentItem'
import { MdOutlineMail } from "react-icons/md"

import handgetcoffee from '../assets/handgetcoffee.png'
import spoongetcoffee from '../assets/spoongetcoffee.png'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LoginPage from './LoginPage'
import { useState } from 'react'

function HomePage() {

  const [viewLogin, setViewLogin] = useState(false)

  return (
    <div className='relative'>

      {/* Header */}
      <Navbar setLogin={setViewLogin} />

      {/* Home */}
      <section id='home' className='flex items-center h-dvh w-full px-50 bg-[url(../assets/bg.jpeg)] bg-no-repeat bg-cover text-white  '>
        <div className='float-start'>
          <h3 className='text-xl font-semibold'>Welcome!</h3>
          <h2 className='text-5xl font-bold stroke-cyan-500 stroke-3'>We serve the richest coffee</h2>
          <h2 className='text-5xl font-bold'>in the city!</h2>
          <button type='button' className='px-6 py-2 text-sm font-bold bg-white text-[var(--primary)] rounded-full cursor-pointer my-3 shadow-md hover:shadow-xl active:scale-95 transition-all duration-200'>Order Now</button>
        </div>
      </section>

      {/* Menu */}
      <Menu />

      <section className='w-full py-10 flex items-center justify-between bg-[var(--white2)]'>
        <img src={handgetcoffee} alt="pict" loading='eager' className='w-50' />
        <div>
          <h1 className='text-4xl font-bold text-[var(--primary)]'>Check out our best</h1>
          <h1 className='text-4xl font-bold text-[var(--primary)]'>coffee betans</h1>
          <button className='px-5 py-1 mt-5 bg-[var(--primary)] rounded-full text-sm text-white font-semibold cursor-pointer active:scale-95'>Check Out</button>
        </div>
        <img src={spoongetcoffee} alt="pict" loading='eager' className='w-50' />
      </section>

      <section className='flex flex-col items-center pt-20 pb-10'>
        <i className='font-semibold text-[var(--primary)]'>Come And Join</i>
        <h2 className='font-bold text-[var(--primary)] text-3xl'>Our Happy Customers</h2>
        <div className='mt-10 flex gap-2'>
          <CustomerCommentItem />
          <CustomerCommentItem />
          <CustomerCommentItem />
        </div>
      </section>

      <section className='bg-[var(--white2)] items-center justify-center py-10 flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-[var(--primary)]'>Join in and get 2% off!</h1>
        <p className='text-[var(--primary)]'>Subscribe to our member and get 2% discound of coffee</p>
        <div className='flex items-center gap-2 w-full justify-center'>
          <div className='flex items-center px-4 gap-2 bg-[var(--white)] rounded-full py-1 w-[30%]'>
            <MdOutlineMail size={20} />
            <input type="email" placeholder='your email' className='h-full w-full outline-none border-none py-2' />
          </div>
          <button type='button' className='bg-[var(--primary)] px-6 py-2 h-full cursor-pointer active:scale-95 font-semibold text-white rounded-full'>Subscribe</button>
        </div>
      </section>

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <Footer />

      {viewLogin && <LoginPage setLogin={setViewLogin} />}
    </div>
  )
}

export default HomePage