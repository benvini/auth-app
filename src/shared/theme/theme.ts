import {Platform, I18nManager} from 'react-native';

type Palette = {
  textColor: string;
  backgroundColor: string;
};

export type Theme = {
  isIOS: Boolean;
  isRTL: Boolean;
  palette: Palette;
};

const isIOS = Platform.OS === 'ios';

const isRTL = I18nManager.isRTL;

const dark: Palette = {
  textColor: '#FFF',
  backgroundColor: '#000',
};

const light: Palette = {
  textColor: '#000',
  backgroundColor: '#FFF',
};

export const loadTheme = (colorSchema: string): Theme => ({
  isIOS,
  isRTL,
  palette: colorSchema === 'light' ? light : dark,
});
