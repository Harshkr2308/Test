// src/components/ComingSoon.js
import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen  flex items-center justify-center text-center">
      
      <div className="max-w-lg p-6 rounded-xl shadow-lg">
        <h1
          className="text-5xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500
        
        to-pink-500  text-transparent bg-clip-text pb-5"
        >
          Coming Soon
        </h1>
        <p className="text-gray-400 mb-8">
          We are working hard to bring you an awesome experience. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
