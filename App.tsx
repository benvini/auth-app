import React, {useEffect, FunctionComponent} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import styled, {ThemeProvider} from 'styled-components/native';
import {loadTheme} from './src/shared/theme/theme';
import {loadLocale} from './src/shared/utils/locale';
import {useTranslation} from 'react-i18next';
import {getLocales} from 'react-native-localize';

declare const global: {HermesInternal: null | {}};

const TestColView = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  background-color: ${({theme}) => theme.palette.backgroundColor};
  padding: 20px;
`;

const TestRowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex: 1;
  background-color: ${({theme}) => theme.palette.backgroundColor};
  padding: 20px;
`;

const TestText = styled.Text`
  color: ${({theme}) => theme.palette.textColor};
`;

const testArray = ['1', '2', '3'];

loadLocale('en');

//initalizationPage vs ReduxMiddleWare
const App: FunctionComponent = () => {
  //Both of them should go to Store
  const {languageCode, isRTL} = getLocales()[0];
  const locale = languageCode === 'he' ? 'he' : 'en';
  const {t} = useTranslation('welcomePage');
  const colorScheme = useColorScheme();
  const theme = loadTheme(colorScheme || 'light');

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <TestColView>
        {testArray.map((n) => (
          <TestRowView key={n}>
            <TestText>{t('ol', {index: n})}</TestText>
            <TestText>{t('message')}</TestText>
          </TestRowView>
        ))}
      </TestColView>
    </ThemeProvider>
  );
};

export default App;
