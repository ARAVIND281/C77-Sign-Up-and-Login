import firebase from 'firebase'
require('@firebase/firestore')


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDfiQ87tXV4kWgYHWnDg3q3I0zs1hIDVvI",
    authDomain: "book-santa-ccf95.firebaseapp.com",
    databaseURL: "https://book-santa-ccf95.firebaseio.com",
    projectId: "book-santa-ccf95",
    storageBucket: "book-santa-ccf95.appspot.com",
    messagingSenderId: "559024130826",
    appId: "1:559024130826:web:680821161f751050ebc8f3"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();