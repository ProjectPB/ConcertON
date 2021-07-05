import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { loadSponsors } from "../../redux/loadingSlice";
import {
    SponsorsContainer,
    Typography,
    ImagesContainer,
    Image,
} from "./Styles";

function Sponsors() {
    const [images, setImages] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (loaded) {
            dispatch(loadSponsors(true));
        }
    }, [loaded, dispatch]);

    useEffect(() => {
        db.collection("sponsors")
            .get()
            .then((querySnapshot) =>
                setImages(
                    querySnapshot.docs.map((doc) => ({
                        id: doc.id,
                        data: doc.data(),
                    }))
                )
            );
    }, []);

    return (
        <SponsorsContainer
            id="sponsors"
            style={loaded ? {} : { visibility: "hidden" }}
        >
            <Typography>Sponsors</Typography>
            <ImagesContainer>
                {images.map(({ id, data }) => (
                    <Image
                        key={id}
                        src={data.url}
                        alt=""
                        onLoad={() => setLoaded(true)}
                    />
                ))}
            </ImagesContainer>
        </SponsorsContainer>
    );
}
export default Sponsors;
