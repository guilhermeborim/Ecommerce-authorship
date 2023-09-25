import React from 'react';
import ProductContainer, { ProductInfo } from './styles';

function Product() {
  return (
    <ProductContainer>
      <div>
        <img
          src="https://images.kabum.com.br/produtos/fotos/114027/headset-sem-fio-gamer-hyperx-cloud-stinger-core-7-1-hhss1c-ba-bk-g_1597936019_gg.jpg"
          alt=""
        />
      </div>
      <ProductInfo>
        <h4>Air Cooler Rise Mode</h4>
        <p>$88.99</p>
      </ProductInfo>
    </ProductContainer>
  );
}

export default Product;
