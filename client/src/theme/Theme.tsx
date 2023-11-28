import React from 'react';
import theme from './theme';

import { ConfigProvider } from 'antd';

import { ThemeProvider } from 'styled-components';
import { RobotoFonts } from './roboto-fonts';

type Props = { children: React.ReactNode };

const Theme = ({ children }: Props) => {
    return (
        <ThemeProvider theme={theme}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#8B5FBF',
                        borderRadius: 2,
                        colorBgContainer: '#FFFFFF',
                    },
                }}
            >
                <RobotoFonts />
                {children}
            </ConfigProvider>
        </ThemeProvider>
    );
};

export default Theme;
