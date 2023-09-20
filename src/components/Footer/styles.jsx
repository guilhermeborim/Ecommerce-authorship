import styled from 'styled-components';
import { DivInput } from '../Header/styles';
import { cores } from '../../styles';

const NavFooter = styled.nav`
  display: flex;
  justify-content: space-between;
  color: white;
  padding: 40px 0;
  .ulEmail {
    h4 {
      padding-bottom: 24px;
      font-size: 20px;
    }
  }
  .ulDownload {
    span {
      font-size: 12px;
      font-family: 'Poppins', sans-serif;
      opacity: 0.7;
      color: ${cores.text};
    }
  }
`;

export const FooterDiv = styled.footer`
  background-color: black;
  h3 {
    padding-bottom: 24px;
    font-size: 24px;
  }
  li {
    padding-bottom: 16px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }
  p {
    color: white;
    opacity: 0.3;
    text-align: center;
    padding-bottom: 24px;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 400;
  }
`;
export const DivDownload = styled.div`
  padding-top: 8px;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
`;
export const FooterInput = styled(DivInput)`
  background-color: black;
  border: 2px solid #fafafa;
  padding: 12px 15px 12px 16px;

  input {
    width: 130px;
    color: white;
  }
  img {
    cursor: pointer;
  }
`;

export default NavFooter;
