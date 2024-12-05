import React from 'react';
import Layout from './layout/Layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Toaster } from 'react-hot-toast';
import { ApolloProvider } from '@apollo/client';
import client from '../src/services/apolloClient';

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div data-testid="app-component">
          <Layout />
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
