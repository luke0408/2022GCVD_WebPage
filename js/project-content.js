import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const banner = document.getElementsByClassName("banner")[0];
const title = document.getElementsByClassName("title")[0];
const one = document.getElementsByClassName("one");
const character_tag = document.getElementsByClassName("character-tag")[0];
const main_text = document.getElementsByClassName("main_text")[0];
const video = document.getElementById("vimeo");
const main_content = document.getElementsByClassName("main_content")[0];
const profile_box = document.getElementsByClassName("box")[1];
const profile_img = document.getElementsByClassName("profile-img");
const name = document.getElementsByClassName("name");
const engname = document.getElementsByClassName("engname");
const email = document.getElementsByClassName("email");
const phon = document.getElementsByClassName("phon");

const leftArrow = document.getElementsByClassName("left-arrow")[0];
const rightArrow = document.getElementsByClassName("right-arrow")[0];

let index = Number(window.localStorage.getItem("index"));

if (index == 0) {
  leftArrow.style.visibility = "hidden";
}

if (index == 58) {
  rightArrow.style.visibility = "hidden";
}

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

async function update(index) {
  const getDataQuery = query(citiesRef, where("index", "==", Number(index)));

  const thumbnailSnapshot = await getDocs(getDataQuery);

  thumbnailSnapshot.forEach((doc) => {
    if (doc.data().header != "" && doc.data().header != undefined){
      banner.src = doc.data().header;
    }
    title.innerText = doc.data().title;
    character_tag.innerText = doc.data().tag;
    main_text.innerText = doc.data().text;

    if (doc.data().video != "" && doc.data().video != undefined) {
      video.style.display = "block";
      video.src = doc.data().video;
    }

    if (doc.data().content != "" && doc.data().content != undefined){
      main_content.src = doc.data().content;
    }

    if (doc.data().team) {
      profile_box.style.visibility = "visible";
      one[doc.data().team_order].style.display = "block";
      one[doc.data().team_order].innerText = "_" + `${doc.data().name}`;
      profile_img[doc.data().team_order].src = doc.data().profile;
      name[doc.data().team_order].innerText = doc.data().name;
      engname[doc.data().team_order].innerText = doc.data().engname;
      email[doc.data().team_order].innerText = doc.data().email;
      phon[doc.data().team_order].innerText = doc.data().phone;
    } else {
      one[0].innerText = "_" + `${doc.data().name}`;
      profile_img[0].src = doc.data().profile;
      name[0].innerText = doc.data().name;
      engname[0].innerText = doc.data().engname;
      email[0].innerText = doc.data().email;
      phon[0].innerText = doc.data().phone;
    }
  });
}

update(index);

function next() {
  if (index != 58) {
    window.localStorage.setItem('index', Number(index = index + 1));
    // location.reload();
  }
}

function goback() {
  if (index != 0) {
    window.localStorage.setItem('index', Number(index = index - 1));
    // location.reload();
  }
}

const arrows = [leftArrow, rightArrow]

arrows.forEach((el, index) => {
  el.onclick = () => {
    if (index == 0) goback();
    else next();
  }
})
