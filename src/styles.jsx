import { createGlobalStyle } from 'styled-components';

const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    list-style: none;
    text-decoration: none;
    //font-family: 'Poppins', sans-serif;
  }
  img {
    display: block;
    max-width: 100%;
  }
  .container {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
  }


`;

export default GlobalCss;

export const cores = {
  black: '#000',
  white: '#fff',
  text: '#fafafa',
  button2: '#db4444'
};
