import React from 'react';
import ProductContainer, { ImgProduct, ProductInfo } from './styles';

function Product({ image, name, price, id }) {
  return (
    <ProductContainer id={id}>
      <ImgProduct>
        <img src={image} alt="" />
      </ImgProduct>
      <ProductInfo>
        <h4>{name}</h4>
        <p>{price}</p>
      </ProductInfo>
    </ProductContainer>
  );
}

export default Product;
