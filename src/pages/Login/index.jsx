import React from 'react';
import { Link } from 'react-router-dom';
import Inputs from '../../components/Inputs';
import Buttons from '../../components/Buttons';
import ImgLogin from '../../assets/Side image.png';
import SectionCreate, { DivCreateForm } from '../Sign/styles';
import ContainerSign from './styles';

function Login() {
  return (
    <SectionCreate>
      <img src={ImgLogin} alt="" />
      <DivCreateForm>
        <h3>Entre em Exlusive</h3>
        <p>Insira seus dados abaixo</p>
        <div>
          <Inputs type="email" placeholder="Email" />
        </div>
        <div>
          <Inputs type="password" placeholder="Password" />
        </div>
        <ContainerSign>
          <Buttons width="143px">Log In</Buttons>
          <Link to="/sign">Crie sua Conta</Link>
        </ContainerSign>
      </DivCreateForm>
    </SectionCreate>
  );
}

export default Login;
