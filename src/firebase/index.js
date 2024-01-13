import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxfsbTTpSYZdMsBwgcIo7fIi535aS2rEQ",
  authDomain: "northside-f277e.firebaseapp.com",
  projectId: "northside-f277e",
  storageBucket: "northside-f277e.appspot.com",
  databaseURL: "gs://northside-f277e.appspot.com",
  messagingSenderId: "941814780333",
  appId: "1:941814780333:web:c2fb9ff53a322fc54c1124",
  measurementId: "G-MGN5NVEZ17",
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
