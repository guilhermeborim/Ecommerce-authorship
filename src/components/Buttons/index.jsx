import React from 'react';
import ButtonCreate from './styles';

function Buttons({ width, border, children, backgroundcolor, color }) {
  return (
    <ButtonCreate
      width={width}
      border={border}
      backgroundcolor={backgroundcolor}
      color={color}
      type="button"
    >
      {children}
    </ButtonCreate>
  );
}

export default Buttons;
