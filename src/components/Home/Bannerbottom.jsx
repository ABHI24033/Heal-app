import React from 'react';

import doctorFrame from '../../assets/img/doctorFrame.png';
import hospitalFrame from '../../assets/img/hospitalframe.png';
import facilityframe from '../../assets/img/facilityFrame.png';

const Bannerbottom = () => {
  return (
    <div className=' w-full bg-white3 flex flex-wrap gap-3 justify-center mobile:justify-between items-center h-auto  px-8 tablet:px-[80px] py-[40px] shadow-lg shadow-gray border border-gray '>

        <div className='flex mobile:flex-row bg-white gap-2 w-[218px] tablet:w-[300px] h-[98px] px-4 py-4  drop-shadow-lg shadow-black2 rounded '>
          <img src={doctorFrame} alt="doctor-frame" />
          <div className=''>
            <p className=' text-base leading-6'>Trusted By</p>
            <h1 className=' text-xl font-semibold leading-6'>10,000+</h1>
            <p className=' text-base leading-6'>Doctors</p>
          </div>
        </div>

        <div className='flex bg-white gap-2 w-[218px] tablet:w-[300px] h-[98px] px-4 py-4  drop-shadow-lg shadow-black2 rounded '>
          <img src={hospitalFrame} alt="doctor-frame" />
          <div className=''>
            <p className=' text-sm leading-6'>Integrated in</p>
            <h1 className=' text-xl font-semibold leading-6'>500+</h1>
            <p className=' text-sm leading-4'>Hospitals and Clinics</p>
          </div>
        </div>
        <div className='flex bg-white gap-2 w-[218px] tablet:w-[300px] h-[98px] px-4 py-4  drop-shadow-lg shadow-black2 rounded '>
          <img src={facilityframe} alt="doctor-frame" />
          <div className=''>
            <p className=' text-base leading-6'>Facilitating</p>
            <h1 className=' text-xl font-semibold leading-6'>500,000+</h1>
            <p className=' text-base leading-6'>Prescriptions</p>
          </div>
        </div>
        
      </div>
  );
}

export default Bannerbottom;
