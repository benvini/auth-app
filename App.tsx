import React, {FunctionComponent, useState, useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {loadTheme} from '~/shared/theme';
import SplashScreen from 'react-native-splash-screen';
import {MainScreen, AuthScreen} from '~/screens';

declare const global: {HermesInternal: null | {}};

// Whats the difference between FC and FunctionComponent

const App: FunctionComponent = () => {
  const [isLoading, setIsLoading] = useState(true);
  //will go to redux
  const [isToken, setIsToken] = useState(false);
  const colorScheme = useColorScheme();
  const theme = loadTheme(colorScheme || 'light');

  useEffect(() => {
    (async () => {
      setIsLoading(false);
      SplashScreen.hide();
    })();
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        {isToken ? <MainScreen /> : <AuthScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
