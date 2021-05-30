import React from "react";
import styled from "styled-components";
import Stream from "../Streams/Stream/Stream";
import images from "../../assets/images/images";

function Streams() {
    const events = [
        {
            name: "Concert",
            img: images.concert,
            date: "11.11.1111",
        },
        {
            name: "Cooking",
            img: images.cooking,
            date: "11.11.1111",
        },
        {
            name: "Guitar",
            img: images.guitar,
            date: "11.11.1111",
        },
        {
            name: "Football",
            img: images.football,
            date: "11.11.1111",
        },
        {
            name: "DJ",
            img: images.dj,
            date: "11.11.1111",
        },
    ];

    console.log(events[0]);
    return (
        <StreamsContainer>
            {events.map((event) => (
                <Stream eventData={event} />
            ))}
        </StreamsContainer>
    );
}

const StreamsContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 10px;
    flex-wrap: wrap;
`;

export default Streams;
