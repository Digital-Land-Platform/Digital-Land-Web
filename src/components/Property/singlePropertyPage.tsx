import React, { useState } from 'react';
import { PropertyDetails } from '../../types/Property/property';
import SummarySection from './summarysection';
import HighlightsSection from './highlightssection';
import SimilarPropertiesSection, { SimilarProperties } from './similarproperties';

type PropertyDetailsPageProps = {
  property: PropertyDetails;
  similarProperties: SimilarProperties[];
};

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({ property, similarProperties }) => {
  const { title, image, thumbnails } = property;
  const [mainImage, setMainImage] = useState<string>(image[0]?.url);

  const handleThumbnailClick = (thumbnailUrl: string) => {
    setMainImage(thumbnailUrl);
  };
  return (
    <div className=" fixed px-2 bg-white rounded-lg w-full h-full mx-auto overflow-y-auto justify-start">
      {/* Details Frame */}
      <div
        className="w-full max-w-[1104px] w-[1104px] h-[686px] flex flex-col gap-[24px] py-[24px] px-0 w-full rounded-lg"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #FFCB80 25%, #C7AD9A 50%, #8E8EB4 75%, #FFFFFF 100%)'
        }}
      >
        {/* Title Frame */}
        <div className="flex w-full h-[86px] justify-center">
          <h2
            className="text-[24px] font-merriweather font-bold leading-[30px] relative text-center"
            style={{
              color: '#000034'
            }}
          >
            {title}
          </h2>
        </div>

        <div className="relative flex w-[876.83px] h-[400px] justify-center items-center rounded-lg">
          {/* Main Image */}
          <img
            src={mainImage}
            alt="Property"
            className="relative w-[800px] h-[400px] justify-center items-center object-cover rounded-lg"
          />

          {/* Action Icons Inside the Image Frame */}
          <div className="absolute bottom-0 right-0 w-[76.83px] h-[400px] p-[16px] px-[8px] gap-10 bg-[#F5F6FA] border border-[#C9D1EBB8] rounded-r-lg flex flex-col justify-start items-center">
            <button className="w-[60.83px] h-[40px] gap-[8px] border-b-[1px] object-contain">
              <img src="/image.svg" alt="Image" />
            </button>
            <button className="w-[60.83px] h-[40px] gap-[16px] border-b-[1px] object-contain">
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
      <div>
        <SummarySection property={property} />
        <div className=" p-[16px_24px]  gap-[24px] mt-16 w-[880px] h-[40px] flex items-center justify-between bg-blue-950 rounded-lg">
          <div className="text-white flex items-center gap-3">
            <img src="/camera.svg" alt="Icon" className="w-6 h-6" />
            <span className="text-sm ">Ownership Documents instantly available upon purchase</span>
          </div>
          <button className="flex items-center bg-yellow-600 border border-yellow-500 text-white shadow-yellow-500 shadow-md px-3 py-1 rounded-lg hover:bg-yellow-550 transition">
            <span className="fa-stack  fa-xs">
              <i className="fas fa-tag fa-stack-2x  transform scale-x-[-1]"></i>
              <i className="fas fa-dollar-sign text-yellow-500 fa-stack-1x fa-inverse"></i>
            </span>
            <span className="ml-2 font-bold text-sm shadow-yellow">Buy Now</span>
          </button>
        </div>
      </div>

      <div>
        {/* Highlights Section */}
        <HighlightsSection property={property} />
        <SimilarPropertiesSection properties={similarProperties} />
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
