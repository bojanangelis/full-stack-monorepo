import { getGraphqlClient } from '@full-stack/web/data-access-graphql';

export const gql = getGraphqlClient('http://localhost:3333/graphql');
