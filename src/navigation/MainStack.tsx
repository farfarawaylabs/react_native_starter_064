import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'state/reducers/rootReducer';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from 'screens/MainScreens/HomeScreen';
import AppWalkthroughScreen from 'screens/GeneralScreens/AppWalkthroughScreen';

const Stack = createStackNavigator();

/** The stack of screens of the main app usage - after the user sign up/login */
const MainStack = () => {
  const didSeeWalkthrough = useSelector(
    (state: RootState) => state.user.didSeeWalkthrough,
  );

  const getScreenToShow = () => {
    if (didSeeWalkthrough) {
      return 'Home';
    } else {
      return 'Walkthrough';
    }
  };

  return (
    <Stack.Navigator initialRouteName={getScreenToShow()}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerLeft: () => null}}
      />
      <Stack.Screen
        name="Walkthrough"
        component={AppWalkthroughScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
