import React, { useState } from 'react';

interface PropertyCardProps {
  id: string; // Add property ID
  src: string;
  title: string;
  price: number;
  size: string;
  description: string;
  location: string;
}

interface PriceTagButtonProps {
  id: string; // Add property ID
  price: number;
}

// Property Card Component
const PropertyCard: React.FC<PropertyCardProps> = ({ id, src, title, price, size, description, location }) => {
  return (
    <div className="w-[420px] mx-auto bg-white pl-[0px] rounded-lg shadow-md border border-gray-300 overflow-hidden flex flex-col relative">
      <Header />
      <img
        src={src || 'https://placehold.co/400x300'}
        alt="A beautiful cottage surrounded by greenery and flowers"
        className="w-full h-[500px] object-cover"
      />
      <CardContent
        id={id}
        src={src}
        title={title}
        price={price}
        size={size}
        description={description}
        location={location}
      />
    </div>
  );
};

// Header Component
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
const CardContent: React.FC<PropertyCardProps> = ({ id, title, price, size, description, location }) => {
  const [showMore, setShowMore] = useState(false);

  const fullText =
    description ||
    'The coolest land you ever saw in your entire life, with breathtaking views, lush green fields, and plenty of room to build your dream home. This property is the perfect place to escape the hustle and bustle of the city and enjoy nature.';
  const truncatedText = '';

  return (
    <div className="p-4 relative">
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
        <PriceTagButton id={id} price={price} />
        <div className="flex items-center text-gray-500 text-sm my-2 space-x-2 pt-[10px]">
          <span>37 Reviews</span>
          <span>
            4.7<i className="fas fa-star text-yellow-500"></i>
          </span>
          <div className="text-gray-500 text-sm">
            <button onClick={() => setShowMore((prev) => !prev)} className="text-blue-500 ml-2 hover:underline">
              {showMore ? 'See Less' : 'See More'}
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
  <div className="absolute top-4 right-4 pl-[0px] ml-[100px] rounded-lg flex flex-col items-center space-y-1">
    <IconButton iconClass="far fa-eye" badge={100} />
    <IconButton iconClass="far fa-heart" badge={50} />
    <IconButton iconClass="far fa-bookmark" />
    <IconButton iconClass="fas fa-share-alt" />
  </div>
);

// Price and Button Component
const PriceTagButton: React.FC<PriceTagButtonProps> = ({ id, price }) => {
  const handleBuyNow = () => {
    localStorage.setItem('selectedPropertyId', id);
    window.location.href = `${import.meta.env.VITE_MAIN_URI}buy-property`;
  };

  return (
    <div className="flex items-center space-x-4 mt-3">
      {/* Price Tag */}
      <div className="flex items-center bg-gradient-to-l from-yellow-200 to-orange-200 px-3 py-2 rounded-lg shadow-md">
        <i
          className="fas fa-tag ml-2 transform scale-x-[-1]"
          style={{
            WebkitTextStroke: '1px black', // Outline effect
            color: 'transparent' // Transparent fill
          }}
        ></i>
        <span className="ml-2 text-black font-semibold">${price}</span>
      </div>

      {/* Buy Now Button */}
      <button
        onClick={handleBuyNow}
        className="flex items-center border border-yellow-500 text-yellow-500 shadow-yellow-500 shadow-md px-3 py-1 rounded-lg hover:bg-yellow-200 transition"
      >
        <span className="fa-stack fa-xs">
          <i className="fas fa-tag fa-stack-2x transform scale-x-[-1]"></i>
          <i className="fas fa-dollar-sign fa-stack-1x fa-inverse"></i>
        </span>
        <span className="ml-2 font-bold shadow-yellow">Buy Now</span>
      </button>
    </div>
  );
};

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

export default PropertyCard;
