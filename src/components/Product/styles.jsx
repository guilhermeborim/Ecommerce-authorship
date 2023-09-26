import styled from 'styled-components';

const ProductContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 270px;
  border-radius: 16px;
  flex: none;
`;

export const ImgProduct = styled.div`
  display: flex;
  align-items: center;

  img {
    max-width: 190px;
    border-radius: 5px;
  }
`;

export const ProductInfo = styled.div`
  h4 {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }

  p {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #db4444;
  }
`;

export default ProductContainer;
