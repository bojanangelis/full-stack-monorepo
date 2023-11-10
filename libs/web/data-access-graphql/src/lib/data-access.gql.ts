import { gql } from 'graphql-request';

const GET_USERS_GQL = gql`
  query GetUsers {
    users {
      id
      email
      name
    }
  }
`;
