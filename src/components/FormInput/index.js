import React from "react";
import { InputContainer, Input, Label } from "./Styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <Input onChange={handleChange} {...otherProps} />
    </InputContainer>
  );
};

export default FormInput;
