import React from 'react';

import Headercontainer, {
  DivHeader,
  DivInput,
  InputHeader,
  NavHeader
} from './styles';
import { Container } from '../../styles';
import LupaHeader from '../../assets/lupa-header.svg';

function Header() {
  return (
    <Headercontainer>
      <Container>
        <DivHeader>
          <h1>Exclusive</h1>
          <NavHeader>
            <ul>
              <li>Home</li>
              <li>Contato</li>
              <li>Sobre</li>
              <li>Sign Up</li>
            </ul>
          </NavHeader>
          <DivInput>
            <InputHeader type="text" placeholder="O que esta procurando?" />
            <img src={LupaHeader} alt="Imagem Lupa" />
          </DivInput>
        </DivHeader>
      </Container>
    </Headercontainer>
  );
}

export default Header;
