import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// import Navi
import { Swiper, SwiperSlide } from 'swiper/react';

import testimonial from '../../assets/testimonial.png'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
  {
    img: testimonial,
    desc: "HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare.",
    name: 'Dr. Sarah Thompson, Cardiologist',
    btn: 'Get Start',
  },
  {
    img: testimonial,
    desc: "HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare.",
    name: 'Dr. Sarah Thompson, Cardiologist',
    btn: 'Get Start',
  },
  {
    img: testimonial,
    desc: "HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare.",
    name: 'Dr. Sarah Thompson, Cardiologist',
    btn: 'Get Start',
  },
  {
    img: testimonial,
    desc: "HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare.",
    name: 'Dr. Sarah Thompson, Cardiologist',
    btn: 'Get Start',
  },
  {
    img: testimonial,
    desc: "HealTether has transformed the way I manage my cardiology practice. The streamlined appointment scheduling and telemedicine features have saved me valuable time. My patients appreciate the convenience, and I can focus more on delivering personalized care. It's a game-changer in cardiac healthcare.",
    name: 'Dr. Sarah Thompson, Cardiologist',
    btn: 'Get Start',
  },
]

const OurUser = () => {

  return (
    <div className='bg-gray -my-2 pt-6'>
      <h1 className=' text-3xl font-[500] my-2 mx-4 tablet:mx-[4rem]'>Our users</h1>

      {/* carousel */}

      <Swiper
        //  modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        // navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}

      >

        {
          data?.map((item, index) => {
            return (
              
              <SwiperSlide key={index}>
                <div className=' w-[90%] bg-white3 mx-auto rounded-md h-[34rem] mobile:h-[26rem] tablet:h-[30rem]'>

                  <div className=' flex flex-col mobile:flex-row h-[100%] mobile:h-[90%]'>

                    <div className=' flex items-center justify-center w-full mobile:w-[45%] tablet:w-1/2 h-[50%] mobile:h-[100%]'>
                      <img src={item.img} alt="testimonial" className='h-[100%]' />
                    </div>

                    <div className=' flex flex-col items-start justify-center w-full mobile:w-[55%] tablet:w-1/2 my-4'>
                      <p className='text-xs mobile:text-sm tablet:text-lg font-normal mx-4'>{item.desc}</p>
                      <h3 className='text-sm mobile:text-base tablet:text-xl font-semibold mx-4 my-2'>{item.name}</h3>
                      <button className=' bg-primary hover:bg-secondary px-6 py-3 text-white font-semibold text-base rounded-md mt-5 mx-4'>{item.btn}</button>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
              
            )
          })
        }
      </Swiper>
    </div>
  );
}

export default OurUser;
