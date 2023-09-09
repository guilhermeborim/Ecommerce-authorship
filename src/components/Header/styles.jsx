import styled from 'styled-components';
import LupaHeader from '../../assets/lupa-header.svg';

const Headercontainer = styled.header`
  padding: 38px 135px 16px 135px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #00000030;

  h1 {
    font-size: 24px;
    font-weight: bold;
    color: #000;
  }

  input {
    padding: 7px 20px;
    background-color: #f5f5f5;
    border: none;
    outline: none;
    background-image: url(${LupaHeader});
    background-repeat: no-repeat;
    background-position: right;
    padding-right: 34px;
    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 12px;
    }
  }
`;

export default Headercontainer;

export const NavHeader = styled.nav`
  display: flex;
  ul {
    display: flex;
    align-items: center;
    /* padding-right: 232px; */

    li {
      padding-left: 48px;
      font-size: 16px;
      color: #000;
      font-family: 'Poppins', sans-serif;
      font-weight: lighter;
    }
  }
`;
