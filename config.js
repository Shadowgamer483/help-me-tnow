
import firebase from 'firebase'
require('@firebase/firestore')


var firebaseConfig = {
    apiKey: "AIzaSyCOrLxtbq7DRjMYs2XjvbR7EEVaBsu70Io",
    authDomain: "book-santa-e5925.firebaseapp.com",
    databaseURL: "https://book-santa-e5925.firebaseio.com",
    projectId: "book-santa-e5925",
    storageBucket: "book-santa-e5925.appspot.com",
    messagingSenderId: "1035681527692",
    appId: "1:1035681527692:web:e682547dac25c09008c8a9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


export default firebase.firestore();

