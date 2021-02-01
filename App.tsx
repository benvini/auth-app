import React, {useEffect, FunctionComponent} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styled, {ThemeProvider} from 'styled-components/native';
import {loadTheme} from './src/shared/theme/theme';

declare const global: {HermesInternal: null | {}};

const CustomView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${({theme}) => theme.palette.backgroundColor};
`;

const CustomText = styled.Text`
  color: ${({theme}) => theme.palette.textColor};
`;

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const colorScheme = useColorScheme();
  const theme = loadTheme(colorScheme || 'light');

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <CustomView>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
        <CustomText>Ahikam</CustomText>
      </CustomView>
    </ThemeProvider>
  );
};

export default App;
