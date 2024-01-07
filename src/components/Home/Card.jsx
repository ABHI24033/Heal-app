import React from 'react';

const Card = ({data}) => {
    // console.log(data);
    return (
        <div className=' bg-white3 w-[48%] tablet:w-[30%] flex gap-4 items-center justify-center flex-col px-3 py-4 rounded-2xl shadow-md'>
            <img src={data?.img} alt="feature-2" className=' h-[5.5rem] mobile:h-[7.5rem] tablet:h-[10rem]' />
            <div className='my-2'>
                <h1 className=' text-base mobile:text-lg tablet:text-xl font-semibold text-center'>{data?.heading}</h1>
                <p className=' text-xs mobile:text-sm tablet:text-base font-normal text-center'>{data?.para}</p>
            </div>

        </div>
    );
}

export default Card;
