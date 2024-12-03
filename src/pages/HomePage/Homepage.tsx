import React from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../Queries/propertyqueries';
import { GET_LOCATION } from '../../Queries/locationqueries';
import PropertyCard from '../../components/Cards/Propertycard';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { ExclusiveOffers } from '../../components/ExclusiveOffers/ExclusiveOffers';
import { useState, useEffect, useCallback } from 'react';

interface Property {
  id: string;
  images: Image[];
  title: string;
  price: number;
  size: string;
  description: string;
  locationId: string;
}

interface Image {
  id: string;
  url: string;
}

interface PropertiesData {
  listProperties: Property[];
}

interface Location {
  country: string;
  province: string;
  sector: string;
}

const Homepage = () => {
  const { loading, error, data } = useQuery<PropertiesData>(GET_PROPERTIES);
  const [getLocation] = useLazyQuery(GET_LOCATION);
  const [locations, setLocations] = useState<Record<string, Location>>({});

  const fetchLocation = useCallback(
    async (locationId: string) => {
      if (locations[locationId]) return locations[locationId];

      const { data } = await getLocation({ variables: { locationId } });
      if (data?.getLocation) {
        setLocations((prev) => ({
          ...prev,
          [locationId]: data.getLocation
        }));
        return data.getLocation;
      }
      return null;
    },
    [getLocation, locations]
  );

  useEffect(() => {
    if (data) {
      data.listProperties.forEach((property) => {
        fetchLocation(property.locationId);
      });
    }
  }, [data, fetchLocation]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  // if (!data || data.listProperties.length === 0) return <p>No properties yet!</p>;

  return (
    <div className="flex flex-col lg:flex-row">
      <main className="w-full p-6">
        <div className="w-full mb-6">
          <HeroBanner />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-wrap gap-4">
            {data?.listProperties.map((property: Property) => {
              const location = locations[property.locationId];

              return (
                <PropertyCard
                  key={property.id}
                  src={property.images[0]?.url}
                  title={property.title}
                  price={property.price}
                  size={property.size}
                  description={property.description}
                  location={
                    location ? `${location.country}, ${location.province}, ${location.sector}` : 'Loading location...'
                  }
                />
              );
            })}
          </div>
          <div className="w-2/4 lg:w-2/4 h-2/4 p-6">
            <ExclusiveOffers />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
