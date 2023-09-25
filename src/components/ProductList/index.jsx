import React, { useEffect, useRef, useState } from 'react';
import ContainerProduct, {
  ButtonContainer,
  ContainerItem,
  DivItem
} from './styles';
import ArrowRight from '../../assets/arrow-right.svg';

function ProductList() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);
  useEffect(() => {
    fetch('http://localhost:3000/static/db.json')
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
      <ButtonContainer>
        <button type="button" onClick={handleLeftClick}>
          <img src={ArrowRight} alt="" />
        </button>
        <button type="button" onClick={handleRightClick}>
          <img src={ArrowRight} alt="" />
        </button>
      </ButtonContainer>
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
    </ContainerProduct>
  );
}

export default ProductList;
