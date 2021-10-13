import firebase from "firebase/compat/app";
import "firebase/compat/storage";
const config = {
  apiKey: "AIzaSyA7Z6QmRKADSt9O-RztQZ4X4HBd1gpNVIU",
  authDomain: "frontend-ceafe.firebaseapp.com",
  projectId: "frontend-ceafe",
  storageBucket: "frontend-ceafe.appspot.com",
  messagingSenderId: "267367955809",
  appId: "1:267367955809:web:19965869e6cc3eaa951920",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}
const storage = firebase.storage();

export { storage };
