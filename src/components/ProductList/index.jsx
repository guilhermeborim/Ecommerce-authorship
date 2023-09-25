import React, { useEffect, useRef, useState } from 'react';
import ContainerProduct, {
  ButtonContainer,
  ContainerItem,
  DivItem,
  FlashSales
} from './styles';
import ArrowRight from '../../assets/arrow-right.svg';
import Product from '../Product';

function ProductList() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then((response) => response.json())
      .then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  if (!data || !data.length) return null;

  return (
    <ContainerProduct className="container">
      <FlashSales>
        <section>
          <h2>Flash Sales</h2>
        </section>
        <ButtonContainer>
          <button type="button" onClick={handleLeftClick}>
            <img src={ArrowRight} alt="" />
          </button>
          <button type="button" onClick={handleRightClick}>
            <img src={ArrowRight} alt="" />
          </button>
        </ButtonContainer>
      </FlashSales>
      <DivItem ref={carousel}>
        {data.map((item) => {
          const { id, name, price, image } = item;
          return (
            <ContainerItem key={id}>
              <div>
                <img src={image} alt="" />
              </div>
              <div>
                <span>{name}</span>
                <span>{price}</span>
              </div>
            </ContainerItem>
          );
        })}
      </DivItem>
      <Product />
    </ContainerProduct>
  );
}

export default ProductList;
