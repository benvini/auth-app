import React, {FunctionComponent, useState, useEffect} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {loadTheme} from '~/shared/theme';
import SplashScreen from 'react-native-splash-screen';
import {MainScreen, AuthScreen} from '~/screens';
import {loadLocale} from '~/shared/utils/locale';
import {getLocales} from 'react-native-localize';

// declare const global: {HermesInternal: null | {}};

// toDo: Whats the difference between FC and FunctionComponent

const App: FunctionComponent = () => {
  //toDo: will go to redux
  const [isToken, setIsToken] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const colorScheme = useColorScheme();

  const [{languageCode, isRTL}] = getLocales();
  const theme = loadTheme(colorScheme || 'light', isRTL);

  useEffect(() => {
    (async () => {
      loadLocale(languageCode);
      setIsLoading(false);
      SplashScreen.hide();
    })();
  }, [languageCode]);

  if (isLoading) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="default" />
        {isToken ? <MainScreen /> : <AuthScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
