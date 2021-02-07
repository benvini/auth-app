import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

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

const MainScreen: FunctionComponent = () => {
  return (
    <CustomView>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
      <CustomText>Login</CustomText>
    </CustomView>
  );
};

export default MainScreen;
