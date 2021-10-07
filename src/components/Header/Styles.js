import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1;
  width: 100%;
  height: 60px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const LeftContainer = styled.div``;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: -20px;

  a {
    text-decoration: none;
  }
`;

export const Typography = styled.p`
  display: block;
  color: white;
  font-size: 24px;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  margin-right: 20px;

  :hover {
    color: #8b0000;
    transition: 400ms;
  }

  @media (max-width: 768px) {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const BorderedTypography = styled(Typography)`
  border: 1px solid white;
  padding: 5px 10px;
  border-radius: 5px;
  :hover {
    border: 1px solid #8b0000;
  }
`;
