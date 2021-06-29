import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        slideshowLoaded: false,
        streamsLoaded: false,
        sponsorsLoaded: false,
    },

    reducers: {
        loadSponsors: (state, action) => {
            state.sponsorsLoaded = action.payload;
        },
        loadStreams: (state, action) => {
            state.streamsLoaded = action.payload;
        },
        loadSlideshow: (state, action) => {
            state.slideshowLoaded = action.payload;
        },
    },
});

export const { loadSponsors, loadStreams, loadSlideshow } =
    loadingSlice.actions;

export const selectLoading = (state) => state.loading;

export default loadingSlice.reducer;
