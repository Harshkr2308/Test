import React from 'react';
import { useEffect,useRef } from 'react';

const InfoSection = ({ icon, title, description, color }) => {
  const elementsRef = useRef([]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    }, { threshold: 0.1 });

    elementsRef.current.forEach(element => {
      observer.observe(element);
    });
  }, []);
  return (
    <div className="scroll-element flex flex-col sm:flex-row text-white p-4 sm:p-6 rounded-md mb-4"
    ref={el=>elementsRef.current[0]=el}>
      <div className={`${color} p-4 rounded-md flex items-center justify-center sm:w-[40%] w-full`}>
        <img src={icon} alt="icon" className="w-16 h-16 sm:w-24 sm:h-24"/>
      </div>
      <div className="mt-4 sm:mt-0 sm:ml-4 w-full">
        <h2 className="text-lg sm:text-xl font-bold">{title}</h2>
        <p className="text-sm sm:text-base">{description}</p>
      </div>
    </div>
  );
};

export default InfoSection;
