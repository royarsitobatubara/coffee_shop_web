import React from 'react'
import ENDPOINTS from '../api/endpoints.js'

function ProductItem({id, image, name, price, description}) {
  const convertPrice = Number(price)
  return (
    <div className='bg-[var(--white)] p-2 flex flex-col rounded-sm'>
      <img src={`${ENDPOINTS.UPLOADS}/${image}`} alt={name} loading='lazy' className='bg-gray-400 rounded-sm object-cover w-[160px] h-[200px]' />
      <h2 className='text-start text-lg text-[var(--primary)] font-bold'>{name}</h2>
      <p className='text-justify text-sm font-extralight truncate overflow-hidden whitespace-nowrap'>{description}</p>
      <div className='flex items-center justify-between *:text-sm font-semibold'>
        <span>Rp. {convertPrice.toLocaleString("id-ID")}</span>
        <button type='button' className='bg-[var(--primary)] px-2 py-1 text-white rounded-sm cursor-pointer active:scale-95'>Add Cart</button>
      </div>
    </div>
  )
}

export default ProductItem