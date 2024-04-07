import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Theme } from './themeTypes';
import COLORS from './colors';

interface ThemeContextType {
    theme: Theme;
    changeTheme: (newTheme: Theme) => void;
}

interface ThemeProviderProps {
    children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => useContext<ThemeContextType>(ThemeContext);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const themeId = localStorage.getItem('themeId');
        const defaultTheme =
            COLORS.find((color) => color.ID === parseInt(themeId)) || COLORS[0];
        return themeId ? defaultTheme : COLORS[0];
    });

    const changeTheme = (newTheme: Theme) => {
        setTheme(newTheme);
    };

    const contextValue: ThemeContextType = {
        theme,
        changeTheme,
    };

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
