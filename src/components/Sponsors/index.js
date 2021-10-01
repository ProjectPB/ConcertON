import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchSponsorsStart } from "../../redux/Streams/streams.actions";
import {
  SponsorsContainer,
  Typography,
  ImagesContainer,
  Image,
} from "./Styles";

const mapState = ({ streams }) => ({
  sponsors: streams.sponsors,
});

const Sponsors = () => {
  const dispatch = useDispatch();
  const { sponsors } = useSelector(mapState);

  useEffect(() => {
    dispatch(fetchSponsorsStart());
  }, [dispatch]);

  return (
    <SponsorsContainer id="sponsors">
      <Typography>Sponsors</Typography>
      <ImagesContainer>
        {sponsors.map(({ id, data }) => (
          <Image key={id} src={data.url} alt="" />
        ))}
      </ImagesContainer>
    </SponsorsContainer>
  );
};
export default Sponsors;
