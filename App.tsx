import React, {FunctionComponent} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {NavigationContainer} from '@react-navigation/native';
import {loadTheme} from '~/shared/theme';
import InitalizationScreen from '~/screens/InitalizationScreen';

declare const global: {HermesInternal: null | {}};

// Whats the difference between FC and FunctionComponent

const App: FunctionComponent = () => {
  const colorScheme = useColorScheme();
  const theme = loadTheme(colorScheme || 'light');

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
        <InitalizationScreen />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
