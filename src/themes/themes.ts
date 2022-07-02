import type { theme } from '../types/theme.types';

const colors = {
  imperialRed: '#e63946ff',
  honeydew: '#f1faeeff',
  powderBlue: '#a8dadc',
  celadonBlue: '#457b9dff',
  prussianBlue: '#1d3557ff',
  veryDarkBlue: '#0f1b2c',
};

export const themes: { [themeName: string]: theme } = {
  light: {
    colors: {
      text: colors.veryDarkBlue,
      background: {
        _: colors.honeydew,
        contrast: '#ffffff',
        accent: colors.powderBlue,
      },
      primary: colors.imperialRed,
      primary_dark: colors.prussianBlue,
      secondary: colors.celadonBlue,
    },
  },
  dark: {
    colors: {
      text: colors.honeydew,
      background: {
        _: colors.veryDarkBlue,
        contrast: '#000000',
        accent: colors.prussianBlue,
      },
      primary: colors.imperialRed,
      primary_dark: colors.celadonBlue,
      secondary: colors.powderBlue,
    },
  },
};
