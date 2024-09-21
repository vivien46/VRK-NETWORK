import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/Layout/Layout';
import LoginPage from './pages/LoginPage';
import Login2Test from './pages/Login2Test';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="/login2" element={<Login2Test />} /> */}
          <Route path="/logout" element={<Login2Test />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
