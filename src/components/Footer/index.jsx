import React from 'react';
import IconSend from '../../assets/icon-send.svg';
import { FooterComponent, FooterContainer, NavFooter } from './styles';
import { Container } from '../../styles';

function Footer() {
  return (
    <FooterContainer>
      <Container>
        <FooterComponent>
          <NavFooter>
            <ul>
              <h3>Exlusive</h3>
              <li>Subscribe</li>
              <li>Ganhe 10% na primeira compra!</li>
              <li>
                <div>
                  <input type="text" placeholder="Coloque seu email" />
                  <img src={IconSend} alt="" />
                </div>
              </li>
            </ul>
            <ul>
              <h3>Support</h3>
              <li>Rua da rua, Sao Paulo</li>
              <li>exclusive@gmail.com</li>
              <li>9999-9999</li>
            </ul>
            <ul>
              <h3>Account</h3>
              <li>Minha conta</li>
              <li>Login / Register</li>
              <li>Carrinho</li>
              <li>Favoritos</li>
            </ul>
            <ul>
              <h3>Links Rapidos</h3>
              <li>Politica de Privacidade</li>
              <li>Termos</li>
              <li>FAQ</li>
              <li>Contato</li>
            </ul>
          </NavFooter>
          <p>Todos os direitos reservados a Guilherme Borim</p>
        </FooterComponent>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
