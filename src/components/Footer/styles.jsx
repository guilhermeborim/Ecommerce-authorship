import styled from 'styled-components';

export const FooterComponent = styled.footer`
  color: #fff;

  p {
    text-align: center;
    color: #3d3d3d;
    padding-bottom: 24px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
`;
export const FooterContainer = styled.div`
  background-color: #030406;
`;

export const NavFooter = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: 60px;
  padding-top: 80px;

  h3 {
    padding-bottom: 24px;
  }
  li {
    padding-bottom: 16px;
  }

  input {
    background-color: #030406;
    border: 1px solid #fff;
    padding: 10px;
    &::placeholder {
    }
  }
`;
