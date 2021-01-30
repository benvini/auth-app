import React, {useEffect, FunctionComponent} from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styled, {ThemeProvider} from 'styled-components/native';
import {loadTheme} from './src/shared/theme/theme';

declare const global: {HermesInternal: null | {}};

const CustomView = styled.View`
  display: flex;
  flex: 1;
  background-color: ${({theme}) => theme.palette.backgroundColor};
`;

const CustomText = styled.Text`
  display: flex;
  flex: 1;
  background-color: ${({theme}) => theme.palette.textColor};
`;

const App: FunctionComponent = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const colorScheme = useColorScheme();
  const theme = loadTheme(colorScheme || 'light');

  console.log(colorScheme);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <CustomView>
          <CustomText>Ahikam</CustomText>
        </CustomView>
      </SafeAreaView>
    </>
  );
};

export default App;
