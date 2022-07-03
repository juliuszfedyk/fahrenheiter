export type Theme = {
  colors: {
    text: string;
    background: {
      _: string;
      contrast: string;
      accent: string;
    };
    primary: string;
    primary_dark: string;
    secondary: string;
  };
  borders: {
    radius: string;
  };
  spacings: {
    small: string;
    large: string;
  };
  images: { black_icon_filter: string };
};
