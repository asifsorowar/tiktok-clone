import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBTYeSlloEVtFeIlnsc8dwsHOVKKoQhRNo",
  authDomain: "tiktok-clone-2b6aa.firebaseapp.com",
  databaseURL: "https://tiktok-clone-2b6aa.firebaseio.com",
  projectId: "tiktok-clone-2b6aa",
  storageBucket: "tiktok-clone-2b6aa.appspot.com",
  messagingSenderId: "139357766975",
  appId: "1:139357766975:web:4efabc39d89a4fc8f23f8a",
  measurementId: "G-KL3CVEXLV2",
});

const db = firebaseApp.firestore();

export default db;
