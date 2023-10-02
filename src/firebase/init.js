import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyB97MyVU_JgszR745a4-AbNDnyWU-0PJyY",
  authDomain: "freelancer-app-63655.firebaseapp.com",
  projectId: "freelancer-app-63655",
  storageBucket: "freelancer-app-63655.appspot.com",
  messagingSenderId: "217282826345",
  appId: "1:217282826345:web:7e802af7d3a3773719d2f8",
};

const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);
const auth = getAuth();
const storage = getStorage(fireApp);

export { fireApp, auth, db, storage };
