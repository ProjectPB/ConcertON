import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
    },
    reducers: {
        setUsername: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setUsername } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
