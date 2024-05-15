import { createContext, useState } from "react";

export const languageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('Engels');

return (
    <languageContext.Provider value={[language, setLanguage]}>
        {children}
    </languageContext.Provider>
  );
};

