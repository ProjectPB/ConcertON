import React from "react";
import { useHistory } from "react-router-dom";
import { MusicNoteOutlined } from "@material-ui/icons";
import {
  StreamContainer,
  DataContainer,
  Name,
  Img,
  ImgContainer,
  DetailsContainer,
  DetailTypography,
  GenreContainer,
} from "./Styles";

const Stream = ({ id, name, timestamp, image, genre }) => {
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
        <DetailsContainer>
          <DetailTypography>{timestamp}</DetailTypography>
          <GenreContainer>
            <MusicNoteOutlined />
            <DetailTypography>{genre}</DetailTypography>
          </GenreContainer>
        </DetailsContainer>
      </DataContainer>
    </StreamContainer>
  );
};
export default Stream;
