import styled from 'styled-components';

const ButtonCreate = styled.button`
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : '#DB4444'};
  border: ${(props) => props.border || 'none'};
  border-radius: 4px;
  color: ${(props) => props.color || '#fff'};
  display: block;
  width: ${(props) => props.width || '100%'};
  padding: 16px 0;
`;

export default ButtonCreate;
