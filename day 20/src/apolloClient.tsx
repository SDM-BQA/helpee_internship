import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://staging.helpeehands.in/v1/graphql', 
  // uri: 'https://spacex-production.up.railway.app/', 
  // uri: 'https://api.diadata.org/graphql/query', 
  cache: new InMemoryCache(),
});

export default client;
