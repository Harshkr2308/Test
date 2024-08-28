import React from 'react';
import { useEffect,useRef } from 'react';
import { Link } from 'react-router-dom';

const FoundationCard = ({ header, description, color, bgdot }) => {
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
    <Link className={`scroll-element max-w-full sm:max-w-sm mx-auto p-4 sm:p-6 ${color} rounded-xl relative shadow-lg cursor-pointer `}
    ref={el => elementsRef.current[0] = el}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`${bgdot} h-8 w-8 sm:h-12 sm:w-12 rounded-full opacity-50 transform rotate-45`}></div>
        <div className={`${bgdot} h-8 w-8 sm:h-12 sm:w-12 rounded-full opacity-50 transform rotate-45 ml-2 sm:ml-6`}></div>
        <div className={`${bgdot} h-8 w-8 sm:h-12 sm:w-12 rounded-full opacity-50 transform rotate-45 ml-2 sm:ml-6`}></div>
      </div>

      {/* Text content */}
      <div className="relative z-10">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black uppercase">
          {header}
        </h1>
        <p className="text-black mt-2 sm:mt-4 text-xs sm:text-sm uppercase">
          {description}
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-[20%] sm:top-[25%] right-0 h-4 sm:h-5 w-2 sm:w-3 bg-black rounded-l-xl"></div>
      <div className="absolute right-0 top-[60%] sm:top-[65%] h-4 sm:h-5 w-2 sm:w-3 bg-black rounded-l-xl"></div>
    </Link>
  );
};

export default FoundationCard;
