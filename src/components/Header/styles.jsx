import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { cores } from '../../styles';
import LupaHeader from '../../assets/lupa-header.svg';

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 38px;
  padding-bottom: 16px;
  ul {
    display: inline-flex;

    li {
      margin-left: 48px;
      font-family: 'Poppins', sans-serif;
    }

    .linot {
      padding-left: 0;
    }
  }
  div {
    display: inline-flex;
    img {
      margin-left: 16px;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  input {
    background-color: #f5f5f5;
    border: none;
    outline: none;
    padding: 10px 70px 10px 20px;
    font-family: 'Poppins', sans-serif;
    background-image: url(${LupaHeader});
    background-repeat: no-repeat;
    background-position: 215px 7px;
    border-radius: 4px;
  }
  img {
    cursor: pointer;
  }
`;
export const ContainerNav = styled.div`
  border-bottom: 1px solid #00000039;
`;

const PromotionHeader = styled.div`
  background-color: ${cores.black};
  color: ${cores.text};
  text-align: center;
  padding: 12px 0;
  p {
    font-family: 'Poppins', sans-serif;
  }
`;

export const LinkNavbar = styled(Link)`
  font-family: 'Poppins', sans-serif;
  margin-left: 48px;
  color: #000;
`;
export default PromotionHeader;
