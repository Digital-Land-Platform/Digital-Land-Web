import React, { useState } from 'react';
import { PropertyDetails } from '../../types/property';

type PropertyDetailsPageProps = {
  property: PropertyDetails;
};

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({ property }) => {
  const { title, size, price, location, latitude, longitude, amenities, yearbuilt, image, thumbnails } = property;
  const [mainImage, setMainImage] = useState(image || 'https://via.placeholder.com/876x400');

  const handleThumbnailClick = (thumbnailUrl: string) => {
    // Logic to update the main image
    setMainImage(thumbnailUrl);
  };
  return (
    <div className="w-[1104px] h-[1421px] bg-white rounded-lg  p-8 mx-auto space-y-8">
      {/* Details Frame */}
      <div
        className="w-full h-[662px] rounded-lg  p-6 space-y-6"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFCB80 25%, #C7AD9A 50%, #8E8EB4 75%, #FFFFFF 100%)'
        }}
      >
        {/* Title Frame */}
        <div className="flex justify-center">
          <h2
            className="text-[24px] font-merriweather font-bold leading-[30px] relative text-center"
            style={{
              color: '#000034'
            }}
          >
            {title || 'Luxurious 3-Bedroom Villa in Downtown'}
          </h2>
        </div>

        <div className="relative w-[876.83px] h-[400px]  flex justify-center items-center rounded-lg overflow-visible">
          {/* Main Image */}
          <img src={mainImage} alt="Property" className="w-[800px] h-[400px]  object-cover rounded-l-lg" />

          {/* Action Icons Inside the Image Frame */}
          <div className="absolute bottom-0 right-0 w-[76.83px] h-[400px] p-[16px] px-[8px] gap-4 bg-[#F5F6FA] border border-[#C9D1EBB8] rounded-r-lg flex flex-col justify-start items-center">
            <button className="w-[60.83px] h-[40px] gap-[6px] border-b-[1px] object-contain">
              <img src="/image.svg" alt="Image" />
            </button>
            <button className="w-[60.83px] h-[40px] gap-[6px] border-b-[1px] object-contain">
              <img src="/film.svg" alt="Image" />
            </button>
            <button className="w-[60.83px] h-[40px] gap-[6px] border-b-[1px] object-contain">
              <img src="/360.svg" alt="Image" />
            </button>
            <button className="w-[60.83px] h-[40px] gap-[6px] border-b-[1px] object-contain">
              <img src="/location.svg" alt="Image" />
            </button>
            <button className="w-[60.83px] h-[40px] gap-[6px] border-b-[1px] object-contain">
              <img src="/user.svg" alt="Image" />
            </button>
          </div>
        </div>

        {/* Thumbnails Below Main Image */}
        {thumbnails && thumbnails.length > 0 && (
          <div className="mt-4 flex w-[876.83px] h-[152px] justify-center gap-[20px]">
            <div className="flex justify-center gap-[10px] w-[584.83px] h-[152px] px-[108px]">
              {thumbnails.map((thumbnail, index) => (
                <img
                  key={index}
                  src={thumbnail}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[120px] h-[136px] object-cover cursor-pointer rounded-lg"
                  onClick={() => handleThumbnailClick(thumbnail)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Summary Section */}
      <div
        className="shadow-md rounded-t-lg p-6 w-full h-[62px] pt-4 pl-6 gap-0"
        style={{ background: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)' }}
      >
        {/* Header */}
        <div className="w-[1056px] h-[30px] gap-0">
          <h3
            className="font-merriweather text-[24px] font-bold leading-[30.17px] text-left"
            style={{ color: '#000034' }}
          >
            Summary
          </h3>
        </div>
      </div>
      <div className="bg-white  rounded-lg p-6">
        <div className="grid grid-cols-2  w-[855px] h-auto p-[16px] gap-[24px] border-t border-gray-200">
          <div className="bg-[#F5F6FA] w-[420px] h-[257px]">
            <div className="flex items-center mb-2 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-gray-200">
              <span className="w-[150px] flex items-center font-merriweather text-10 leading-17.6 text-left underline decoration-solid decoration-transparent">
                Type:
              </span>
              <span className="flex items-center font-merriweather text-14px leading-17.6 text-left underline decoration-solid decoration-transparent">
                <img src="/home.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                Luxury
              </span>
            </div>
            <div className="flex items-center mb-2 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-gray-200">
              <span className="w-[150px]">Size:</span>
              <span className="flex items-center">
                <img src="/size.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                {size || '6 Acres'}
              </span>
            </div>
            <div className="flex items-center mb-3 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-gray-200">
              <span className=" w-[150px]">Location:</span>
              <span className="flex items-center">
                <img src="/location-p.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                {location || 'Kigali Rwanda'}
              </span>
            </div>
            <div className="flex items-center mb-0 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-gray-200">
              <span className="w-[150px]">Proximity:</span>
              <span className="flex items-center gap-2 w-[251.51px] h-[57px]">
                <img src="/proximity.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                <p className="flex-1 overflow-hidden text-ellipsis">
                  2 km away from the mall and 1 km away from a public school
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex col w-[150px] h-[40px]">
            <div
              className="flex items-center px-4 py-2 gap-2 rounded-md "
              style={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 203, 128, 0.5) 68.6%, rgba(255, 229, 191, 0) 100%)'
              }}
            >
              <img src="/price tag.svg" alt="Image" />
              {price || '$50,000'}
            </div>
          </div>
        </div>
        <div className="bg-[#F5F6FA] border-t border-gray-200 w-[855px] p-[16px_24px] gap-6">
          <div className="flex items-center mb-0 w-full h-[56px]">
            <span className="w-[150px]">Amenities:</span>
            <div className="ml-6 grid grid-cols-2 gap-6">
              <div className="flex items-center mb-0">
                <img src="/bathroom.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                {amenities || '7 Bathrooms'}
              </div>
            </div>
          </div>
        </div>
        <div className="grid bg-[#F5F6FA] w-[855px] grid-cols-2 gap-4 mt-5">
          <div className="flex items-center border-t border-gray-200 p-[16px_24px] gap-6">
            <span className="w-24">Year Acquired:</span>
            <span>{1999}</span>
          </div>

          <div className="flex items-center border-t border-gray-200 p-[16px_24px] gap-6">
            <span className="w-24">Year Built:</span>
            <span>{yearbuilt || '1999'}</span>
          </div>
          <div className="flex items-center bg-[#F5F6FA] border-t border-gray-200 p-[16px_24px] gap-6 w-[855px]">
            <span className="w-24">Latitude:</span>
            <span>{latitude || 55}</span>
          </div>

          <div className="flex items-center bg-[#F5F6FA] border-t border-gray-200 p-[16px_24px] gap-6 w-[855px]">
            <span className="w-24">Longitude:</span>
            <span>{longitude || 37}</span>
          </div>
        </div>

        <div className="mt-4 bg-[#F5F6FA] p-[16px_24px] flex items-center gap-6">
          <span>Rating:</span>
          <span className="ml-10">37 views</span>
          <span className="ml-3 text-yellow-500">4.7⭐</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
