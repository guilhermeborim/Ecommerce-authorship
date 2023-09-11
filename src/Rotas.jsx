import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EstiloGlobal from './styles';
import Header from './components/Header';
import Footer from './components/Footer';

function Rotas() {
  return (
    <>
      <EstiloGlobal />
      <BrowserRouter>
        <Routes>
          <Route Component={Header} path="/" />
          <Route Component={Footer} path="/footer" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Rotas;
