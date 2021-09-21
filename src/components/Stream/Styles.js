import styled from "styled-components";

export const StreamContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: calc(50% - 60px);
  margin: 30px;
  height: fit-content;

  @media (max-width: 768px) {
    flex-direction: column;
    width: calc(100% - 40px);
    margin: 20px;
  }
`;

export const ImgContainer = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
  :hover {
    transform: scale(1.1);
    transition: 0.3s ease-in;
  }
`;

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 10px;
  background-color: rgba(139, 0, 0, 0.25);
  backdrop-filter: blur(2px);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const Name = styled.h1`
  color: white;
  display: block;
  font-size: 26px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;

export const Date = styled.h2`
  display: block;
  color: lightgray;
  font-size: 16px;
  font-weight: 400;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;
