import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

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

import { db } from "../../firebase/utils";
import { loadSlideshow } from "./../../redux/Loading/loading.actions";

SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

function Slideshow() {
  const [events, setEvents] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loaded) {
      dispatch(loadSlideshow(true));
    }
  }, [loaded, dispatch]);

  useEffect(() => {
    db.collection("events")
      .limit(3)
      .get()
      .then((querySnapshot) => {
        setEvents(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);

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
      {events.map(({ id, data }) => (
        <SwiperSlide key={id}>
          <ImageContainer>
            <Image src={data.image} onLoad={() => setLoaded(true)} />
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
}

export default Slideshow;
