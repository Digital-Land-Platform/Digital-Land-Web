import { gql } from '@apollo/client';

export const GET_LOCATION = gql`
  query GetLocation($locationId: String!) {
    getLocation(locationId: $locationId) {
      country
      province
      sector
    }
  }
`;
