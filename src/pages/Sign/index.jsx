import React from 'react';
import ImgLogin from '../../assets/Side-Image.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {
  ContainerLogin,
  DivForm,
  FormLogin,
  ImgContainer
} from '../Login/styles';
import ButtonSign, { TextLogin } from './styles';

function Sign() {
  return (
    <ContainerLogin>
      <ImgContainer>
        <img src={ImgLogin} alt="Imagem de um carrinho de compras" />
      </ImgContainer>
      <DivForm>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <FormLogin>
          <Input placeholder="Name" type="text" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Password" type="password" />
          <ButtonSign>
            <Button text="Create Account" />
            <Button text="Sign up with Google" className="botaoGoogle" />
            <p>
              Already have account?
              <span>
                <TextLogin to="/login">Log In</TextLogin>
              </span>
            </p>
          </ButtonSign>
        </FormLogin>
      </DivForm>
    </ContainerLogin>
  );
}

export default Sign;
