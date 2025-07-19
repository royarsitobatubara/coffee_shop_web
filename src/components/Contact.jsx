import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { TiMessageTyping } from "react-icons/ti";
function Contact({email}) {
  return (
    <section id='contact'  className='pt-10 pb-10 min-h-dvh flex flex-col items-center justify-center gap-5'>
        <h1 className='text-3xl font-bold text-[var(--primary)]'>Contact Us</h1>
        <div className='flex flex-col gap-2 items-start'>
            <div className='flex items-center gap-2 bg-[var(--white2)] px-4 py-1 rounded-sm shadow-sm w-90'>
                <MdOutlineMail size={20} />
                <input type="email" placeholder='Your Email' value={email || "someone@example.com"} className='outline-none border-none w-full' />
            </div>
            <div className='flex items-center gap-2 bg-[var(--white2)] px-4 py-1 rounded-sm shadow-sm w-90'>
                <FaStar size={20} />
                <select name="" id="" className='outline-none border-none w-full'>
                    <option value="" disabled>rating</option>
                    <option value="">⭐</option>
                    <option value="">⭐⭐</option>
                    <option value="">⭐⭐⭐</option>
                    <option value="">⭐⭐⭐⭐</option>
                    <option value="">⭐⭐⭐⭐⭐</option>
                </select>
            </div>
            <div className='flex items-start gap-2 bg-[var(--white2)] px-4 py-1 rounded-sm shadow-sm w-120 h-50'>
                <TiMessageTyping size={20} />
                <textarea name="" id="" className='bg-[var(--white)] rounded-sm w-full h-full'></textarea>
            </div>
            <button type='button' className='w-full py-2 bg-[var(--primary)] rounded-md shadow-md active:scale-95 text-lg text-white font-semibold cursor-pointer'>Send</button>
        </div>
    </section>
  )
}

export default Contact