import { gql } from '@apollo/client';

export const GET_PROPERTY_BY_ID = gql`
  query GetPropertyById($id: UUID!) {
    getProperty(id: $id) {
      amenities {
        icon
        id
        title
      }
      description
      disclosure
      energyRating
      futureDevelopmentPlans
      id
      images {
        id
        propertyId
        url
      }
      latitude
      legalStatus
      locationId
      longitude
      neighborhood
      ownerId
      price
      size
      status
      streetViewUrl
      title
      yearBuilt
      zoningInformation
    }
  }
`;
