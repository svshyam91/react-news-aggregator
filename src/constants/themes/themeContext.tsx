import React, { createContext, ReactNode, useContext, useState } from 'react';

import { Theme } from './themeTypes';
import defaultTheme from './default';

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
    const [theme, setTheme] = useState<Theme>(defaultTheme);

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
