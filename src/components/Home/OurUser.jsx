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
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}

      >

        {
          data?.map((item,index) => {
            return (
              // <>
                <SwiperSlide key={index}>
                  <div className=' flex w-[90%] h-[30rem] bg-white3 mx-auto'>
                    <div className='w-1/2 h-[90%]'>
                    <img src={item.img} alt="testimonial" className='h-[100%]' />
                    </div>
                   
                    <div className=' flex flex-col items-start justify-center pr-10 w-1/2'>
                      <p className='text-lg font-normal'>{item.desc}</p>
                      <h3 className='text-xl font-semibold'>{item.name}</h3>
                      <button className=' bg-primary hover:bg-secondary px-6 py-3 text-white font-semibold text-base rounded-md mt-5'>{item.btn}</button>
                    </div>
                  </div>
                </SwiperSlide>
              // </>
            )
          })
        }

       

      </Swiper>

    </div>
  );
}

export default OurUser;
