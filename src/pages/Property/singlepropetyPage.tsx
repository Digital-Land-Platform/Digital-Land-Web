import React, { useState, useEffect } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_PROPERTY_BY_ID } from '../../Queries/Property/propertybyidquery';
import { GET_PROPERTIES_BY_CATEGORY_ID } from '../../Queries/Property/getPropertiesByCategoryId';
import { GET_RELATION_BY_PROPERTY_ID } from '../../Queries/Property/getPropertiesByCategoryId';
import { useParams } from 'react-router-dom';
import PropertyDetailsPage from '../../components/Property/singlePropertyPage';

interface PropertyImage {
  id: string;
  propertyId: string;
  url: string;
}

const PropertyDetailPage = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROPERTY_BY_ID, {
    variables: { id }
  });

  // Lazy query for fetching relation by propertyId
  const [getRelationByPropertyId, { data: relationData }] = useLazyQuery(GET_RELATION_BY_PROPERTY_ID);

  // Lazy query for fetching properties by categoryId
  const [
    getPropertiesByCategoryId,
    { data: propertiesByCategoryData, loading: loadingCategory, error: errorCategory }
  ] = useLazyQuery(GET_PROPERTIES_BY_CATEGORY_ID);

  const [categoryProperties, setCategoryProperties] = useState<any[]>([]);

  // Use hardcoded propertyId to fetch the categoryId
  useEffect(() => {
    const propertyId = '26b0c7ef-f6a9-4b22-a1d8-bbc451945c92'; // Replace with a valid propertyId for testing
    console.log('Using hardcoded Property ID:', propertyId);
    getRelationByPropertyId({ variables: { propertyId } });
  }, [getRelationByPropertyId]);

  // Once relationData is fetched, get the categoryId and fetch properties by category
  useEffect(() => {
    if (relationData?.getRelationByPropertyId?.categoryId) {
      const categoryId = relationData.getRelationByPropertyId.categoryId;
      console.log('Category ID fetched:', categoryId);
      getPropertiesByCategoryId({ variables: { categoryId } });
    }
  }, [relationData, getPropertiesByCategoryId]);

  // Once propertiesByCategoryData is fetched, set the categoryProperties
  useEffect(() => {
    if (propertiesByCategoryData?.getPropertiesByCategoryId) {
      console.log('Fetched properties:', propertiesByCategoryData.getPropertiesByCategoryId);
      setCategoryProperties(propertiesByCategoryData.getPropertiesByCategoryId);
    }
  }, [propertiesByCategoryData]);

  if (loading || loadingCategory) return <p>Loading...</p>;
  if (error || errorCategory) return <p>Error: {error?.message || errorCategory?.message}</p>;

  const property = data?.getProperty;

  const propertyDetails = {
    id: property.id,
    title: property.title,
    description: property.description,
    type: property.zoningInformation || 'N/A',
    size: property.size,
    price: property.price,
    location: property.locationId || 'N/A',
    proximity: property.streetViewUrl || 'N/A',
    amenities: property.amenities?.map((amenity: { title: string; icon: string }) => ({
      title: amenity.title,
      icon: amenity.icon
    })),
    yearbuilt: property.yearBuilt,
    longitude: property.longitude,
    latitude: property.latitude,
    streetview: property.streetViewUrl,
    neighborhood: property.neighborhood,
    zoningInformation: property.zoningInformation || 'N/A',
    energyrating: property.energyRating || 'N/A',
    futureDevelopmentPlans: property.futureDevelopmentPlans || 'N/A',
    disclosure: property.disclosure || 'N/A',
    legalStatus: property.legalStatus || 'N/A',
    rating: 'N/A',
    image: property.images?.map((image: PropertyImage) => ({
      id: image.id,
      propertyId: image.propertyId,
      url: image.url
    })) || [{ id: '', propertyId: '' }],
    thumbnails: property.images?.map((image: PropertyImage) => image.url) || []
  };

  return (
    <div>
      <PropertyDetailsPage property={propertyDetails} similarProperties={categoryProperties} />
    </div>
  );
};

export default PropertyDetailPage;
