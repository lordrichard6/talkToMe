import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyB2uHEHMFIK2S1ZhU99UHC6U_ETZTQrcYg",
  authDomain: "talktome-reizinho1.firebaseapp.com",
  databaseURL: "https://talktome-reizinho1.firebaseio.com",
  projectId: "talktome-reizinho1",
  storageBucket: "talktome-reizinho1.appspot.com",
  messagingSenderId: "716014166195",
  appId: "1:716014166195:web:1fd13069577e91cf9690c6",
  measurementId: "G-P5YS5NMBS7"

  };

  firebase.initializeApp(config);
  export const auth = firebase.auth;
  export const db = firebase.database();