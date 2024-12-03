import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_PROPERTY_BY_ID } from '../../Queries/getproperty';
import { v4 as UUID } from 'uuid'; // Add this line to import UUID

const BuyPropertyCard: React.FC = () => {
  // Fetch data from the backend
  const prop_id = localStorage.getItem('selectedPropertyId');
  const { data, loading, error } = useQuery(GET_PROPERTY_BY_ID, {
    variables: { id: prop_id as unknown as UUID }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading property data.</p>;
  console.log(data);
  const property = data.property;
  console.log('data ', data);
  // Image carousel component
  const ImageCarousel = ({ images }: { images: string[] }) => {
    return (
      <div className="relative">
        <div className="w-full h-72 overflow-hidden">
          <img
            src={images[0]} // Display first image as default
            alt="Property"
            className="w-full h-full object-cover"
          />
        </div>
        {/* You can add carousel navigation here for multiple images */}
      </div>
    );
  };

  // Property details component
  const PropertyDetails = ({
    title,
    amenities,
    highlights,
    description
  }: {
    title: string;
    amenities: string[];
    highlights: string[];
    description: string;
  }) => {
    return (
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-gray-600">{description}</p>

        <div className="mt-4">
          <h4 className="font-semibold">Amenities:</h4>
          <ul className="list-disc list-inside">
            {amenities.map((amenity, index) => (
              <li key={index} className="text-sm text-gray-600">
                {amenity}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4">
          <h4 className="font-semibold">Highlights:</h4>
          <ul className="list-disc list-inside">
            {highlights.map((highlight, index) => (
              <li key={index} className="text-sm text-gray-600">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  // Footer actions component
  const FooterActions = ({ price }: { price: string }) => {
    return (
      <div className="p-4 border-t">
        <div className="flex justify-between items-center">
          <p className="text-xl font-semibold">{price}</p>
          <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600">
            Contact Agent
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header Section */}
      <div className="flex justify-between items-center p-4 border-b">
        <div className="flex items-center gap-3">
          <img src="https://via.placeholder.com/40" alt="Agency Logo" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <h2 className="text-sm font-semibold">George Homes</h2>
            <p className="text-xs text-gray-500">Your home, our burden</p>
          </div>
        </div>
        <p className="text-sm text-gray-500">2d ago</p>
      </div>

      {/* Image Carousel */}
      <ImageCarousel images={property.images} />

      {/* Property Details Section */}
      <PropertyDetails
        title={property.title}
        amenities={property.amenities}
        highlights={property.highlights}
        description={property.description}
      />

      {/* Footer Actions */}
      <FooterActions price={property.price} />
    </div>
  );
};

export default BuyPropertyCard;
