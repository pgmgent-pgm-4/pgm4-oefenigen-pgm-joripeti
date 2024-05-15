import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguageSelector from './components/LanguageSelector';
import './App.css';

function App() {
  
  return (
    <LanguageProvider>
      <div className="App">
          <LanguageSelector />
      </div>
    </LanguageProvider>
  );
}

export default App;
