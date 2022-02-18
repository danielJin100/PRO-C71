import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCcySxKUPAPDI7s_2rzqY-ReAovUbfDvE8",
  authDomain: "pro-c71-3c1cd.firebaseapp.com",
  projectId: "pro-c71-3c1cd",
  storageBucket: "pro-c71-3c1cd.appspot.com",
  messagingSenderId: "360836285378",
  appId: "1:360836285378:web:873b65c08838d7958f8c5b"
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

