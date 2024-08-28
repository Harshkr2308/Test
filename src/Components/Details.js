import React from 'react'
import { useEffect,useRef } from 'react';

const Details = () => {
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
    <div className='scroll-element p-4 '
    ref={el=>elementsRef.current[0]=el}
    >
      <span className=' outlined-text detailText capitalize'>Why Choose the Best for <br /> your
       
      </span>
      <span className=' ml-3 text-5xl text-[#cb823e] font-bold'>Learning Journey</span>
      
    </div>
  )
}

export default Details
