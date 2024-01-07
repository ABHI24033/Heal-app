import React from 'react';

// images
import features1 from '../../assets/features/features1.png';
import features2 from '../../assets/features/features2.png';
import features3 from '../../assets/features/features3.png';
import features4 from '../../assets/features/features4.png';
import features5 from '../../assets/features/features5.png';
import features6 from '../../assets/features/features6.png';
import Card from './Card';

const data=[
    {
        img:features1,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
    {
        img:features2,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
    {
        img:features3,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
    {
        img:features4,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
    {
        img:features5,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
    {
        img:features6,
        heading:'Telemedicine Integration',
        para:'Incorporate telemedicine features to facilitate remote consultations, enabling doctors to connect with patients virtually for follow-ups or initial assessments.'
    },
]
const Features = () => {
  return (
    <div className=' bg-gray  px-4 py-10'>
      <h3 className=' text-3xl font-[500] my-2 mx-4 tablet:mx-[4rem]'>Features</h3>
      <div className='w-[100%] flex flex-wrap gap-2 tablet:gap-6 justify-center items-center'>
        {/* cards */}

        {
            data?.map((items,index)=>{
                return(
                    <Card data={items} key={index}/>
                )
            })
        }
        
      </div>
    </div>
  );
}

export default Features;
