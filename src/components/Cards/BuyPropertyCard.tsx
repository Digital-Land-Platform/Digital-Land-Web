import React, { useState } from 'react';
// import { useQuery } from '@apollo/client';
// import { GET_PROPERTY_BY_ID } from '../../Queries/getproperty';
// import { v4 as UUID } from 'uuid'; // Add this line to import UUID
import PropertyBuyCard from './PropertyBuyCard';
import PropertyDetailCard from './PropertyDetail';

const BuyPropertyCard: React.FC = () => {
  const properties = [
    {
      id: '1',
      src: ['https://placehold.co/1200x400', 'https://placehold.co/600x400', 'https://placehold.co/600x400'],
      title: 'Building with Land',
      price: 307000,
      size: '6000 sq ft',
      description: 'Single-Family Home with a freshly cleared plot.',
      location: 'Kigali, Rwanda'
    }
  ];

  // State to track the visibility of details for each property
  const [expandedPropertyId, setExpandedPropertyId] = useState<string | null>(null);

  // Function to toggle the details
  const toggleDetails = (id: string) => {
    setExpandedPropertyId((prevId) => (prevId === id ? null : id));
  };

  return (
    <main className="flex-1 w-[1104px] pt-[100px] p-6 ml-[-60px] mr-[10px] pl-[20px] ">
      {/* Filters Section */}
      <div className="flex justify-between pl-[50px] items-center mb-3">
        <div className="flex gap-2">
          <select className="w-[200px] h-[35px] pl-[5px] rounded-[6px] bg-white shadow-md ">
            <option>All</option>
            <option>Location (Province)</option>
            <option>Kigali</option>
            <option>Butare</option>
            <option>Gisenyi</option>
          </select>

          <button
            className="w-[120px] h-[40px] p-[6px] border rounded-lg bg-gradient-to-l from-blue-800 to-blue-950 shadow-md
                              text-white"
          >
            Standard
          </button>

          <button
            className="w-[122px] h-[40px] p-[6px] border rounded-lg bg-gradient-to-l from-blue-800 to-blue-950 shadow-md
                              text-white"
          >
            Exclusive
          </button>

          <button
            className="w-[183px] h-[40px] p-[6px] border rounded-lg bg-gradient-to-l from-blue-800 to-blue-950 shadow-md
                              text-white"
          >
            Saved Properties
          </button>
        </div>
      </div>

      {/* Properties List */}
      <div className="flex flex-col w-[12] pt-[130px] ml-[0px] mr-[10px] pl-[70px] pr-[-70px] bg-gray-100 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="w-full flex flex-row gap-3">
            {/* Left Card */}
            <PropertyBuyCard
              id={property.id}
              images={property.src}
              title={property.title}
              price={property.price}
              size={property.size}
              condition={property.description}
              location={property.location}
              isExpanded={expandedPropertyId === property.id}
              onToggleDetails={toggleDetails}
            />

            {/* Property Detail Card */}
            {expandedPropertyId === property.id && (
              <div className="">
                <PropertyDetailCard />
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default BuyPropertyCard;
