import styled from 'styled-components';
import { cores } from '../../styles';

export const NavHeader = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 38px;
  padding-bottom: 16px;
  ul {
    display: inline-flex;

    li {
      padding-left: 48px;
      font-family: 'Poppins', sans-serif;
    }

    .linot {
      padding-left: 0;
    }
  }
`;

export const DivInput = styled.div`
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 4px;
  padding: 7px 12px 7px 20px;

  input {
    background-color: transparent;
    border: none;
    outline: none;
    margin-right: 18px;
    font-family: 'Poppins', sans-serif;
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

export default PromotionHeader;
