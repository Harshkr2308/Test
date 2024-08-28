import React from "react";
import { useEffect,useRef } from "react";
import { Element } from 'react-scroll';


function ContactForm() {
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
    <Element name="contact" className="flex items-center justify-center mb-2 mt-0 p-4">
      <div className="bg-black sm:bg-[url('https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg?auto=compress&cs=tinysrgb&w=600')] flex flex-col sm:flex-row p-6 pb-0 rounded-lg shadow-lg max-w-6xl w-full gap-4 sm:gap-2">
        <div className="w-full sm:w-1/2 text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
            <span className=" scroll-element block p-2 new-amsterdam-regular text-6xl textborder"
            ref={el=>elementsRef.current[0]=el}>Got Any More Queries?</span>
            <span className="scroll-element block text-[40px] sm:text-[60px] font-bold mt-2 new-amsterdam-regular text-black  "
            ref={el=>elementsRef.current[1]=el}>
              We'll Call You
            </span>
          </h2>
          <div className="flex justify-center sm:justify-start mt-4 sm:mt-0">
            <img
              src="phone.png"
              alt="Phone chat"
              className="h-32 w-32 sm:h-auto sm:w-auto"
            />
          </div>
        </div>

        <form className="space-y-4 w-full sm:w-1/2 mt-6 sm:mt-12">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-black text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Contact Number"
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-black text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email - ID"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <textarea
              placeholder="Type Down Your Query..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-black text-white focus:ring-2 focus:ring-blue-500 h-32"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all"
          >
            Submit
          </button>
        </form>
      </div>
    </Element>
  );
}

export default ContactForm;
