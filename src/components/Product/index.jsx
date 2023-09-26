import React, { useState } from 'react';
import ProductContainer, {
  ProductInfo,
  ProductPrice,
  ImgProduct,
  ProductDiscount,
  ButtonProduct
} from './styles';
import Wishlist from '../../assets/Wishlist.svg';
import Eye from '../../assets/eye.svg';
import Star from '../../assets/favorite-start.svg';

function Product({ image, name, price, discount }) {
  const [buttonHover, setButtonHover] = useState(false);
  const handleMouseEnter = () => {
    setButtonHover(true);
  };
  const handleMouseLeave = () => {
    setButtonHover(false);
  };

  return (
    <ProductContainer>
      <ProductDiscount>
        <div>
          <span>-40%</span>
        </div>
        <div>
          <img src={Wishlist} alt="" />
          <img src={Eye} alt="" />
        </div>
      </ProductDiscount>
      <ImgProduct
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="" />
        <ButtonProduct>
          {buttonHover && (
            <button type="button" className="button">
              Add To Cart
            </button>
          )}
        </ButtonProduct>
      </ImgProduct>
      <ProductInfo>
        <h4>{name}</h4>
        <ProductPrice>
          <p>{price}</p>
          <span>{discount}</span>
        </ProductPrice>
        <img src={Star} alt="" />
      </ProductInfo>
    </ProductContainer>
  );
}

export default Product;
