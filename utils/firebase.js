import firebase from '@firebase/app';
import '@firebase/database';
var firebaseConfig = {
    apiKey: "AIzaSyCay3z3DLTtdCSfK-CPHRjvPH4ZFLSeREk",
    authDomain: "todosample-4d3d4.firebaseapp.com",
    databaseURL: "https://todosample-4d3d4.firebaseio.com",
    projectId: "todosample-4d3d4",
    storageBucket: "todosample-4d3d4.appspot.com",
    messagingSenderId: "133412349103",
    appId: "1:133412349103:web:f045a701c7ba5d6617a05a",
    measurementId: "G-BD6YGB0TRF"
  };
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    }
  //firebase.analytics();

  export default firebase;