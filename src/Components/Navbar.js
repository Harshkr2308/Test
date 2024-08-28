import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {Link as Hash} from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed w-full flex justify-between items-center py-2 px-5  text-white bg-black z-10">
      {/* Logo */} 
      <Link to="/"  className="text-2xl font-bold">
        <img className="size-14" src="logo.png" alt="Logo" />
      </Link>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Nav Links */}
      <nav
        className={`${
          isOpen ? 'block' : 'hidden'
        } absolute top-16 left-0 w-full md:static md:w-auto md:flex md:items-center transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col md:flex-row md:gap-8 text-center md:text-left bg-black">
          <li>
            <Link
              to="/program"
              className="block py-2 px-4 md:py-0 hover:text-[#F0A1FD] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              to="/resources"
              className="block py-2 px-4 md:py-0 hover:text-[#F0A1FD] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className="block py-2 px-4 md:py-0 hover:text-[#F0A1FD] transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            
          </li>
          <li className='mb-2'>
          <Hash to="contact" smooth={true} duration={500} className='cursor-pointer hover:text-[#F0A1FD] py-2 px-4 mb-2'
           onClick={() => setIsOpen(false)} >Contact Us</Hash>
          </li> 
        </ul>
      </nav>

      {/* Sign In Button */}
      <Link
        to="/sign-in"
        className="hidden md:inline-block text-[#F0A1FD]  py-2 px-4 rounded-full [#e080f2]  duration-300"
      >
        Sign In
      </Link>
    </div>
  );
};

export default Navbar;
