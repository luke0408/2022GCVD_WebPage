import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const projectCard = document.querySelectorAll(".project-grid > .project-card");
const projectThumbnail = document.querySelectorAll(".thumbanil");
const projectName = document.getElementsByClassName("name");
const projectTitle = document.getElementsByClassName("project-title");

const idxList = [
  0, 2, 3, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 23, 25, 28,
  29, 36, 38, 39, 41, 45, 47, 48, 49, 52, 53, 54, 57, 58,
];

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

const citiesRef = collection(db, "projects_main");

projectCard.forEach(async (el, index) => {
  const getDataQuery = query(
    citiesRef,
    where("index", "==", index),
    where("tag", "==", "UXUI&Branding")
  );
  const thumbnailSnapshot = await getDocs(getDataQuery);

  thumbnailSnapshot.forEach((doc) => {
    let x = doc.data().index;
    let i = idxList.indexOf(x);
    let thumbnail = doc.data().thumbnail;
    let name = doc.data().name;
    let title = doc.data().title;

    if (thumbnail != "" && thumbnail != undefined) {
      projectThumbnail[i].src = thumbnail;
    }
    projectCard[i].classList.add(`${x}`);
    projectCard[i].style.display = "block";
    if (doc.data().team) {
      let tx = projectName[i].innerText;
      projectName[i].innerText = tx + " " + name;
    } else {
      projectName[i].innerText = name;
    }
    projectTitle[i].innerText = title;
  });
});