import styled from 'styled-components';

const ContainerProduct = styled.div`
  border-bottom: 1px solid #0000004b;
  .categories {
    background-color: #db4444;
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    padding: 16px 48px;
    border: none;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    margin: 0 auto;
    margin-bottom: 60px;
  }
`;

export const DivItem = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  padding-top: 40px;
  padding-bottom: 60px;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const FlashSales = styled.div`
  display: flex;
  align-items: center;
  section {
    width: 1000px;
    display: flex;
    align-items: center;
    h2 {
      font-size: 36px;
      padding-right: 87px;
    }
    span {
      padding-right: 17px;
      font-size: 32px;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  text-align: end;

  button {
    background-color: #f5f5f5;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 8px;

    img {
      padding: 5px;
    }
    &:first-child img {
      transform: rotate(180deg);
    }
  }
`;
export default ContainerProduct;
