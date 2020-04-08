import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAUJuWVpCsNm-HA0t2BczGuwZ0-mYlYp5c",
    authDomain: "poketrumps-ea662.firebaseapp.com",
    databaseURL: "https://poketrumps-ea662.firebaseio.com",
    projectId: "poketrumps-ea662",
    storageBucket: "poketrumps-ea662.appspot.com",
    messagingSenderId: "752368786874",
    appId: "1:752368786874:web:d7f417400ef98561145183",
    measurementId: "G-B3C4C08ETK"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export const firestore = firebase.firestore();

  export default firebase; 