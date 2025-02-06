import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

export const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () =>
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  const handleNext = () =>
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex(prev => (prev === images.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="w-full flex items-center">
      <button
        onClick={handlePrev}
        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronLeft />
      </button>
      <div className="flex-1 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0 relative">
              <img src={image.src} alt={image.alt} className="w-full object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                {image.title}
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={handleNext}
        className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100"
      >
        <ChevronRight />
      </button>
    </div>
  );
};
