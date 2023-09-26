import React, { useRef } from 'react';
import ContainerProduct, {
  ButtonContainer,
  DivItem,
  FlashSales
} from './styles';
import ArrowRight from '../../assets/arrow-right.svg';
import Product from '../Product';
import useFetch from '../../hooks/useFetch';

const url = 'http://localhost:3000/products';
function ProductList() {
  const carousel = useRef(null);

  const { data: items } = useFetch(url);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };
  if (!items || !items.length) return null;

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
        {items &&
          items.map((item) => {
            const { id, name, price, image } = item;
            return <Product id={id} name={name} price={price} image={image} />;
          })}
      </DivItem>
    </ContainerProduct>
  );
}

export default ProductList;
