import React from 'react'



const Feature = ({bg,name , img ,desc}) => {
    return (
  
        <div className=' flex flex-wrap lg:flex-nowrap pb-3 space-x-3 c'>
          <img  className={`w-20 lg:w-28 rounded-xl py-2 px-4 text-center bg-${bg}  ` } src={img} alt="" />
          <div className='w-full'>
          <p className='font-semibold text-[14px]'>{name}</p>
          <span className='w-full text-sm text-gray-800'>{desc}</span>
          </div>
        </div>
  
    )
  }
  
  export default Feature
  