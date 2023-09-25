import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/Sign';
import Login from './pages/Login';
import HomePage from './pages/HomePage';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/login" element={<Login />} />
      <Route path="/homepage" element={<HomePage />} />
    </Routes>
  );
}

export default Rotas;
