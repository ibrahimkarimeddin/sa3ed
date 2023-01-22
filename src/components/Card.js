import React from 'react'

function Card({CardItems}) {
  return (
    <div className='bg-white rounded-xl shadow-md h-[30vh] md:h-[40vh] pt-2'>
        <img src={CardItems.src} className="w-[80%]  h-[50%] mx-auto rounded-lg" alt="image_swiper_product" />
        <p className='text-center mt-2 truncate max-w-[140px] mx-auto font-semibold'>{CardItems.name}</p>
        <p className='secondary text-center'>  ليرة 7000</p>
        <p className='secondary text-center'>6 قطع</p>
    </div>
  )
}

export default Card