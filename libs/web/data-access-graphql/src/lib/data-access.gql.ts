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
      title
      imagePath
      navigationPath
      rgbBackground {
        r
        g
        b
      }
    }
  }
`;
