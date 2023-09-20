import React from 'react';
import SendFooter from '../../assets/icon-send.png';
import QrCodeFooter from '../../assets/Qrcode.png';
import GooglePlay from '../../assets/GooglePlay.png';
import AppStore from '../../assets/AppStore.png';
import NavFooter, { DivDownload, FooterDiv, FooterInput } from './styles';

function Footer() {
  return (
    <FooterDiv>
      <NavFooter className="container">
        <ul className="ulEmail">
          <h3>Exclusive</h3>
          <h4>Subscribe</h4>
          <li>Get 10% off your first order</li>
          <FooterInput>
            <input type="email" placeholder="Enter your email" />
            <img src={SendFooter} alt="" />
          </FooterInput>
        </ul>
        <ul>
          <h3>Account</h3>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul>
          <h3>Pages</h3>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul className="ulDownload">
          <h3>Download App</h3>
          <span>Save $3 with App New User Only</span>
          <DivDownload>
            <img src={QrCodeFooter} alt="" />
            <div>
              <img src={GooglePlay} alt="" />
              <img src={AppStore} alt="" />
            </div>
          </DivDownload>
        </ul>
      </NavFooter>
      <p>Todos os Direitos Reservados a Guilherme Borim</p>
    </FooterDiv>
  );
}

export default Footer;
