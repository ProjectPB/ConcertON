import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const Label = styled.label`
  color: lightgray;
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  outline: 1px solid white;
  border-radius: 5px;
  border: none;
  padding: 10px;
  width: 100%;
  margin-top: 5px;
  background-color: transparent;
  color: white;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;
