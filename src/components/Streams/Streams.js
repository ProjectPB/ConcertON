import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stream from "../Streams/Stream/Stream";
import { db } from "../../firebase";

function Streams() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        db.collection("events")
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
        <StreamsContainer id="watch">
            {events.map(({ id, data }) => (
                <Stream
                    key={id}
                    id={id}
                    name={data.name}
                    timestamp={data.timestamp.toDate().toDateString()}
                    image={data.image}
                />
            ))}
        </StreamsContainer>
    );
}

const StreamsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media (max-width: 768px) {
        flex-direction: column;
        margin-right: 40px;
    }
`;

export default Streams;
