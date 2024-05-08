import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import LanguageSelector from './components/LanguageSelector';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <LanguageSelector />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
