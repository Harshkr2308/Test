import React from 'react';

const SignUpForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-5xl w-full sm:bg-[url('https://images.pexels.com/photos/3847501/pexels-photo-3847501.jpeg?auto=compress&cs=tinysrgb&w=600')] sm:bg-cover sm:bg-center sm:bg-no-repeat">
        <div className="flex flex-col sm:flex-row sm:gap-4">
          <div className="w-full sm:w-3/5">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-start">
              JOIN THE <br /> RAINBOW EDUCATIONAL INSTITUTE
            </h1>
            <p className="text-gray-600 mb-6 text-start">
              Unlock a world of knowledge and opportunity by joining our community today. By signing up, you embark on an educational journey designed to inspire, challenge, and enrich your future. Together, we'll pave the way to a brighter, more fulfilling tomorrow.
            </p>
          </div>
          <form className="w-full sm:w-2/5 mt-6 sm:mt-0 bg-black sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="FIRST NAME" 
                className="p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                type="text" 
                placeholder="LAST NAME" 
                className="p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-4">
              <input 
                type="email" 
                placeholder="EMAIL - ID" 
                className="flex-grow p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button 
                type="button" 
                className="sm:ml-4 mt-4 sm:mt-0 p-3 rounded-full bg-black text-white hover:bg-gray-800"
              >
                VERIFY
              </button>
            </div>
            <input 
              type="text" 
              placeholder="CONTACT NUMBER" 
              className="mt-4 w-full p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              placeholder="PASSWORD" 
              className="mt-4 w-full p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input 
              type="password" 
              placeholder="CONFIRM PASSWORD" 
              className="mt-4 w-full p-3 border border-gray-300 rounded-full bg-black text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              type="submit" 
              className="mt-6 w-full p-3 text-white rounded-full bg-black hover:bg-gray-800"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
