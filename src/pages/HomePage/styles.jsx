import styled from 'styled-components';

const SectionHome = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 140px;

  aside {
    border-right: 1px solid #0000003d;
  }
  li {
    display: flex;
    position: relative;
    padding-bottom: 16px;
    padding-right: 90px;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    img {
      position: absolute;
      top: 7px;
      right: 16px;
    }
  }
  .linot {
    padding-bottom: 0;
  }
`;

export const BannerHome = styled.div`
  max-width: 890px;
`;

export default SectionHome;
