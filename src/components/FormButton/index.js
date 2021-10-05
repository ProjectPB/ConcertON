import React from "react";
import { Button } from "./Styles";

const FormButton = ({ children, primary, ...otherProps }) => {
  return <Button {...otherProps}>{children}</Button>;
};

export default FormButton;
