import firebase from 'firebase';
import 'firebase/firebase-firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCFnR6ZGR0T6iUBI7i3FB8I2EMnB2ieH2E",
    authDomain: "covid-form-27ee0.firebaseapp.com",
    projectId: "covid-form-27ee0",
    storageBucket: "covid-form-27ee0.appspot.com",
    messagingSenderId: "308833749894",
    appId: "1:308833749894:web:a625260f95e7c3bbcffa07"
  };
  // Initialize Firebase
  if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
  }

  export const db=firebase.firestore();
