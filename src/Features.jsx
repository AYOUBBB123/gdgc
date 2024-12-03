import React from 'react'
import Image1 from './icons/website-content 1.svg';
import Image2 from './icons/seo-tag 1.svg';
import Image3 from './icons/immersive 1.svg';
import Image4 from './icons/coding (1) 1.svg';
import Feature from './Feature';


const Features = () => {
  return (
    <div className='flex flex-wrap justify-evenly space-x-3 border-b-[0.7px] border-[#C7C7C7] items-center lg:text-center   py-4 px-6 '>

   <Feature
   name="Web Devlopment"
   desc="Lorem Ipsum is simply"
   img ={Image1}
   />
   <Feature
   name="SEO"
   desc="Lorem Ipsum is simply"
   img ={Image2}
   />
   <Feature
   name="AR/VR Solutions"
   desc="Lorem Ipsum is simply"
   img ={Image3}
   />
   <Feature
   name="Mobile Applications"
   desc="Lorem Ipsum is simply"
   img ={Image4}
   />

   </div>
  )
}

export default Features

