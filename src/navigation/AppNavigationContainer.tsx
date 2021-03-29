import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from 'state/reducers/rootReducer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';

const AppStack = createStackNavigator();

/** The app main navigation container */
const AppNavigationContainer = () => {
  const user = useSelector((state: RootState) => state.user.user);

  const getDefaultStackToShow = () => {
    // TODO: Decide here what stack to show
    // If the user logged in already, show the main stack otherwise show the intro screen

    if (user === null) {
      return 'Auth';
    } else {
      return 'Main';
    }
  };

  return (
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        initialRouteName={getDefaultStackToShow()}>
        <AppStack.Screen name="Auth" component={AuthStack} />
        <AppStack.Screen name="Main" component={MainStack} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationContainer;
