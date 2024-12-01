import React from 'react';
import { FaBed, FaBath, FaCouch, FaUtensils } from 'react-icons/fa';

const PropertyDetailCard = () => {
  return (
    <div className="max-w-md h-[924px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col">
      {/* Title Section (Static) */}
      <div className="p-4 mb-0 flex justify-between items-center border z-10">
        <h1 className="text-xl font-bold">Property Title</h1>
        <div className="flex items-center text-yellow-500 font-bold">
          <div className="flex items-center bg-gradient-to-l from-yellow-400 to-orange-200 px-3 py-2 shadow-md">
            <i
              className="fas fa-tag ml-2 transform scale-x-[-1]"
              style={{
                WebkitTextStroke: '1px black', // Outline effect
                color: 'transparent' // Transparent fill
              }}
            ></i>
            <span className="ml-2 text-black font-semibold">$70,000</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto mt-0 pt-0 p-4">
        {/* Amenities */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Amenities:</h2>
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
            <div className="flex items-center">
              <FaBed className="text-blue-500 mr-2" />7 Bedrooms
            </div>
            <div className="flex items-center">
              <FaBath className="text-blue-500 mr-2" />7 Bathrooms
            </div>
            <div className="flex items-center">
              <FaCouch className="text-blue-500 mr-2" />2 Huge living rooms
            </div>
            <div className="flex items-center">
              <FaUtensils className="text-blue-500 mr-2" />2 Ultra modern kitchens
            </div>
          </div>
        </div>

        {/* Year Information */}
        <div className="mt-4">
          <div className="flex justify-between text-sm">
            <div>
              <h2 className="font-semibold">Year acquired:</h2>
              <span>1999</span>
            </div>
            <div>
              <h2 className="font-semibold">Year Built:</h2>
              <span>1997</span>
            </div>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <div>
              <h2 className="font-semibold">Latitude:</h2>
              <span>78</span>
            </div>
            <div>
              <h2 className="font-semibold">Longitude:</h2>
              <span>89</span>
            </div>
          </div>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Highlights */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Highlights</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <img src="target-goals-icon 1.svg" className="text-red-500 mr-2" />
              <p className="text-sm text-gray-600 leading-relaxed bg-[#FFEACD]">
                Prime Downtown Location: Situated in the ...
              </p>
            </li>
            <li className="flex items-center">
              <img src="target-goals-icon 1.svg" className="text-red-500 mr-2" />
              <p className="text-sm text-gray-600 leading-relaxed bg-[#FFEACD]">
                Cityscape Views: Floor-to-ceiling windows ...
              </p>
            </li>
            <li className="flex items-center">
              <img src="target-goals-icon 1.svg" className="text-red-500 mr-2" />
              <p className="text-sm text-gray-600 leading-relaxed bg-[#FFEACD]">
                Luxurious Master Suite: Includes a spa-styl...
              </p>
            </li>
          </ul>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Nestled in the heart of Kigali&apos;s tranquil Gasabo District, this charming 4-bedroom, 3-bathroom home
            offers modern comfort on an expansive 0.5-acre lot. Boasting 2,500 square feet of living space, the home
            features a spacious open floor plan, elegant hardwood floors, and an abundance of natural light throughout.
          </p>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Neighbourhood */}
        <div className="mt-4">
          <h2 className="text-lg font-semibold mb-2">Neighbourhood:</h2>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Colleges/Universities – Proximity to higher education facilities.</li>
            <li>Shopping Malls – Proximity to malls or major shopping centers.</li>
            <li>Supermarkets/Grocery Stores – Nearby options for daily essentials.</li>
          </ul>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Legal Status */}
        <div className="mt-4">
          <h2 className="text-sm mb-1">Legal status:</h2>
          <span className="text-[15px] font-semibold text-black">Freehold</span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Full ownership of the property and the land it&apos;s built on, with no time limit.
          </p>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Legal Status */}
        <div className="mt-4">
          <h2 className="text-sm mb-1">Basic needs accesibility:</h2>
          <span className="text-[15px] font-semibold text-black">Highly Accessible</span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Full ownership of the property and the land it&apos;s built on, with no time limit.
          </p>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Legal Status */}
        <div className="mt-4">
          <h2 className="text-sm mb-1">
            Energy rating: <span className="text-black font-semibold"> A+</span>
          </h2>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Legal Status */}
        <div className="mt-4">
          <h2 className="text-sm mb-1">Zoning:</h2>
          <span className="text-[15px] font-semibold text-black">Mixed-Use</span>
          <p className="text-sm text-gray-600 leading-relaxed">
            Full ownership of the property and the land it&apos;s built on, with no time limit.
          </p>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Legal Status */}
        <div className="mt-4">
          <h2 className="text-sm mb-1">
            Dominant weather: <span className="text-black font-semibold">Tropical</span>
          </h2>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-sm mb-2">Disclosure:</h2>
          <p className="text-[15px] text-black leading-relaxed">
            Nestled in the heart of Kigali&apos;s tranquil Gasabo District, this charming 4-bedroom, 3-bathroom home
            offers modern comfort on an expansive 0.5-acre lot. Boasting 2,500 square feet of living space, the home
            features a spacious open floor plan, elegant hardwood floors, and an abundance of natural light throughout.
          </p>
        </div>

        <hr className="my-2 border-t-2" />

        {/* Description */}
        <div className="mt-4">
          <h2 className="text-sm mb-2">Disclosure:</h2>
          <p className="text-[15px] text-black leading-relaxed">
            Nestled in the heart of Kigali&apos;s tranquil Gasabo District, this charming 4-bedroom, 3-bathroom home
            offers modern comfort on an expansive 0.5-acre lot. Boasting 2,500 square feet of living space, the home
            features a spacious open floor plan, elegant hardwood floors, and an abundance of natural light throughout.
          </p>
        </div>
      </div>

      {/* Buy Now Button (Static) */}
      <div className="bg-yellow-500 text-white text-center py-3 cursor-pointer hover:bg-yellow-600 transition">
        <button className="font-bold">Buy Now</button>
      </div>
    </div>
  );
};

export default PropertyDetailCard;
