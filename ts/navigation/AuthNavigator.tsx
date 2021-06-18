import React, {useEffect, useState} from 'react';
import {createStackNavigator, StackNavigationOptions} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';

import LoginScreen from '../screens/LoginScreen/components/LoginScreen';
import InfoScreen from '../screens/InfoScreen/components/InfoScreen';
import {ROUTES} from './routes';
import {getItem} from '../shared/utils/localeStorage';
import {IsAuthState} from '../types/types';
import {setIsAuthenticated} from '../store/actions/auth';
import {Spinner} from '../shared/components';

const defaultNavOptions: StackNavigationOptions = {
  headerShown: false,
};

const opacityTransition: object = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: {
      animation: 'timing',
    },
    close: {
      animation: 'timing',
      config: {
        duration: 600,
      },
    },
  },
  cardStyleInterpolator: ({current}: {current: {progress: number}}) => ({
    cardStyle: {
      opacity: current.progress,
    },
  }),
};

const AuthStackNavigator = createStackNavigator();

const AuthNavigator = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const isAuth = useSelector((state: IsAuthState) => state.isAuth);
  useEffect(() => {
    (async () => {
      const fetchedToken = await getItem('token');
      if (fetchedToken) {
        dispatch(setIsAuthenticated());
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    })();
  }, []);
  const {login, info} = ROUTES;
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <AuthStackNavigator.Navigator screenOptions={{...defaultNavOptions, ...opacityTransition}}>
      {isAuth ? (
        <>
          <AuthStackNavigator.Screen name={info} component={InfoScreen} />
        </>
      ) : (
        <>
          <AuthStackNavigator.Screen name={login} component={LoginScreen} />
        </>
      )}
    </AuthStackNavigator.Navigator>
  );
};

export default AuthNavigator;
