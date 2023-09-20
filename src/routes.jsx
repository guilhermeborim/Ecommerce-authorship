import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sign from './pages/Sign';
import Login from './pages/Login';

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Sign />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default Rotas;
