import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { StreamContainer, DataContainer, Name, Date, Image } from "./Styles";

function Stream({ id, name, timestamp, image, loadStream }) {
    const history = useHistory();
    const [imgLoaded, setImgLoaded] = useState(false);

    useEffect(() => {
        if (imgLoaded) {
            loadStream();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [imgLoaded]);

    return (
        <StreamContainer style={imgLoaded ? {} : { visibility: "hidden" }}>
            <Image
                src={image}
                alt={name}
                loading="lazy"
                onClick={() => history.push(`/live/${id}`)}
                onLoad={() => setImgLoaded(true)}
            />
            <DataContainer>
                <Name>{name}</Name>
                <Date>{timestamp}</Date>
            </DataContainer>
        </StreamContainer>
    );
}
export default Stream;
