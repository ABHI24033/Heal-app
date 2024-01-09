import React from 'react';

import google from '../../assets/img/google.png';
import apple from '../../assets/img/apple.png';
import doctor from '../../assets/img/doctor.png';
const Banner = () => {
  return (
    <div className=' relative bg-white'>
      <div>
        
      </div>
      <div className=' bg-secondary clip-path-for-mobile mobile:clip-path-for-tablet tablet:clip-path-for-desktop h-[90vh]'>

      </div>

      <div className=' absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto flex gap-4 w-[90%] h-[20rem]'>
        <div id="content" className='w-full '>
          <div className=''>
            <h1 className='text-[25px] mobile:text-[36px] tablet:text-[40px] font-semibold'>Make Your Hospital Or Clinic Digital.</h1>
            <p className='text-[12px] mobile:text-[16px] tablet:text-[18px] font-normal'> Your trusted partner in digital transformation. Our innovative platform seamlessly integrates into the workflows of both hospitals and clinics, offering a comprehensive solution for patient management.</p>
          </div>
          <button className=' bg-primary hover:bg-secondary text-white py-3 px-6 my-5 rounded-md text-base font-semibold'>Get Started</button>
          <div className=' flex gap-2 flex-wrap'>
            <img src={google} alt="google play icon" className='w-[10rem] h-[3rem] rounded-lg' />
            <img src={apple} alt="app store icons" className='w-[10rem] h-[3rem] rounded-lg' />
          </div>
        </div>

        <div className='hidden tablet:block w-[950px] h-[20rem] rounded-md'>
          <img src={doctor} alt="doctor-image"  className=' w-[100%] h-[100%] rounded-md'/>
        </div>
      </div>

    </div>
  );
}

export default Banner;
