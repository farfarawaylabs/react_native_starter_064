import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

const useSplashScreen = (shouldHide: boolean) => {
  useEffect(() => {
    if (shouldHide) {
      SplashScreen.hide();
    }
  }, [shouldHide]);
};

export default useSplashScreen;
