import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import DivButton, {
  ContainerLogin,
  DivForm,
  FormLogin,
  ImgContainer,
  LinkSign
} from './styles';
import ImgLogin from '../../assets/Side-Image.png';

function Login() {
  return (
    <ContainerLogin className="container">
      <ImgContainer>
        <img src={ImgLogin} alt="Imagem de um carrinho de compras" />
      </ImgContainer>
      <DivForm>
        <h2>Log in to Exclusive</h2>
        <p>Enter your details below</p>
        <FormLogin>
          <Input placeholder="Digite seu email" type="email" />
          <Input placeholder="Digite sua senha" type="password" />
          <DivButton>
            <Link to="/homepage">
              <Button text="Log In" />
            </Link>
            <LinkSign to="/">Create account</LinkSign>
          </DivButton>
        </FormLogin>
      </DivForm>
    </ContainerLogin>
  );
}

export default Login;
