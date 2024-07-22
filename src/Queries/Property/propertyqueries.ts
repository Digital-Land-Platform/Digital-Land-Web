import { gql } from '@apollo/client';

export const GET_PROPERTIES = gql`
  query GetProperties {
    listProperties {
      id
      title
      price
      size
      locationId
      description
      disclosure
      images {
        id
        url
      }
    }
  }
`;
