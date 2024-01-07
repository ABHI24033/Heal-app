import React from 'react';

const FeaturesBottom = () => {
  return (
    <div className=' bg-primary w-full py-[16px] mobile:py-[30px] tablet:py-[60px] px-[24px] mobile:px-8 tablet:px-[80px]'>
        <div>
            <h1 className='text-xl mobile:text-2xl tablet:text-3xl font-semibold'>Elevate Patient Care with HealTether</h1>
            <p className='text-xs mobile:text-base tablet:text-lg font-normal'>"New heights with HealTether – your all-in-one solution for seamless healthcare management. From effortless appointment scheduling to secure patient data management, our platform is designed to enhance your practice's efficiency and focus on delivering top-notch care. Join a community of forward-thinking healthcare professionals who trust HealTether to transform their workflow.</p>
            <button className='bg-white px-6 py-3 mt-3 rounded hover:bg-white3 font-semibold text-base'>Sign up now</button>
        </div>
      
    </div>
  );
}

export default FeaturesBottom;
