import React from 'react';
import FoundationCard from './FoundationCard';

const TextandCard = () => {
  return (
    <div className="backround rounded-t-2xl p-5">
      <div className="text text-[40px] sm:text-[50px] md:text-[60px] lg:text-[70px] font-[700] text-white uppercase leading-tight">
        Our Programs For Your <br />
        Succesfull{' '}
        <span className="ml-0 sm:ml-2 text-[35px] sm:text-[45px] md:text-[55px] lg:text-[65px] text-[#6F7CFF] border-4 sm:border-6 md:border-8 border-dashed border-[#6F7CFF] rounded-md">
          EDUCATION
        </span>
      </div>
      <div className='flex flex-col  items-center'>
      <div className="flex flex-col gap-9 justify-center lg:flex-row mb-8 sm:mb-12 lg:mb-16 mt-6 sm:mt-8 lg:mt-10 space-y-4 lg:space-y-0 lg:space-x-4">
        <FoundationCard
          header="FOUNDATION BUILDERS"
          description="Our Foundation Builders program is designed to strengthen the basic concepts and skills of students in classes 6 to 8, laying a solid groundwork for future academic success."
          color="bg-yellow-500"
        />
        <FoundationCard
          header="BOARD EXCELLENCE"
          description="The Board Excellence program focuses on preparing students in classes 9 and 10 for their CBSE and ICSE board exams, ensuring they achieve top grades."
          color="bg-[#4e76d4]"
        />
      </div>
      <div className="flex flex-col gap-9 lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
        <FoundationCard
          header="Achievers Program"
          description="The Achievers Program is tailored for students in classes 11 and 12, aiming to prepare them for both board exams and competitive exams like JEE and NEET."
          color="bg-[#9e72b8]"
        />
        <FoundationCard
          header="Success Reimagined"
          description="The Success Reimagined program is specifically for dropper students (Class 13) who are dedicated to cracking JEE or NEET with improved scores."
          color="bg-[#ab414d]"
        />
      </div>
      </div>
    </div>
  );
};

export default TextandCard;
