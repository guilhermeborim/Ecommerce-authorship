import React from 'react';
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
    <ContainerLogin>
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
            <Button text="Log In" />
            <LinkSign to="/">Create account</LinkSign>
          </DivButton>
        </FormLogin>
      </DivForm>
    </ContainerLogin>
  );
}

export default Login;
