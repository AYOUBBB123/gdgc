import { useState } from 'react';
import menu from './assets/menu.png'; 

const Navbar = () => {
    const [IsMobile,setIsMoile] = useState(true)

    function handleIsMoile() {
        setIsMoile((IsMobile)=> !IsMobile);
    }
  return (
    <nav className=" relative flex justify-between ml-3 md:justify-around text-center my-0 md:my-3">

      <div className="text-primary text-4xl">
        <h3 className="font-bold text-[29px] uppercase text-primary mt-1 md:mt-0">Logo</h3>
      </div>

      <div className="hidden md:flex justify-between space-x-10 mt-2">
        <a href="#" className="text-red">home</a>
        <a href="#" className="hover:text-primary">about us</a>
        <a href="#" className="hover:text-primary">service</a>
        <a href="#" className="hover:text-primary">blog</a>
      </div>

      <div>
        <button
          className="hidden md:flex items-center bg-primary text-white py-[6px] px-3 rounded-md text-[13px]"
        >
          contact us
        </button>
        {/* Mobile Menu Icon */}
        { !IsMobile ? (
          <p 
          onClick={handleIsMoile}
          className='z-10 text-4xl absolute right-4 '>&times;</p>
        ):(
          <img
          src={menu} 
          className= {!IsMobile ? `hidden`:` z-10 w-[20px] mt-3 mr-3 md:hidden`}
          alt="menu"
          onClick={handleIsMoile}
        />
        )

        }
        
        { !IsMobile && (
          
       <div className=" absolute right-0 flex flex-col space-y-16 m-0 pt-20 h-screen pb-20 w-[200px] bg-[#1090CBEE] overflow-hidden   md:hidden">
        <a href="#" className="text-red">home</a>
        <a href="#" className="hover:text-primary">about us</a>
        <a href="#" className="hover:text-primary">service</a>
        <a href="#" className="hover:text-primary">blog</a>
      </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
