import React from 'react'

function Footer() {
  return (
    <footer className='bg-[var(--primary)] py-5 px-30 text-[var(--white)] flex items-start justify-between w-full'>
      <h2 className='text-2xl font-bold'>Roy Coffee</h2>
      <div>
        <h3 className='text-base font-semibold'>PRIVACY</h3>
      </div>
      <div>
        <h3 className='text-base font-semibold'>SERVICE</h3>
      </div>
      <div>
        <h3 className='text-base font-semibold'>ABOUT US</h3>
      </div>
      <div>
        <h3 className='text-base font-semibold'>INFORMATION</h3>
      </div>
      <div>
        <h3 className='text-base font-semibold'>SOCIAL MEDIA</h3>
      </div>
    </footer>
  )
}

export default Footer