import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EstiloGlobal from './styles';
import Sign from './pages/Sign';
import Login from './pages/Login';

function Rotas() {
  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route Component={Sign} path="/sign" />
          <Route Component={Login} path="/login" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
