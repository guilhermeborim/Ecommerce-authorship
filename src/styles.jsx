import { createGlobalStyle, styled } from 'styled-components';

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
  }
  ul,li,a {
    list-style: none;
    text-decoration: none;
  }
  h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }
  img {
    display: block;
    max-width: 100%;
  }
`;

export default EstiloGlobal;

export const Container = styled.div`
  max-width: 1170px;
  width: 100%;
  margin: 0 auto;
`;
