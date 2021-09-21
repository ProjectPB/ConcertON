import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LogoText = styled.h1`
  display: block;
  font-size: 24px;
  color: white;
  cursor: pointer;
  width: fit-content;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  :hover {
    opacity: 0.7;
    transition: 0.2s;
  }
`;

export const LogoSpan = styled.span`
  background-color: #8b0000;
  border-radius: 5px;
  padding: 0 2px;
  margin: 2px;
`;
