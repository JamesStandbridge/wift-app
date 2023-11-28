import { Color } from './theme.type';

export interface ThemeType {
    primaryColor: Color;
    textColor: Color;
    valueColor: Color;
    accentColor: Color;
    lineColor: Color;
    backgroundColor: Color;
}

const theme: ThemeType = {
    primaryColor: '#8B5FBF',
    textColor: '#4A4A4A',
    valueColor: '#FFFFFF',
    accentColor: '#D6C6E1',
    lineColor: '#00ff00',
    backgroundColor: '#F5F3F7',
};

export default theme;
