import { createContext, useEffect } from 'react';
import { useState } from 'react';

export const ThemeContext = createContext();
export const ThemeArea = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    return (
    <ThemeContext.Provider value={[isDarkMode, setIsDarkMode]}>
        {children}
    </ThemeContext.Provider>
    );
}