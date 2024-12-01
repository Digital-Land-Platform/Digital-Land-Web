import React, { useState } from 'react';

interface PropertyCardProps {
  id: string;
  images: string[]; // Array of images
  title: string;
  price: number;
  size: string;
  location: string;
  condition: string;
  isExpanded: boolean; // Indicates if the details are visible
  onToggleDetails: (id: string) => void; // Function to toggle details
}

const PropertyBuyCard: React.FC<PropertyCardProps> = ({
  id,
  images,
  title,
  price,
  size,
  location,
  condition,
  isExpanded,
  onToggleDetails
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="w-[464px] h-[924px] bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section with Navigation */}
      <Header />
      <div className="relative w-full h-[588px]">
        <img src={images[currentImageIndex]} alt={title} className="w-full h-full object-cover" />
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-90"
          onClick={handlePreviousImage}
        >
          ◀
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full shadow hover:bg-opacity-90"
          onClick={handleNextImage}
        >
          ▶
        </button>
      </div>

      {/* Choosing Items Section */}
      <div className="flex justify-around items-center bg-gray-100 p-3 border-t">
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 px-2">
          <img src="picture_filled.svg" className="text-xl mb-1" />
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 px-2">
          <img src="reel.svg" className="text-xl mb-1" />
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 border-gray-300 px-2">
          <img src="360-degree-rotate-icon 1.svg" className="text-xl mb-1" />
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 border-gray-300 px-2">
          <img src="map.svg" className="text-xl mb-1" />
        </button>
        <button className="flex flex-col items-center text-sm text-gray-600 hover:text-blue-500 border-gray-300 px-2">
          <img src="vr.svg" className="text-xl mb-1" />
        </button>
      </div>

      {/* Content Section */}
      <div className="p-4">
        <CardContent
          id={id}
          images={images}
          title={title}
          price={price}
          size={size}
          condition={condition}
          location={location}
          isExpanded={isExpanded}
          onToggleDetails={onToggleDetails}
        />
      </div>
    </div>
  );
};

const Header: React.FC = () => (
  <div className="flex items-center p-4">
    <img src="https://placehold.co/40x40" alt="Government Housing Logo" className="w-10 h-10 rounded-full" />
    <div className="ml-3">
      <h2 className="text-lg font-bold">Government Housing</h2>
      <p className="text-sm text-gray-500">Houses for all</p>
    </div>
    <button className="ml-auto text-gray-500">
      <i className="fas fa-ellipsis-h"></i>
    </button>
  </div>
);

// Card Content Component
const CardContent: React.FC<PropertyCardProps> = ({
  id,
  title,
  size,
  condition,
  location,
  onToggleDetails,
  isExpanded
}) => {
  const [showMore] = useState(false);

  const fullText = condition;
  const truncatedText = '';

  return (
    <div className="relative h-[224px]">
      {/* Property Details */}
      <div className="pl-[0px]">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="flex items-center text-gray-500 text-sm my-2 space-x-4">
          <DetailIcon iconClass="fas fa-home" text="Cottage" />
          <DetailIcon iconClass="fas fa-seedling" text="Field" />
          <DetailIcon iconClass="fas fa-ruler-combined" text={size} />
        </div>
        <div className="flex items-center text-gray-500 text-sm my-2 space-x-2">
          <DetailIcon iconClass="fas fa--alt" text="Mixed-use Land" />
          <span></span>
          <span>6000 sq ft</span>
          <span></span>
          <span>1 Acre</span>
        </div>
        <div className="flex items-center text-black-500 text-sm my-2 space-x-2">
          <DetailIcon iconClass="fas fa-map-marker-alt" text={location} />
          <span className="text-[10px]">Building condition: Brand New</span>
        </div>

        <div className="flex items-center text-gray-500 text-sm my-2 space-x-2 pt-[10px]">
          <span>37 Reviews</span>
          <span>
            4.7<i className="fas fa-star text-yellow-500"></i>
          </span>
          <div className="text-gray-500 text-sm">
            {/* Toggle Details Button */}
            <button className="text-blue-500 hover:underline" onClick={() => onToggleDetails(id)}>
              {isExpanded ? 'See Less' : 'See More'}
            </button>
          </div>
        </div>
        <p className="text-gray-500 text-sm mt-2">{showMore ? fullText : truncatedText}</p>
      </div>
      {/* Footer Icons */}
      <Footer />
    </div>
  );
};

// Footer Component
const Footer: React.FC = () => (
  <div className="absolute top-1 right-4 pl-[0px] ml-[100px] rounded-lg flex flex-col items-center space-y-1">
    <IconButton iconClass="far fa-eye" badge={100} />
    <IconButton iconClass="far fa-heart" badge={50} />
    <IconButton iconClass="far fa-bookmark" />
    <IconButton iconClass="fas fa-share-alt" />
  </div>
);

// Reusable Icon Button Component
const IconButton: React.FC<{ iconClass: string; badge?: number }> = ({ iconClass, badge }) => (
  <button>
    <div className="flex items-center space-x-2">
      <i className={`${iconClass} text-black-500 text-2xl`}></i>
      {/* Badge (if present) */}
      {badge !== undefined ? (
        <span className="text-black-500 text-sm">{badge}</span>
      ) : (
        <span className="text-white text-sm">00</span>
      )}
    </div>
  </button>
);

// Reusable Detail Icon Component
const DetailIcon: React.FC<{ iconClass: string; text: string }> = ({ iconClass, text }) => (
  <div className="flex items-center space-x-1">
    <i className={`${iconClass} text-gray-500`}></i>
    <span>{text}</span>
  </div>
);

export default PropertyBuyCard;
