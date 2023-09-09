import React from 'react';
import EstiloGlobal, { Container } from './styles';
import Login from './pages/Login';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Login />
      <Container />
    </>
  );
}

export default App;
