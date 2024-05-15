
import './App.css';
import { useState } from 'react';
import EmojiResults from './components/EmojiResults';
import EmojiSearchForm from './components/EmojiSearchForm';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <EmojiSearchForm onSearch={setSearchTerm} />
      <EmojiResults searchTerm={searchTerm} />
    </div>
  );
}

export default App;
