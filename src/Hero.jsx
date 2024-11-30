import React from 'react';
import Group7 from './assets/Group 7.png';

const Hero = () => {
  return (
    <section className="bg-third pb-6 flex flex-col-reverse lg:flex-row items-center justify-center px-[10%]">
      <header className="flex-col space-y-8 mt-8 text-center lg:mt-0 lg:w-[50%] w-full">
        <h1 className="text-4xl font-bold">
          Experienced
          <span className="text-primary" > mobile and web applications</span> and
          website builders measuring.
        </h1>
        <p>
          KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
          applications and website builders measuring dozens of completed
          projects. We build and develop mobile applications for several top
          platforms, including Android & IOS
        </p>
        <div className="flex items-center  justify-center space-x-6 lg:space-x-10 w-full text-center mt-2">
          <button className="bg-primary  text-white py-[6px] px-6 rounded-md text-sm">
            contact us
          </button>
          <button className="bg-white border-primary border text-primary py-[6px] px-6 rounded-md text-sm">
            about us
          </button>
        </div>
      </header>
      <div className="w-[50%] ">
        <img
          src={Group7}
          alt="Illustration of mobile and web application development"
        />
      </div>
    </section>
  );
};

export default Hero;
