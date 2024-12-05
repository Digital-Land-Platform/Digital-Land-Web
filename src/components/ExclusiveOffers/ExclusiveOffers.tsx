import React from 'react';

export const ExclusiveOffers = () => {
  // const offers = [
  //   { title: 'Semi-Detached House', image: '/offer1.jpg' },
  //   { title: 'Luxury Villa', image: '/offer2.jpg' },
  //   { title: 'Modern Apartment', image: '/offer3.jpg' }
  // ];

  return (
    <div className=" fixed right-0 flex items-center justify-center min-h-screen p-4 ">
      <div className="text-center p-4  rounded-lg shadow-sm max-w-sm w-full">
        <div className="flex items-center justify-center mb-4">
          <i className="fas fa-envelope text-yellow-500 text-xl"></i>
          <span className="ml-2 text-yellow-500 text-sm font-medium">Sign Up</span>
          <span className="ml-2 text-sm">for our newsletter!</span>
        </div>
        <h2 className="text-lg font-semibold text-teal-700 mb-2">Exclusive Offers</h2>

        <div className="pr-10 space-y-3 ml-10">
          {/* Image 1 */}
          <div className="relative">
            <img
              src="https://placehold.co/180x150"
              alt="A beautiful house with a green lawn"
              className="w-[207px] h-[104px] object-cover rounded-[6px]" // Square image
            />
          </div>

          {/* Image 2 (Middle image with overlay) */}
          <div className="relative  w-[207px] h-[104px] rounded-[6px]">
            <img
              src="https://placehold.co/180x150"
              alt="A semi detached house"
              className="w-full h-full object-cover rounded-[6px]" // Image fills container
            />
            <div className="absolute rounded-[6px] inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
              <span className="text-white text-xs font-bold">Semi Detached House</span>
              <button className="mt-1 font-bold text-yellow-500 px-4 py-2 rounded-lg text-sm shadow-lg hover:bg-yellow-400 transition">
                <span className="fa-stack fa-xs">
                  <i className="fas fa-tag fa-stack-2x transform scale-x-[-1]"></i>
                  <i className="fas fa-dollar-sign fa-stack-1x fa-inverse"></i>
                </span>
                Buy Now
              </button>
            </div>
          </div>

          {/* Image 3 */}
          <div className="relative ">
            <img
              src="https://placehold.co/180x150"
              alt="A lone tree in a vast field"
              className=" w-[207px] h-[104px] object-cover rounded-[6px]" // Square image, smaller size
            />
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <button className="border border-teal-500 text-teal-500 rounded px-2 py-1 text-xs shadow-sm">
            <i className="fas fa-eye mr-1"></i> View More
          </button>
        </div>
      </div>
    </div>
  );
};
