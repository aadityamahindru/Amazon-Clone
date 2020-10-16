import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCQviXccVY1d2DlWXnsJ0TKsVUAUD7nDgw",
    authDomain: "clone-3497a.firebaseapp.com",
    databaseURL: "https://clone-3497a.firebaseio.com",
    projectId: "clone-3497a",
    storageBucket: "clone-3497a.appspot.com",
    messagingSenderId: "34551890911",
    appId: "1:34551890911:web:d79a27c15256ecc08a3a6a",
    measurementId: "G-GXWN8CD45X"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig); 
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};