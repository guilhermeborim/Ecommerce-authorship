import React, { useState } from 'react';
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

const url = 'http://localhost:3000/users';
function Sign() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = {
      name,
      email,
      password
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(users)
    });

    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <ContainerLogin className="container">
      <ImgContainer>
        <img src={ImgLogin} alt="Imagem de um carrinho de compras" />
      </ImgContainer>
      <DivForm>
        <h2>Create an account</h2>
        <p>Enter your details below</p>
        <FormLogin onSubmit={handleSubmit}>
          <Input
            placeholder="Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
