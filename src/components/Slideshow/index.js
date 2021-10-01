import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/core";
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import {
  ImageContainer,
  Image,
  CaptionContainer,
  Caption,
  Title,
  Date,
} from "./Styles";
import { fetchSlideshowStreamsStart } from "../../redux/Streams/streams.actions";

SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

const mapState = ({ streams }) => ({
  slides: streams.slideshowStreams,
});

const Slideshow = () => {
  const { slides } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSlideshowStreamsStart());
  }, [dispatch]);

  return (
    <Swiper
      loop={true}
      effect={"fade"}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
    >
      {slides?.map(({ id, data }) => (
        <SwiperSlide key={id}>
          <ImageContainer>
            <Image src={data.image} />
          </ImageContainer>
          <CaptionContainer>
            <Caption>
              <Title>{data.name}</Title>
              <Date>{data.timestamp.toDate().toDateString()}</Date>
            </Caption>
          </CaptionContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slideshow;
