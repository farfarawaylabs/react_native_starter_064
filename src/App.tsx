import React from 'react';
import useSplashScreen from 'hooks/useSplashScreen';
import {enableScreens} from 'react-native-screens';
import AppNavigationContainer from 'navigation/AppNavigationContainer';

declare const global: {HermesInternal: null | {}};
enableScreens();

const App = () => {
  /** Hides the Splash screen on app load */
  useSplashScreen(true);

  return (
    <>
      <AppNavigationContainer />
    </>
  );
};

export default App;
