import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCieEWuMmW4WlG4CRbIZUQKU84J3x-8qQ4",
  authDomain: "exampurevents-3c9ee.firebaseapp.com",
  projectId: "exampurevents-3c9ee",
  storageBucket: "exampurevents-3c9ee.appspot.com",
  messagingSenderId: "1095731922359",
  appId: "1:1095731922359:web:7dded1c298f8947c9b1432",
  measurementId: "G-FR0RNMWJVP"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export default firebase;
