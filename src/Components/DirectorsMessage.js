import React from 'react';
import { useEffect,useRef } from 'react';

const DirectorMessage = () => {
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
    <div className=" text-white font-sans min-h-screen flex flex-col items-center justify-center p-4">
      <div className="scroll-element text-center mb-10"
      ref={el => elementsRef.current[0] = el}
      >
        <h1 className="text-4xl font-serif italic">Director’s Message</h1>
      </div>

      <div className=" flex flex-col gap-8 md:flex-row items-centerrounded-lg shadow-lg p-6 md:p-12 max-w-6xl w-full 
      
      
      "
      
      
      >
       <div className=' scroll-element w-full'
       ref={el=>elementsRef.current[1]=el}>
       
        <img 
          src="dirmes.png" 
          alt="Areeb Md Sarim" 
          className="  size-96 rounded-lg object-cover mb-6 md:mb-0 md:mr-8 border-4 border-white shadow "
        />
        </div>
        <div className=" scroll-element text-left"
        ref={el=>elementsRef.current[2]=el}
        >
          <h2 className="text-2xl font-bold mb-4">Areeb Md Sarim</h2>
          <p className="mb-4">
            As the founder & Director of Rainbow Educational Institute, I am deeply passionate about education and dedicated to helping students achieve their academic aspirations.
          </p>
          <p>
            At Rainbow Educational Institute, my goal is to create an environment where students can excel in JEE, NEET, and Board exams while also nurturing their overall growth. With a focus on high-quality education, personalized guidance, and a supportive atmosphere, I am committed to helping each student realize their full potential. Join us on this journey to academic excellence and personal success.
          </p>
          <div className="mt-6 text-gray-400">
            <p>Data Scientist</p>
            <p>Founder & Director at Rainbow Education</p>
            <p>Alumni of Indian Institute of Information Technology Guwahati (Batch 2020)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorMessage;
