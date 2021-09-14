import firebase from "firebase/app";
import { firebaseConfig } from "./config";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const storage = firebase.storage();
