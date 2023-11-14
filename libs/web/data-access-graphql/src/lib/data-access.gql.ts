import { gql } from 'graphql-request';

export const GET_USERS_GQL = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;

export const GET_HOME_BLOCKS_GQL = gql`
  query GetHomeImages {
    homeBlocks {
      id
      navigationPath
      image {
        title
        imagePath
        rgbBackground {
          r
          g
          b
        }
      }
    }
  }
`;

export const GET_PRODUCTS_GQL = gql`
  query GetProducts {
    products {
      name
      price
      discountPrice
      images {
        title
        imagePath
        rgbBackground {
          r
          g
          b
        }
      }
      availableColors {
        r
        g
        b
      }
    }
  }
`;
