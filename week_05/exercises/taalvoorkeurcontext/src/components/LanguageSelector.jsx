import React, { useContext } from 'react'
import { languageContext } from '../context/LanguageContext';

export default function LanguageSelector() {

    const [language, setLanguage] = useContext(languageContext);

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };
    
  return (
    <div>
        <h1>selecteer jouw taal</h1>
        <button onClick={() => handleLanguageChange('Nederlands')}>Nederlands</button>
        <button onClick={() => handleLanguageChange('Engels')}>Engels</button>
        <p className={language === 'Engels' ? 'blue' : 'red'}>huidige taal: {language.toUpperCase()}</p>
    </div>
  );
}
