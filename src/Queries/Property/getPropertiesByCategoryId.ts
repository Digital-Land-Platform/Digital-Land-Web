import { gql } from '@apollo/client';

export const GET_PROPERTIES_BY_CATEGORY_ID = gql`
  query GetPropertiesByCategoryId($categoryId: UUID!) {
    getPropertiesByCategoryId(categoryId: $categoryId) {
      id
      title
      price
      size
      description
      locationId
      images {
        url
      }
    }
  }
`;

export const GET_RELATION_BY_PROPERTY_ID = gql`
  query GetRelationByPropertyId($propertyId: String!) {
    getRelationByPropertyId(propertyId: $propertyId) {
      catagoryId
      id
      propertyId
    }
  }
`;
