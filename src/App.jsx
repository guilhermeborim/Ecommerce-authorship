import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalCss from './styles';
import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Header />

      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
