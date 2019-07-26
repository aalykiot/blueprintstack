import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Playground from './components/Playground';

import client from './graphql/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Playground />
    </ApolloProvider>
  );
};

export default App;
