import React from 'react';
import { PropertyDetails } from '../../types/Property/property';

type SummarySectionProps = {
  property: PropertyDetails;
};

const SummarySection: React.FC<SummarySectionProps> = ({ property }) => {
  const { size, price, location, amenities, yearbuilt, latitude, longitude } = property;
  // const { size, price, location, yearbuilt, latitude, longitude } = property;

  return (
    <div>
      {/* Summary Header */}
      <div
        className="shadow-md rounded-t-lg p-6 w-[1104px] h-[62px] pt-4 pl-6 gap-0"
        style={{ background: 'linear-gradient(178.76deg, #FFFFFF 1.06%, #FFCB80 98.94%)' }}
      >
        <div className="w-[1056px] h-[30px] gap-0">
          <h3
            className="font-merriweather text-[20px] font-bold leading-[30.17px] text-left"
            style={{ color: '#000034' }}
          >
            Summary
          </h3>
        </div>
      </div>

      {/* Summary Content */}
      <div className="bg-white h-[501px] w-[903px] rounded-lg p-6">
        <div className="grid grid-cols-2 w-[855px] h-[257px] gap-[24px] border-t border-white relative">
          <div className="absolute right-0 flex flex-col w-[29.92] h-[257px] gap-[16px] p-[16px]">
            <img src="/heart.svg" alt="Heart Icon" className="w-[26.91px] h-[24px] hover:opacity-80 cursor-pointer" />
            <img src="/like.svg" alt="Star Icon" className="w-[26.91px] h-[24px] hover:opacity-80 cursor-pointer" />
            <img src="/share.svg" alt="Save Icon" className="w-[26.91px] h-[24px] hover:opacity-80 cursor-pointer" />
            <img src="/save.svg" alt="Like Icon" className="w-[26.91px] h-[24px] hover:opacity-80 cursor-pointer" />
          </div>
          <div className="bg-[#F5F6FA] w-[420px] h-[257px]">
            <div className="flex items-center mb-2 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-white">
              <span className="w-[150px] text-sm">Type:</span>
              <span className="flex items-center font-merriweather text-sm leading-17.6 text-left">
                <img src="/home.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                Luxury
              </span>
            </div>
            <div className="flex items-center mb-2 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-white">
              <span className="w-[150px] text-sm">Size:</span>
              <span className="flex text-sm items-center">
                <img src="/size.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                {size || '6 Acres'}
              </span>
            </div>
            <div className="flex items-center mb-3 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-white">
              <span className=" w-[230px] text-sm">Location:</span>
              <span className="flex text-sm items-center">
                <img src="/location-p.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                {location || 'Kigali Rwanda'}
              </span>
            </div>
            <div className="flex items-center mb-0 w-[420px] h-[56px] p-[16px_24px] gap-[24px] border-t border-white">
              <span className="w-[170px] text-sm">Proximity:</span>
              <span className="flex text-sm items-center gap-2 w-[251.51px] h-[57px]">
                <img src="/proximity.svg" alt="Image" className="relative top-0 left-0 w-[26.96px] h-[19px]" />
                <p className="flex-1 overflow-hidden text-ellipsis">
                  2 km away from the mall and 1 km away from a public school
                </p>
              </span>
            </div>
          </div>
          <div className="flex flex col justify-center items-center w-full p-4">
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
        <div className="bg-[#F5F6FA] border-t border-white w-[855px] p-[16px_24px] gap-6">
          <div className="flex items-center mb-2 w-full h-[56px]">
            <span className="w-[150px] text-sm">Amenities:</span>
            <div className="ml-6 grid text-sm grid-cols-2 gap-6">
              {amenities && amenities.length > 0 ? (
                amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <img src={amenity.icon} alt={amenity.title} className="w-8 h-8" />
                    <span>{amenity.title}</span>
                  </div>
                ))
              ) : (
                <div>No amenities available</div>
              )}
            </div>
          </div>
        </div>
        <div className="grid bg-[#F5F6FA] w-[855px] grid-cols-2 gap-4">
          <div className="flex text-sm items-center border-t border-white p-[16px_24px] gap-6">
            <span className="w-34">Year Acquired:</span>
            <span>{1999}</span>
          </div>
          <div className="flex text-sm items-center border-t border-white p-[16px_24px] gap-6">
            <span className="w-24">Year Built:</span>
            <span>{yearbuilt || '1999'}</span>
          </div>
          <div className="flex text-sm items-center bg-[#F5F6FA] border-t border-white p-[16px_24px] gap-6">
            <span className="w-24">Latitude:</span>
            <span>{latitude || 55}</span>
          </div>
          <div className="flex text-sm items-center bg-[#F5F6FA] border-t border-white p-[16px_24px] gap-6">
            <span className="w-24">Longitude:</span>
            <span>{longitude || 37}</span>
          </div>
        </div>
        <div className="mt- text-sm bg-[#F5F6FA] p-[16px_24px] border-t border-white flex items-center gap-6">
          <span>Rating:</span>
          <span className="ml-10">37 views</span>
          <span className="ml-3 text-yellow-500">4.7⭐</span>
        </div>
      </div>
    </div>
  );
};

export default SummarySection;
