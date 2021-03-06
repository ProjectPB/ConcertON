import userTypes from "./user.types";

const INITIAL_STATE = {
  currentUser: null,
  signUpErrors: [],
  signInErrors: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        userErr: [],
      };
    case userTypes.SIGN_UP_ERRORS:
      return {
        ...state,
        signUpErrors: action.payload,
      };
    case userTypes.SIGN_IN_ERRORS:
      return {
        ...state,
        signInErrors: action.payload,
      };
    case userTypes.RESET_USER_STATE:
    case userTypes.SIGN_OUT_USER_SUCCESS:
      return {
        ...state,
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default userReducer;
