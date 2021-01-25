import firebase from 'firebase';
 var firebaseConfig = {
    apiKey: "AIzaSyCAiYtTfVKecmPFboaDwB65vT-sYhGkaog",
    authDomain: "websitedb-970fc.firebaseapp.com",
    databaseURL: "https://websitedb-970fc.firebaseio.com",
    projectId: "websitedb-970fc",
    storageBucket: "websitedb-970fc.appspot.com",
    messagingSenderId: "722645547423",
    appId: "1:722645547423:web:017f0821b7ffe1b87565aa",
    measurementId: "G-FYN2YZB5TM"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
export const db = firebase.firestore()
