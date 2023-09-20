import React from 'react';
import ButtonContainer from './styles';

function Button({ text, className }) {
  return (
    <ButtonContainer className={className} type="button">
      {text}
    </ButtonContainer>
  );
}

export default Button;
