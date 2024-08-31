import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://plataforma.alerta.mapbiomas.org/api/v2/graphql',
  headers: {
    Authorization: `Bearer YOUR_TOKEN_HERE`, // Substitua pelo seu token
  },
  cache: new InMemoryCache(),
});

export default client;
