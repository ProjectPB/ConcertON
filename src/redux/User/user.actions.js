import userTypes from "./user.types";

export const setUsername = (username) => ({
  type: userTypes.SET_USERNAME,
  payload: username,
});
