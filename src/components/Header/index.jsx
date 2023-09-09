import React from 'react';
import Headercontainer, { NavHeader } from './styles';

function Header() {
  return (
    <Headercontainer>
      <h1>Exclusive</h1>
      <NavHeader>
        <ul>
          <li>Home</li>
          <li>Contato</li>
          <li>Sobre</li>
          <li>Sign Up</li>
        </ul>
      </NavHeader>
      <div>
        <input type="text" placeholder="O que voce esta procurando?" />
      </div>
    </Headercontainer>
  );
}

export default Header;