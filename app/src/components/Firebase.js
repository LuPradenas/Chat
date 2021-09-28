import  firebase from 'firebase';
import "@firebase/firestore";

const config = {
  apiKey: "AIzaSyA8-mEUhiPZWdOwECyskCJVy_R7OomrUwY",
  authDomain: "chat-react-fdc89.firebaseapp.com",
  databaseURL: "https://chat-react-fdc89-default-rtdb.firebaseio.com",
  projectId: "chat-react-fdc89",
  storageBucket: "chat-react-fdc89.appspot.com",
  messagingSenderId: "26462542684",
  appId: "1:26462542684:web:cc1528d93c3f9e0023ff99",
  measurementId: "G-HH76REVGWB"
};

  firebase.initializeApp(config);
  export const db= firebase.firestore();