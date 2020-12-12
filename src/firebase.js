import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPS6_8zB5gmbM2geI6Qzgc2-lYZuMwcBs",
    authDomain: "slack-84953.firebaseapp.com",
    projectId: "slack-84953",
    storageBucket: "slack-84953.appspot.com",
    messagingSenderId: "617519088169",
    appId: "1:617519088169:web:df826ddad368413070d238",
    measurementId: "G-68V5P7N7M9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db; 