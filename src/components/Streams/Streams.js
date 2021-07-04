import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Stream from "../Streams/Stream/Stream";
import { db } from "../../firebase";
import { useDispatch } from "react-redux";
import { loadStreams } from "../../redux/loadingSlice";

function Streams() {
    const dispatch = useDispatch();
    const [events, setEvents] = useState([]);
    const [streamsLoaded, setStreamsLoaded] = useState(0);

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

    useEffect(() => {
        if (streamsLoaded === events.length) {
            dispatch(loadStreams(true));
        }
    }, [streamsLoaded, dispatch, events.length]);

    const loadSingleStream = () => {
        setStreamsLoaded((counter) => (counter += 1));
    };

    return (
        <StreamsContainer id="watch">
            {events.map(({ id, data }) => (
                <Stream
                    loadStream={loadSingleStream}
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
