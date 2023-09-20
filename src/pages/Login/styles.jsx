import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  padding: 60px 0 140px 0;
`;

export const DivForm = styled.div`
  padding-left: 129px;

  h2 {
    font-size: 36px;
    font-style: normal;
    font-weight: 500;
    color: #000;
    padding-bottom: 24px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;
const DivButton = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const LinkSign = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  color: ${cores.button2};
  padding-left: 87px;
`;

export const ImgContainer = styled.div`
  max-width: 650px;
  width: 100%;
`;

export const FormLogin = styled.form`
  padding-top: 48px;
  input {
    width: 100%;
    margin-bottom: 40px;
    padding-bottom: 8px;
  }
`;

export default DivButton;
