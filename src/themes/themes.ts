import type { Theme } from '../types/theme.types';

const colors = {
  imperialRed: '#e63946ff',
  honeydew: '#f1faeeff',
  powderBlue: '#a8dadc',
  celadonBlue: '#457b9dff',
  prussianBlue: '#1d3557ff',
  veryDarkBlue: '#0f1b2c',
};

export const themes: { [themeName: string]: Theme } = {
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
    borders: { radius: '10px' },
    spacings: { large: '10px', small: '5px' },
    images: { black_icon_filter: 'none' },
    fonts: {
      sizes: { small: '12px', medium: '18px', large: '32px', x_large: '48px' },
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
    borders: { radius: '10px' },
    spacings: { large: '10px', small: '5px' },
    images: { black_icon_filter: 'invert(1)' },
    fonts: {
      sizes: { small: '12px', medium: '18px', large: '32px', x_large: '48px' },
    },
  },
};
