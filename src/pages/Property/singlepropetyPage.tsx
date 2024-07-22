import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_PROPERTY_BY_ID } from '../../Queries/propertybyidquery';
import { GET_LOCATION } from '../../Queries/locationqueries';
import PropertyDetailsPage from '../../components/Property/singlePropertyPage';
import { useParams } from 'react-router-dom';
import { fetchLocation, formatLocation, Location } from '../../utils/locationUtils';

interface GetLocationVariables {
  locationId: string;
}

interface GetLocationResponse {
  location: Location;
}

const PropertyDetailPage = () => {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_PROPERTY_BY_ID, {
    variables: { id }
  });
  const [getLocation] = useLazyQuery<GetLocationResponse, GetLocationVariables>(GET_LOCATION);
  const [locations, setLocations] = useState<Record<string, Location>>({});
  const [formattedLocation, setFormattedLocation] = useState<string>('Loading location...');

  useEffect(() => {
    const loadLocation = async () => {
      if (data?.getProperty?.locationId) {
        const location = await fetchLocation(data.getProperty.locationId, {
          getLocation,
          locations,
          setLocations
        });
        setFormattedLocation(formatLocation(location));
      }
    };

    loadLocation();
  }, [data, getLocation, locations]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const property = data?.getProperty;

  const propertyDetails = {
    id: property.id,
    title: property.title,
    description: property.description,
    type: property.zoningInformation || 'N/A',
    size: property.size,
    price: property.price,
    location: formattedLocation,
    proximity: property.streetViewUrl || 'N/A',
    amenities: property.amenities,
    yearbuilt: property.yearBuilt,
    longitude: property.longitude,
    latitude: property.latitude,
    rating: 'N/A',
    image: property.images?.[0]?.url || 'https://via.placeholder.com/150',
    thumbnails: property.images?.map((image: { url: string }) => image.url) || []
  };

  return (
    <div>
      <PropertyDetailsPage property={propertyDetails} />
    </div>
  );
};

export default PropertyDetailPage;
