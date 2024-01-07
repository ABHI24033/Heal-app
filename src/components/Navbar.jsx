import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { HiOutlineBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ activeNav }) => {
  const [navToggle, setNavToggle] = useState(false);
  const toggleNav = () => {
    setNavToggle(!navToggle);
  }
  return (
    <div className=' flex justify-between bg-white shadow-md h-[4rem] py-[0.625rem] px-[1rem] mobile:px[2rem] tablet:px-[5rem]'>
      <img className='w-[150px] mobile:w-[180px] tablet:w-[208px]' src='./logo.png' alt="logo" />

      <div className={` flex justify-end items-center tablet:justify-between w-full`}>
        <ul 
        className={`${navToggle === true ? "flex w-full absolute left-0 top-14 gap-2 flex-col bg-white2 z-30 py-2 px-2" : "tablet:flex hidden items-center w-[85%] justify-center"} font-semibold text-black text-sm`}>
            <li className=' hover:bg-gray py-2 px-2 hover:text-secondary'>
              <Link to={'/'} className={`${activeNav === 'home' ? "text-secondary" : "text-black"}`}>Home</Link>
            </li>
            <li className=' hover:bg-gray py-2 px-2 hover:text-secondary'>
              <Link to={'/product'} className={`${activeNav === 'product' ? "text-secondary" : "text-black"}`}>Our Products</Link>
            </li>
            <li className=' hover:bg-gray py-2 px-2 hover:text-secondary'>
              <Link to={'/abha'} className={`${activeNav === 'abha' ? "text-secondary" : "text-black"}`}>ABHA</Link>
            </li>
            <li className=' hover:bg-gray py-2 px-2 hover:text-secondary'>
              <Link to={'/about'} className={`${activeNav === 'about' ? "text-secondary" : "text-black"}`}>About us</Link>
            </li>
            <li className=' hover:bg-gray py-2 px-2 hover:text-secondary'>
              <Link to={'/contact'} className={`${activeNav === 'contact' ? "text-secondary" : "text-black"}`}>Contact</Link>
            </li>
          
          <li>
          <Link className={`${navToggle === true ? "block" : "hidden"}  mobile:hidden bg-primary hover:bg-secondary text-sm font-semibold px-6 py-3 white rounded-[4px] text-white w-[100px] `}>Log in</Link>
          </li>
          
        </ul>

        <Link className={`hidden mobile:block bg-primary hover:bg-secondary text-sm font-semibold px-6 py-3 white rounded-[4px] text-white w-[100px] `}>Log in</Link>
        {
          navToggle === true ? <RxCross2 className='text-5xl mx-2 cursor-pointer tablet:hidden' onClick={toggleNav} />
            : <HiOutlineBars3 className='text-5xl mx-2 cursor-pointer tablet:hidden ' onClick={toggleNav} />
        }

      </div>


    </div>
  );
}

export default Navbar;
