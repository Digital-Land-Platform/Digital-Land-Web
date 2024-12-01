import React from 'react';

const MainHero: React.FC = () => {
  return (
    <section className="relative w-full bg-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute h-[448px] inset-0 z-10" />
        <img src="Bg-image.jpg" alt="Background" className="w-full h-[500px] object-cover" />
        <div className="absolute bottom-[3px] right-[150px] w-[348px] h-[263px] flex flex-col items-center justify-center text-center text-white z-20">
          <button
            className="mt-4 px-6 py-3 bg-white text-[20px] text-black font-bold rounded-[5px] shadow-md"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}
          >
            Find Your Dream Property
          </button>
          <img src="/access-hand-key-icon 1.svg" alt="Illustration" className="w-16 h-16 mt-2" />
          <button className="mt-4 px-6 py-3 bg-yellow-300 text-black font-semibold rounded-[5px] shadow-md hover:bg-yellow-600">
            Where Ownership Begins!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainHero;
