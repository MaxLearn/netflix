/* eslint-disable import/prefer-default-export */
import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyBj3zhulNJ9otDNrAZe5DieNJ_dupcPegc",
  authDomain: "netflix-clone-94209.firebaseapp.com",
  projectId: "netflix-clone-94209",
  storageBucket: "netflix-clone-94209.appspot.com",
  messagingSenderId: "1056528048681",
  appId: "1:1056528048681:web:e1f713ac3277b2d0173238",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
