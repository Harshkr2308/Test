// src/components/ImageSlider.js
import React, { useState,useRef,useEffect } from 'react';


const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const images = [
    'https://gratisography.com/wp-content/uploads/2024/01/gratisography-cyber-kitty-800x525.jpg',
    'data:image/jpeg;base64,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',
    'https://via.placeholder.com/600x400?text=Image+3',
  ];
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="scroll-element relative max-w-[90%] md:max-w-[80%] mx-auto rounded-md mt-5 mb-10"
    ref={el => elementsRef.current[0] = el}
    >
      <div className="w-full relative rounded-lg">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full rounded-md h-64 sm:h-80 md:h-96 object-cover transition duration-500 ease-in-out"
        />
      </div>
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clip-rule="evenodd" />
</svg>

      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2  bg-opacity-50 hover:bg-opacity-75 rounded-full text-white px-2 sm:px-3 md:px-4 py-1 sm:py-2"
      >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
  <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
</svg>

      </button>
    </div>
  );
};

export default ImageSlider;
