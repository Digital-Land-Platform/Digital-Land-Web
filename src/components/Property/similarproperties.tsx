import React from 'react';
import PropertyCard from '../Cards/Propertycard';

export interface SimilarProperties {
  id: string;
  images: { url: string }[];
  title: string;
  price: number;
  size: string;
  description: string;
  locationId: string;
}

interface SimilarPropertiesSectionProps {
  properties: SimilarProperties[];
}

const SimilarPropertiesSection: React.FC<SimilarPropertiesSectionProps> = ({ properties }) => {
  console.log(properties);
  return (
    <div>
      <h3 className="text-xl font-bold text-center mb-4">Similar Properties You Might Like</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {properties.length > 0
          ? properties?.map((property: SimilarProperties) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                src={property.images[0]?.url}
                title={property.title || 'N/A'}
                price={property.price || 0}
                size={property.size || 'N/A'}
                description={property.description || 'No description available'}
                location={property.locationId || 'N/A'}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default SimilarPropertiesSection;
