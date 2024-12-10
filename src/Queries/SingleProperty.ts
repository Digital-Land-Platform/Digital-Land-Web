import { gql } from '@apollo/client';

export const GET_PROPERTY_BY_ID = gql`
  query GetPropertyById($id: UUID!) {
    getProperty(id: $id) {
      description
      id
      images {
        id
        propertyId
        url
      }
      locationId
      price
      size
      status
      title
    }
  }
`;
