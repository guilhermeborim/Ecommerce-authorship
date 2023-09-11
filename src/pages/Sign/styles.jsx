import styled from 'styled-components';

const SectionCreate = styled.section`
  display: flex;
  align-items: center;
  padding: 60px 0 140px 0;
`;

export default SectionCreate;

export const DivCreateForm = styled.div`
  width: 371px;
  height: 530px;
  margin-left: 360px;
  h3 {
    font-size: 36px;
    font-weight: 500;
    padding-bottom: 24px;
  }
  p {
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 48px;
  }

  div {
    margin-bottom: 40px;
  }

  button {
    margin-bottom: 16px;
    font-size: 16px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    img {
      padding-right: 16px;
    }
  }
  h4 {
    padding-top: 16px;
    color: #000;
    font-weight: 400;
    font-size: 16px;
    text-align: center;

    span {
      padding-left: 16px;
      a {
        color: #4d4d4d;
        text-decoration: underline;
      }
    }
  }
`;
