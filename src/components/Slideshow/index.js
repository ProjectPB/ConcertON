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
import { loadSlideshow } from "./../../redux/Loading/loading.actions";
import { setSlideshowStreams } from "../../redux/Streams/streams.actions";
import { fetchSlideshowStreams } from "../../redux/Streams/streams.helpers";

SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

const mapState = ({ streams, loading }) => ({
  slides: streams.slideshowStreams,
  loaded: loading.slideshowLoaded,
});

const Slideshow = () => {
  const { slides, loaded } = useSelector(mapState);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getSlideshowData() {
      const slideshowData = await fetchSlideshowStreams();
      dispatch(setSlideshowStreams(slideshowData));
      dispatch(loadSlideshow(true));
    }

    slides.length === 0 && getSlideshowData();
  }, [dispatch, slides.length]);

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
      style={loaded ? {} : { visibility: "hidden" }}
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
