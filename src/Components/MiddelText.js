import React from 'react';

const MiddelText = () => {
  return (
    <div className='max-w-[80%] lg:max-w-[80%] mx-auto p-5 text-center '>
      <div className="text text-[36px] md:text-[50px] lg:text-[70px] font-bold text-white mt-10">
        Discover the Colors of
      </div>
      <div className='text-[#F3A052] text-[36px] md:text-[50px] lg:text-[70px] font-bold'>
        Learning 
        <span className='text-white ml-2 md:ml-3'>At Rainbow</span>
      </div>
      <div className='text-[36px] md:text-[50px] lg:text-[70px] font-bold text-white'>
        Educational
        <span className='ml-2 md:ml-3 text-[#6F7CFF] border-4 md:border-6 lg:border-8 border-dashed border-[#6F7CFF] rounded-md'>
          Institute
        </span>
      </div>
      <div className='text-[20px] md:text-[28px] lg:text-[36px] font-bold text-white'>
        Empowering Mind, Shaping
        <span className='ml-2 md:ml-3 outlined-text'>Futures</span>
      </div>
    </div>
  );
}

export default MiddelText;