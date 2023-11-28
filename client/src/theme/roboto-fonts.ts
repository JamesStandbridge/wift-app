// RobotoFonts.ts
import { createGlobalStyle } from 'styled-components';

export const RobotoFonts = createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    src: url('/Roboto/Roboto-Thin.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 100;
    src: url('/Roboto/Roboto-ThinItalic.ttf') format('truetype');
  }

  // Répétez ce modèle pour chaque variante de poids et de style
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: url('/Roboto/Roboto-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 300;
    src: url('/Roboto/Roboto-LightItalic.ttf') format('truetype');
  }

  // Continuez pour les poids 400, 500, 700, 900, etc., et leurs variantes italiques
  // Exemple pour le poids normal (400)
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: url('/Roboto/Roboto-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    src: url('/Roboto/Roboto-Italic.ttf') format('truetype');
  }

  // Continuez avec les autres poids et styles...
`;
