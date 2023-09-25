import React from 'react';
import BannerHomePage from '../../assets/banner-homepage.png';
import SectionHome, { BannerHome } from './styles';
import IconDropDown from '../../assets/icon-dropdown.svg';
import ProductList from '../../components/ProductList';

function HomePage() {
  return (
    <>
      <SectionHome className="container">
        <aside>
          <nav>
            <ul>
              <li>
                Woman Fashion
                <img src={IconDropDown} alt="" />
              </li>
              <li>
                Men Fashion
                <img src={IconDropDown} alt="" />
              </li>
              <li>Electronics Fashion</li>
              <li>Home & Lifestyle</li>
              <li>Medicine</li>
              <li>Sports & Outdoor</li>
              <li>Baby & Toys</li>
              <li>Groceries & Pets</li>
              <li className="linot">Health & Beauty</li>
            </ul>
          </nav>
        </aside>
        <BannerHome>
          <img src={BannerHomePage} alt="" />
        </BannerHome>
      </SectionHome>
      <section>
        <ProductList />
      </section>
    </>
  );
}

export default HomePage;
