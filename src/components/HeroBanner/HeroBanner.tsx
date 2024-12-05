import React, { useState } from 'react';
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa';

const slides = [
  {
    text: 'Stay Tuned for the',
    highlight: 'Global Real Estate Summit of 2025!',
    subText: 'We bring you in touch with Experts in the trade.',
    subText2: 'Come and learn and share your experience.',
    image: 'https://res.cloudinary.com/drcc4uyxf/image/upload/v1732231782/banner_pjeew5.png'
  },
  {
    text: 'Connect with Experts in the Trade!',
    subText: 'Join the conversation and grow your network.',
    subText2: '',
    image: 'https://res.cloudinary.com/drcc4uyxf/image/upload/v1732231782/banner_pjeew5.png'
  }
];

export const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-[1104px] h-auto pt-[24px] px-[24px] gap-[24px] opacity-1 ">
      <div className="relative w-[769px] h-[128px] flex overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute top-1/2 -left-0 transform -translate-y-1/2 w-[40px] h-[40px] opacity-1 from-[#005F73] via-[#FF9700] to-[#000034] rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 z-10"
          aria-label="Previous Slide"
        >
          <div className="w-[40px] h-[40px] bg-gradient-to-b from-[#005F73] via-[#FF9700] to-[#000034] rounded-full flex items-center justify-center">
            <FaChevronCircleLeft size={35} className="text-white" />
          </div>
        </button>

        <div className="relative w-[705.88px] h-[128px]">
          <svg
            className="absolute top-0 left-8 w-[705.88px] h-[128px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 690  128"
            preserveAspectRatio="xMidYMid meet"
            gradientTransform="rotate(180)"
            //style="transform: rotate(-90deg);">
          >
            <path
              fill="url(#backgroundGradient)"
              stroke="url(#bordergradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              gradientTransform="rotate(270)"
              d="M 7 1 
                Q 15 0 20 0 
                L 685 0 
                Q 700 0 695 10 
                L 670 68 
                L 695 118 
                Q 700 128 685 128 
                L 10 128 
                Q 0 128 0 120
                L 29 68 
                L 0 10 
                Q 0 0 19 0
                Z"
            />
            <defs>
              <linearGradient id="backgroundGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#B4BBD9', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#FFFFFF', stopOpacity: 1 }} />
              </linearGradient>

              <linearGradient id="bordergradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#005F73', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: '#FF9700', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#000034', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>

          <div className="relative w-[690px] h-[120px] left-1 flex items-center justify-center">
            <div className="w-[270px] h-[120px] flex items-center justify-center">
              <img
                src={slides[currentSlide].image}
                alt="Slide Image"
                className="w-[120px] h-[120px] object-cover rounded-lg ml-20"
              />
            </div>

            <div className="w-[444px] h-[90px] flex flex-col items-center justify-center  gap-0 text-center ">
              <h2 className="font-[Inter] text-[18px] font-[500] leading-[21.78px] text-blue-950">
                {slides[currentSlide].text}{' '}
                <span className="text-[18px] font-['Meriweather'] font-[900] text-red-600 leading-[22.63px]">
                  {slides[currentSlide].highlight}
                </span>
              </h2>
              <p className="font-[Inter] text-[18px] font-[500] leading-[22.78px] text-blue-950">
                {slides[currentSlide].subText}
              </p>
              {slides[currentSlide].subText2 && (
                <p className="font-[Inter] text-[18px] font-[500] leading-[22.78px] text-blue-950">
                  {slides[currentSlide].subText2}
                </p>
              )}
            </div>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute top-1/2 -right-0 transform -translate-y-1/2 w-[40px] h-[40px] opacity-1 bg-transparent rounded-full flex items-center justify-center shadow-lg hover:bg-gray-200 z-10"
          aria-label="Previous Slide"
        >
          <div className="w-[40px] h-[40px] bg-gradient-to-b from-[#005F73] via-[#FF9700] to-[#000034] rounded-full flex items-center justify-center">
            <FaChevronCircleRight size={35} className="text-white" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default HeroBanner;
