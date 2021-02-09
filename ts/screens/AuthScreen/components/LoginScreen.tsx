import React, {FunctionComponent} from 'react';
import {useTranslation} from 'react-i18next';
import {Screen, Typography} from '~/shared/components';

const LoginScreen: FunctionComponent = () => {
  const {t} = useTranslation('loginScreen');

  return (
    <Screen>
      <Typography>{t('userName')}</Typography>
      <Typography>{t('password')}</Typography>
    </Screen>
  );
};

export default LoginScreen;
