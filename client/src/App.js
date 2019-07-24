import React from 'react';
import { ApolloProvider } from 'react-apollo';

import Header from './components/Header';
import Playground from './components/Playground';

import client from './apollo/client';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Playground />
    </ApolloProvider>
  );
};

export default App;
