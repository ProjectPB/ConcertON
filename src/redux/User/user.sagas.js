import { takeLatest, call, all, put } from "redux-saga/effects";
import { auth } from "./../../firebase/utils";
import { handleUserProfile, getCurrentUser } from "./user.helpers";
import userTypes from "./user.types";
import {
  signInSuccess,
  signOutUserSuccess,
  handleSignInErrors,
  handleSignUpErrors,
} from "./user.actions";

export function* getSnapshotFromUserAuth(user, additionalData = {}) {
  try {
    const userRef = yield call(handleUserProfile, {
      userAuth: user,
      additionalData,
    });
    const snapshot = yield userRef.get();
    yield put(
      signInSuccess({
        id: snapshot.id,
        ...snapshot.data(),
      })
    );
  } catch (err) {
    // console.log(err);
  }
}

export function* emailSignIn({ payload: { email, password } }) {
  const err = [];
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getSnapshotFromUserAuth(user);
  } catch (error) {
    err.push(error.message);
    yield put(handleSignInErrors(err));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(userTypes.EMAIL_SIGN_IN_START, emailSignIn);
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getSnapshotFromUserAuth(userAuth);
  } catch (err) {
    // console.log(err);
  }
}

export function* onCheckUserSession() {
  yield takeLatest(userTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutUserSuccess());
  } catch (err) {
    // console.log(err);
  }
}

export function* onSignOutUserStart() {
  yield takeLatest(userTypes.SIGN_OUT_USER_START, signOutUser);
}

export function* signUpUser({
  payload: { displayName, email, password, confirmPassword },
}) {
  const err = [];
  if (displayName.length > 16 || displayName.length < 4) {
    err.push("Invalid Full name (4-16 characters)");
    yield put(handleSignUpErrors(err));
  }
  if (!email) {
    err.push("Invalid email");
    yield put(handleSignUpErrors(err));
  }
  if (password !== confirmPassword) {
    err.push("Passwords do not match");
    yield put(handleSignUpErrors(err));
  }
  if (!password || password.length < 6) {
    err.push("Password too short (Min 6 characters)");
    yield put(handleSignUpErrors(err));
  }
  try {
    if (err.length === 0) {
      const { user } = yield auth.createUserWithEmailAndPassword(
        email,
        password
      );
      const additionalData = { displayName };
      yield getSnapshotFromUserAuth(user, additionalData);
    }
  } catch (error) {
    err.push(error.message);
    yield put(handleSignUpErrors(err));
  }
}

export function* onSignUpUserStart() {
  yield takeLatest(userTypes.SIGN_UP_USER_START, signUpUser);
}

export default function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutUserStart),
    call(onSignUpUserStart),
  ]);
}
