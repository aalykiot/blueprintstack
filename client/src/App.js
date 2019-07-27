import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';

import Header from './components/Header';
import Playground from './components/Playground';
import Notification from './components/Notification';

import client from './graphql/apollo';

const App = () => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <ApolloProvider client={client}>
      {isShowing && <Notification onClick={() => setIsShowing(false)} />}
      <Header />
      <Playground />
    </ApolloProvider>
  );
};

export default App;
