import React from "react";
import { useHistory } from "react-router-dom";

import {
  StreamContainer,
  DataContainer,
  Name,
  Date,
  Img,
  ImgContainer,
} from "./Styles";

const Stream = ({ id, name, timestamp, image }) => {
  const history = useHistory();

  return (
    <StreamContainer>
      <ImgContainer>
        <Img
          src={image}
          alt={name}
          onClick={() => history.push(`/live/${id}`)}
        />
      </ImgContainer>
      <DataContainer>
        <Name>{name}</Name>
        <Date>{timestamp}</Date>
      </DataContainer>
    </StreamContainer>
  );
};
export default Stream;
