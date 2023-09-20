import React from 'react';
import PromotionHeader, { ContainerNav, DivInput, NavHeader } from './styles';
import LupaHeader from '../../assets/lupa-header.svg';

function Header() {
  return (
    <header>
      <PromotionHeader>
        <div className="container">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          </p>
        </div>
      </PromotionHeader>
      <ContainerNav>
        <NavHeader className="container">
          <h1>Exclusive</h1>
          <ul>
            <li className="linot">Home</li>
            <li>Contato</li>
            <li>Sobre</li>
            <li>Sign Up</li>
          </ul>
          <DivInput>
            <input type="text" placeholder="What are you looking for?" />
            <img src={LupaHeader} alt="" />
          </DivInput>
        </NavHeader>
      </ContainerNav>
    </header>
  );
}

export default Header;
