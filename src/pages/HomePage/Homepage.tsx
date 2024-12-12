import React, { useState, useEffect, useCallback } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_PROPERTIES } from '../../Queries/propertyqueries';
import { GET_LOCATION } from '../../Queries/locationqueries';
import PropertyCard from '../../components/Cards/Propertycard';
import HeroBanner from '../../components/HeroBanner/HeroBanner';
import { ExclusiveOffers } from '../../components/ExclusiveOffers/ExclusiveOffers';

export interface Property {
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

export interface Location {
  country: string;
  province: string;
  sector: string;
  district?: string;
}

const Homepage = () => {
  const { loading, error, data } = useQuery<PropertiesData>(GET_PROPERTIES);
  const [getLocation] = useLazyQuery(GET_LOCATION);
  const [locations, setLocations] = useState<Record<string, Location>>({});
  const [properties, setProperties] = useState<Property[] | null>(null);
  const [loadingLocations, setLoadingLocations] = useState<boolean>(false);
  const [locationError, setLocationError] = useState<string | null>(null);

  const fetchLocation = useCallback(
    async (locationId: string) => {
      if (locations[locationId]) return locations[locationId];

      try {
        setLoadingLocations(true);
        const { data } = await getLocation({ variables: { locationId } });
        if (data?.getLocation) {
          setLocations((prev) => ({
            ...prev,
            [locationId]: data.getLocation
          }));
          return data.getLocation;
        }
      } catch (error) {
        setLocationError('Failed to fetch location.');
        console.error('Failed to fetch location:', error);
      } finally {
        setLoadingLocations(false);
      }
      return null;
    },
    [getLocation, locations]
  );

  useEffect(() => {
    if (data) {
      setProperties(data.listProperties);
      data.listProperties.forEach((property) => {
        fetchLocation(property.locationId);
      });
    }
  }, [data, fetchLocation]);

  if (error) {
    console.error(`Error: ${error.message}`);
  }

  const isPropertiesEmpty = !properties || properties.length === 0;

  return (
    <div className="flex flex-col lg:flex-row">
      <main className="w-full p-6">
        <div className="w-full mb-6">
          <HeroBanner />
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex flex-wrap gap-4">
            {loading ? (
              <p>Loading properties...</p>
            ) : error ? (
              <p>Error: Welcome to Global Real Estate.</p>
            ) : isPropertiesEmpty ? (
              <p>No properties yet!</p>
            ) : (
              properties?.map((property: Property) => {
                const location = locations[property.locationId];

                return (
                  <PropertyCard
                    id={property.id}
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
              })
            )}
          </div>
          <div className="w-2/4 lg:w-2/4 h-2/4 p-6">
            <ExclusiveOffers />
          </div>
        </div>
        {loadingLocations && <p>Loading locations...</p>}
        {locationError && <p>{locationError}</p>}
      </main>
    </div>
  );
};

export default Homepage;
