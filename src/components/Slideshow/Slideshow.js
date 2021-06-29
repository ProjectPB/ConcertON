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
import { loadSlideshow } from "../../redux/loadingSlice";
import { useDispatch } from "react-redux";

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
                        <Image
                            src={data.image}
                            onLoad={() => setLoaded(true)}
                        />
                    </ImageContainer>
                    <CaptionContainer>
                        <Caption>
                            <Title>{data.name}</Title>
                            <Date>
                                {data.timestamp.toDate().toDateString()}
                            </Date>
                        </Caption>
                    </CaptionContainer>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

const ImageContainer = styled.div`
    -webkit-box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    -moz-box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    box-shadow: inset 0px -10px 30px 40px rgba(0, 0, 0, 1);
    position: relative;
    width: 100%;
    height: 90vh;
    @media (max-width: 768px) {
        height: 55vh;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
    object-fit: cover;
    z-index: -1;
`;

const CaptionContainer = styled.div`
    top: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
`;

const Caption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.h1`
    color: white;
    text-align: center;
    width: 80%;
    font-size: 50px;
    margin-bottom: 10px;
    @media (max-width: 768px) {
        font-size: 25px;
        width: 70%;
    }
`;
const Date = styled.h2`
    color: white;
    font-size: 30px;
    font-weight: 300;
    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export default Slideshow;
