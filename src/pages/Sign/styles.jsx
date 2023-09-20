import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DivButton from '../Login/styles';
import Google from '../../assets/icon-Google.svg';

const ButtonSign = styled(DivButton)`
  display: block;
  button {
    width: 100%;
    &.botaoGoogle {
      background-color: transparent;
      border: 1px solid #999;
      color: #000;
      margin-top: 16px;
      background-image: url(${Google});
      background-repeat: no-repeat;
      background-position: center;
      background-position-x: 40px;
    }
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    color: #000;
    padding: 34px 0 0 0;
    text-align: center;
  }
`;

export const TextLogin = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #000;
  opacity: 0.7;
  margin-left: 16px;
`;

export default ButtonSign;
