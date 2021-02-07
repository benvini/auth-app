import {Platform, I18nManager} from 'react-native';
import light from './light';
import dark from './dark';

export type Palette = {
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

export const loadTheme = (colorSchema: string): Theme => ({
  isIOS,
  isRTL,
  palette: colorSchema === 'light' ? light : dark,
});
