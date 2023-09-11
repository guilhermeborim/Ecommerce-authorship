import React from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../components/Inputs';
import Buttons from '../../components/Buttons';
import ImgLogin from '../../assets/Side image.png';
import SectionCreate, { DivCreateForm } from './styles';
import IconGoogle from '../../assets/Icon-Google.svg';

function Sign() {
  return (
    <SectionCreate>
      <img src={ImgLogin} alt="" />
      <DivCreateForm>
        <h3>Crie sua Conta</h3>
        <p>Insira seus dados abaixo</p>
        <div>
          <Inputs type="text" placeholder="Name" />
        </div>
        <div>
          <Inputs type="email" placeholder="Email" />
        </div>
        <div>
          <Inputs type="password" placeholder="Password" />
        </div>
        <Buttons color="#FAFAFA">Crie sua Conta</Buttons>
        <Buttons backgroundcolor="#fff" color="#000" border="1px solid #999999">
          <img src={IconGoogle} alt="" />
          Crie com o Google
        </Buttons>
        <h4>
          Ja tem uma conta?
          <span>
            <Link to="/login">Log In</Link>
          </span>
        </h4>
      </DivCreateForm>
    </SectionCreate>
  );
}

export default Sign;
