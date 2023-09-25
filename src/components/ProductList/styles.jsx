import styled from 'styled-components';

const ContainerProduct = styled.div``;

export const DivItem = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ContainerItem = styled.div`
  background-color: white;
  margin: 10px;
  padding: 10px;
  width: 280px;
  border-radius: 16px;
  flex: none;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
