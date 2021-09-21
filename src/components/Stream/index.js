import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import {
  StreamContainer,
  DataContainer,
  Name,
  Date,
  Img,
  ImgContainer,
} from "./Styles";

function Stream({ id, name, timestamp, image, loadStream }) {
  const history = useHistory();
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    if (imgLoaded) {
      loadStream();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgLoaded]);

  return (
    <StreamContainer style={imgLoaded ? {} : { visibility: "hidden" }}>
      <ImgContainer>
        <Img
          src={image}
          alt={name}
          onClick={() => history.push(`/live/${id}`)}
          onLoad={() => setImgLoaded(true)}
        />
      </ImgContainer>
      <DataContainer>
        <Name>{name}</Name>
        <Date>{timestamp}</Date>
      </DataContainer>
    </StreamContainer>
  );
}
export default Stream;
