import React from 'react';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Playground from './components/Playground';
import Notification from './components/Notification';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Playground />
      <Notification />
    </Provider>
  );
};

export default App;
