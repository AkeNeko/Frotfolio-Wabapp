import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC3Us8aduA1-ycDdyyZiBdOyofQ6l9jWdA",
  authDomain: "my-projects-2021-add40.firebaseapp.com",
  projectId: "my-projects-2021-add40",
  storageBucket: "my-projects-2021-add40.appspot.com",
  messagingSenderId: "317811412717",
  appId: "1:317811412717:web:0bacdc152588c5f04746e4",
  measurementId: "G-7HT0SC8DLY"
};


const app = initializeApp(firebaseConfig);
const db = getAnalytics(app);

export default db;