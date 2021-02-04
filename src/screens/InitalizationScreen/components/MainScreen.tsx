import React, {FunctionComponent} from 'react';
import styled from 'styled-components/native';

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
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
      <CustomText>Ragouan</CustomText>
    </CustomView>
  );
};

export default MainScreen;
