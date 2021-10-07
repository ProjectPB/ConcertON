import React from "react";
import { Button } from "./Styles";

const FormButton = ({ children, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default FormButton;
