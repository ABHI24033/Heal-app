import React from 'react';

const ConnectWithUs = () => {
  return (
    <div>
      <h1 className=' text-3xl font-[500] mt-7 py-2 mx-4 tablet:mx-[4rem]'>Connect with us</h1>
      <div className='w-[90%] mx-auto'>

        <form className=' bg-white flex flex-col  gap-6 items-center justify-center'>
          <div className='flex'>
            <div className=' flex bg-red flex-col'>
              <label htmlFor="Name" className=' block'>Your Name</label>
              <input type="text"
                id='Name'
                name='Name'
                className=' '
                placeholder='Enter your name here'

              />
              <label htmlFor="phone" className='flex flex-col'>Enter your phone number</label>
              <input type="number"
                id='phone'
                name='phone'
                className=''
                placeholder='Enter your phone number'

              />
            </div>
            <div className=' flex flex-col'>
              <label htmlFor="Name" className='flex flex-col'>Your Name</label>
              <input type="text"
                id='Name'
                name='Name'
                className=''
                placeholder='Enter your name here'

              />
              <label htmlFor="phone" className='flex flex-col'>Enter your phone number</label>
              <input type="number"
                id='phone'
                name='phone'
                className=''
                placeholder='Enter your phone number'

              />
            </div>

            
          </div>
          <button>Submit</button>

        </form>

        <footer className=' bg-primary'>

        </footer>
      </div>
    </div>
  );
}

export default ConnectWithUs;
