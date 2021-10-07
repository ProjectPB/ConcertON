import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  min-width: 100px;
  padding: 12px 26px;
  border: ${(props) =>
    props.primary ? "1px solid #8b0000" : "1px solid white"};
  margin: -1px;
  border-radius: 5px;
  background-color: ${(props) => (props.primary ? "#8b0000" : "transparent")};
  color: white;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;
