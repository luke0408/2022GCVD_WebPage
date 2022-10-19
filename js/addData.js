import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getFirestore,
  setDoc,
  collection,
  getDocs,
  doc,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const btn = document.getElementsByTagName("button")[0];

const firebaseConfig = {
  apiKey: "AIzaSyCWbw_Dj0A3nm73xVZEeFQ5XlRSbE4SDnM",
  authDomain: "gcvd-62bf1.firebaseapp.com",
  projectId: "gcvd-62bf1",
  storageBucket: "gcvd-62bf1.appspot.com",
  messagingSenderId: "520644330731",
  appId: "1:520644330731:web:203b7fc8a68728f4f32aae",
  measurementId: "G-NBJ35L36PD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const docData = {
  index: 0,
  name: "",
  student_number: 123,
  tag: "",
  thumbnail: "https://drive.google.com/uc?export=view&id=",
  header: "https://drive.google.com/uc?export=view&id=",
  content: "https://drive.google.com/uc?export=view&id=",
  profile: "https://drive.google.com/uc?export=view&id=",
  video: "",
  gif: "",
  phon: "",
  email: "",
  title: "",
  sub_tilte: "",
  text: "",
  team: false,
};

function addDate() {
  const target = doc(db, "projects_main", "강민서");
  setDoc(target, docData);
}

btn.onclick = () => {
  addDate();
  console.log("ok");
};
