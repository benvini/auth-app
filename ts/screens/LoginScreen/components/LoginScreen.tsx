import React, {FC, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';

import {Screen, Typography, Spinner} from '../../../shared/components';
import {setItem} from '../../../shared/utils/localeStorage';
import {login} from '../../../shared/utils/api';
import {setIsAuthenticated} from '../../../store/actions/auth';

const Input = styled.TextInput`
  padding: 8px;
  border: 1px solid #ccc;
  height: 40px;
  width: 200px;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({theme: {palette}}) => palette.textColor};
`;

const StyledLabel = styled(Typography)`
  font-weight: bold;
  font-size: 20px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
  padding: 8px;
  margin-bottom: 120px;
`;

const StyledButton = styled.TouchableOpacity`
  background-color: ${({theme: {palette}}) => palette.primary};
  padding: 10px;
  align-items: center;
  width: 120px;
  border-radius: 4px;
`;

const LoginScreen: FC = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {t} = useTranslation('loginScreen');
  const dispatch = useDispatch();

  const onEmailChange = (text: string) => {
    setEmailInput(text);
  };

  const onPasswordChange = (text: string) => {
    setPasswordInput(text);
  };

  const onLogin = useCallback(async () => {
    const userCredentials = {
      email: emailInput,
      password: passwordInput,
    };
    try {
      setIsLoading(true);
      const res = await login(userCredentials);

      const {token, personalDetails} = res;
      setItem('token', token);
      setItem('details', JSON.stringify(personalDetails));
      dispatch(setIsAuthenticated());
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setError(true);
    }
  }, [emailInput, passwordInput]);

  if (error) {
    <Typography>{t('unableLogin')}</Typography>;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Screen>
      <Title>{t('title')}</Title>
      <StyledLabel>{t('email')}</StyledLabel>
      <Input onChangeText={onEmailChange} value={emailInput} />
      <StyledLabel>{t('password')}</StyledLabel>
      <Input onChangeText={onPasswordChange} value={passwordInput} secureTextEntry={true} />
      <StyledButton onPress={onLogin}>
        <StyledLabel>{t('login')}</StyledLabel>
      </StyledButton>
    </Screen>
  );
};

export default LoginScreen;
