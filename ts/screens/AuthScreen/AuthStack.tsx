import React, {FunctionComponent} from 'react';
import {Auth} from '~/shared/utils/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen} from './components';
import {SignupScreen} from './components';

const Stack = createStackNavigator<Auth>();

//How to use StackNavigationOptions
//How to use HeaderModeType

const AuthStack: FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Login" headerMode="none" screenOptions={{animationEnabled: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
