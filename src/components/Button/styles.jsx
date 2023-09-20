import styled from 'styled-components';
import { cores } from '../../styles';

const ButtonContainer = styled.button`
  background-color: ${cores.button2};
  border: none;
  color: ${cores.text};
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-style: normal;
  padding: 16px 48px;
  border-radius: 4px;
  cursor: pointer;
  display: block;
`;

export default ButtonContainer;
