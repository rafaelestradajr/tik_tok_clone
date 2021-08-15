import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAqdwCbSJhUIJjT_BpItSfFNrJWGEcR7L8",
    authDomain: "tiktok-clone-bdda4.firebaseapp.com",
    projectId: "tiktok-clone-bdda4",
    storageBucket: "tiktok-clone-bdda4.appspot.com",
    messagingSenderId: "964084155488",
    appId: "1:964084155488:web:d294adfdf367e5cfdeaf05",
    measurementId: "G-XEVQ24N6Q4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  
  export default db;
