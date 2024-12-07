import React from 'react'


const Section = ({flex,image,span,h1,text}) => {
  return (
    <div className={`flex flex-col-reverse lg:${flex} justify-between  items-center px-4 lg:px-14  py-4 `}>
     

        <div className='w-full text-center  lg:w-[30%] lg:text-left  '>
            <h1 className='font-semibold text-3xl pb-8 '><span className=' text-primary'>{span}</span> {h1} </h1>
            <p className='w-full px-12 text-base text-[#545454] text-center  lg:px-0 lg:text-left '>{text} </p>
        </div>

        <img src={image} alt="" className='w-[50%]  ' />
      
    </div>
  )
}

export default Section
