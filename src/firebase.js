import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDQ5OY5_R0_TdWizjgxTNnF59PFPRiRWs4",
  authDomain: "linkedin-clone-6b86a.firebaseapp.com",
  projectId: "linkedin-clone-6b86a",
  storageBucket: "linkedin-clone-6b86a.appspot.com",
  messagingSenderId: "622249760658",
  appId: "1:622249760658:web:5d8f7a779196a73595534b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
