import React, { useState } from 'react';
import { PropertyDetails } from '../../types/Property/property';
import SummarySection from './summarysection';
import HighlightsSection from './highlightssection';

type PropertyDetailsPageProps = {
  property: PropertyDetails;
};

const PropertyDetailsPage: React.FC<PropertyDetailsPageProps> = ({ property }) => {
  const { title, image, thumbnails } = property;
  const [mainImage, setMainImage] = useState<string>(image[0]?.url);

  const handleThumbnailClick = (thumbnailUrl: string) => {
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
            {title}
          </h2>
        </div>

        <div className="relative w-[876.83px] h-[400px]  flex justify-center items-center rounded-lg overflow-visible">
          {/* Main Image */}
          <img src={mainImage} alt="Property" className="relative w-[800px] h-[400px]  object-cover rounded-l-lg" />

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
        <div className="mt-12  p-[16px_24px] border-t border-white flex items-center gap-8">
          <button className="bg-blue-900 text-white py-2 px-6 rounded-lg hover:bg-blue-700 flex items-center">
            <img src="https://via.placeholder.com/20" alt="icon" className="mr-2" />
            Buy Now
          </button>
        </div>
      </div>

      <div>
        {/* Highlights Section */}
        <HighlightsSection />
      </div>
    </div>
  );
};

export default PropertyDetailsPage;
