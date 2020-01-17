import firebase from 'firebase';
const config = {
  apiKey: "AIzaSyBMjovcrxfBi4rVMkGqqmlrbNmnIq-OBfY",
  authDomain: "twinsies-1420f.firebaseapp.com",
  databaseURL: "https://twinsies-1420f.firebaseio.com",
  projectId: "twinsies-1420f",
  storageBucket: "twinsies-1420f.appspot.com",
  messagingSenderId: "1014432459577",
  appId: "1:1014432459577:web:36c5ac83364deb8b0056e8",
  measurementId: "G-PE2NTMWVCR"
};
firebase.initializeApp(config);
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const firebaseAuth = firebase.auth;
export const db = firebase.firestore().settings({ timestampsInSnapshots: true });
