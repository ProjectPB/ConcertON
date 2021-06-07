import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDy4MynvYILEIYz19_T6hge3avMvN8mQZI",
    authDomain: "pb-eventstream.firebaseapp.com",
    projectId: "pb-eventstream",
    storageBucket: "pb-eventstream.appspot.com",
    messagingSenderId: "743108808472",
    appId: "1:743108808472:web:2cc53845f4c375cfff186d",
    measurementId: "G-BJCK2Z297L",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
