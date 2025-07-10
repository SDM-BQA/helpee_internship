// ApolloProvider.tsx
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Your GraphQL server URL
  cache: new InMemoryCache(),
});

const ApolloProviderComponent: React.FC = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderComponent;
