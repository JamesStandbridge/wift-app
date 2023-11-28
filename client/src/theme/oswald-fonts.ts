// OswaldFonts.ts
import { createGlobalStyle } from 'styled-components';

export const OswaldFonts = createGlobalStyle`
  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 200;
    src: url('/Oswald/Oswald-ExtraLight.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 300;
    src: url('/Oswald/Oswald-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 400;
    src: url('/Oswald/Oswald-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 500;
    src: url('/Oswald/Oswald-Medium.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 600;
    src: url('/Oswald/Oswald-SemiBold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    src: url('/Oswald/Oswald-Bold.ttf') format('truetype');
  }

  // Continuez avec d'autres variantes si elles sont disponibles
`;
