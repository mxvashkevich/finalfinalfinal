import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/MainPage.tsx';

import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
}

export default App;
