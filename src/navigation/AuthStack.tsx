import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from 'screens/AuthScreens/LoginScreen';

const Stack = createStackNavigator();

/** The stack of screens related to auth (login/signup/etc) */
const AppIntroStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default AppIntroStack;
