import React, {FunctionComponent} from 'react';
import {RootStack} from '../../shared/utils/routes';
import {createStackNavigator} from '@react-navigation/stack';
import {InitalizationScreen, MainScreen} from './components';
const Stack = createStackNavigator<RootStack>();

//How to use StackNavigationOptions
//How to use HeaderModeType

const InitalizationStack: FunctionComponent = () => {
  return (
    <Stack.Navigator initialRouteName="Initalization" headerMode="none" screenOptions={{animationEnabled: false}}>
      <Stack.Screen name="Initalization" component={InitalizationScreen} />
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default InitalizationStack;
