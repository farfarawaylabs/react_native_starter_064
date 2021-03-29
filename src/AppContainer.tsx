import React from 'react';
import {Provider} from 'react-redux';
import App from './App';
import useStore from 'hooks/useStore';

/** Container to inject redux and theme into the app */
const AppContainer = () => {
  // Load the persisted store or the initial one
  const store = useStore();

  // Wait until the store is loaded before showing the app
  if (store === null) {
    return null;
  }

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppContainer;
