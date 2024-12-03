import React from 'react'
import Section from './Section';
import Image1 from './assets/17. Recent Activities 1.png';
import Image2 from './assets/website-mockup-png-10 1.png';
import Image3 from './assets/focus-parallax-hero_1920x1000_ar-vr_0917_layer1-guy 3.png';



const Sections = () => {
  return (
    <div>
      <Section 
      flex="flex-row"
      image={Image1}
      span="Lorem Ipsum "
      h1= "is simply dummy text of the printing. "
      text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "

      />
       <Section 
      flex="flex-row-reverse"
      image={Image2}
        span="Lorem Ipsum "
      h1= "is simply dummy text of the printing. "
      text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
      
      />
      <Section 
      flex="flex-row"
      image={Image3}
      span="Lorem Ipsum "
      h1= "is simply dummy text of the printing. "
      text="KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web applications and website builders measuring dozens of completed projects. We build and develop mobile applications for several top platforms, including Android  & IOS. "
      
      />
    </div>
  )
}

export default Sections
