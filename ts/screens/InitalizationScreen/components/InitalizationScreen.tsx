import React, {useEffect, FunctionComponent} from 'react';
import styled from 'styled-components/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStack} from '../../../shared/utils/routes';
import SplashScreen from 'react-native-splash-screen';

declare const global: {HermesInternal: null | {}};

// Whats the difference between FC and FunctionComponent

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

const delay = (t = 10) => {
  return new Promise((resolve) => setTimeout(resolve, t));
};

type IProps1 = {
  navigation: StackNavigationProp<RootStack>;
};

const InitalizationScreen: FunctionComponent<IProps1> = ({navigation: {navigate}}) => {
  useEffect(() => {
    (async () => {
      await delay(5000);
      navigate('Main');
      SplashScreen.hide();
    })();
  }, [navigate]);

  return (
    <CustomView>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
      <CustomText>Ahikam</CustomText>
    </CustomView>
  );
};

export default InitalizationScreen;
