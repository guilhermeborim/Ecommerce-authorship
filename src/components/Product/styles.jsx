import styled from 'styled-components';

const ProductContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  section {
  }

  img {
    max-width: 150px;
    border: 1px solid #f5f5f5;
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
