import styled from 'styled-components';

const ProductContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: 270px;
  height: 350px;
  border-radius: 16px;
  flex: none;
  margin-right: 30px;
`;

export const ProductPrice = styled.div`
  display: inline-flex;
  padding-top: 8px;
  p {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    color: #db4444;
    padding-right: 12px;
  }
  span {
    text-decoration: line-through;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #000;
    opacity: 0.5;
    font-weight: 600;
  }
`;

export const ProductInfo = styled.div`
  padding-top: 16px;
  h4 {
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
  }
  img {
    margin-top: 8px;
  }
`;

export default ProductContainer;

export const ProductDiscount = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 12px 0 12px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  span {
    color: white;
    background-color: #db4444;
    padding: 4px 12px;
    border-radius: 4px;
  }
`;

export const ImgProduct = styled.div`
  img {
    width: 172px;
    margin: 0 auto;
  }
`;

export const ButtonProduct = styled.div`
  .button {
    width: 100%;
    background-color: black;
    border: none;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 8px 0;
    border-radius: 0 0 4px 4px;
    cursor: pointer;
  }
`;
