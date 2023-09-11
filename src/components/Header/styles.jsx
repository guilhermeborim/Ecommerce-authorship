import styled from 'styled-components';
import InputCreate from '../Inputs/styles';

export const InputHeader = styled(InputCreate)`
  border: none;
  background-color: transparent;
  outline: none;
`;

export const DivInput = styled.div`
  background-color: #f5f5f5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 4px;
`;
export const NavHeader = styled.nav`
  ul {
    display: flex;
    align-items: center;

    li {
      padding-left: 48px;
      font-size: 16px;
      color: #000;
      font-family: 'Poppins', sans-serif;
      font-weight: lighter;
    }
  }
`;

export const DivHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }
`;

const Headercontainer = styled.header`
  padding: 38px 0 16px 0;
  border-bottom: 1px solid #00000030;
`;

export default Headercontainer;
