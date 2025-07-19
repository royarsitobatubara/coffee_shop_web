import React from 'react'
import dumbProfile from "../assets/dumbProfile.jpeg"
import ENDPOINTS from '../api/endpoints'

function CustomerCommentItem({name, commentar, star=5, photo}) {
    const starEmote = '⭐'
    const starAmount = starEmote.repeat(Number(star))
  return (
    <div className='bg-gray-200 w-80 px-4 py-2 rounded-sm shadow-md flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <img src={photo ? `${ENDPOINTS.UPLOADS}/${photo}` : dumbProfile} alt="profile" loading='lazy' className='w-12 h-12 bg-gray-300 rounded-full' />
                <h3 className='text-sm font-semibold'>{name || "Someone"}</h3>
            </div>
            <h3 className='text-sm'>{starAmount}</h3>
        </div>

        <div className='h-30'>
            <p className='text-sm text-start'>{commentar || "Good"}</p>
        </div>
    </div>
  )
}

export default CustomerCommentItem