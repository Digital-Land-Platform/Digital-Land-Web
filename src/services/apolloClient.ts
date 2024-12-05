import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const API_BASE_URL = (import.meta as any).env.VITE_REACT_APP_API_BASE_URL;

if (!API_BASE_URL) {
  console.error('Warning: VITE_REACT_APP_API_BASE_URL is not defined. Please provide a valid base URL.');
}

const client = new ApolloClient({
  link: new HttpLink({
    uri: `${API_BASE_URL}/graphql`
  }),
  cache: new InMemoryCache()
});

export default client;
