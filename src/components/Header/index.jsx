import React from 'react';
import PromotionHeader, {
  ContainerNav,
  DivInput,
  LinkNavbar,
  NavHeader
} from './styles';

import Wishlist from '../../assets/Wishlist.svg';
import IconCart from '../../assets/icon-cart.png';

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
            <LinkNavbar to="/homepage" className="linot">
              Home
            </LinkNavbar>
            <li>Contato</li>
            <li>Sobre</li>
            <LinkNavbar to="/">Sign Up</LinkNavbar>
          </ul>
          <DivInput>
            <input type="text" placeholder="What are you looking for?" />
            {/* <img src={LupaHeader} alt="" /> */}
            <div>
              <img src={Wishlist} alt="" />
              <img src={IconCart} alt="" />
            </div>
          </DivInput>
        </NavHeader>
      </ContainerNav>
    </header>
  );
}

export default Header;
