import React from 'react';
import InputComponent from './styles';

function Input({ type, placeholder, value, onChange }) {
  return (
    <InputComponent
      type={type}
      placeholder={placeholder}
      required
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
