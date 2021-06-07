import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
import { db } from "../../firebase";

SwiperCore.use([EffectFade, Autoplay, Pagination, Navigation]);

function Slideshow() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        db.collection("events")
            .where("important", "==", true)
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
                delay: 5000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
        >
            {events.map(({ id, data }) => (
                <SwiperSlide key={id}>
                    <Image src={data.image} />
                    <Caption>{data.name}</Caption>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    margin-bottom: -4px;
`;

const Caption = styled.span`
    position: absolute;
    outline: 1px solid;
    background-color: rgba(100, 100, 100, 0.5);
    font-size: 20px;
    padding: 20px;
    color: white;
    top: 45%;
    left: 10%;
`;

export default Slideshow;
