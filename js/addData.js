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
  index: 58,	team: false,	first: "ㅎ",	name: "한서경",	engname: "Han Seogyeong",	student_number: 201736899,	tag: "UXUI&Branding",				profile: "https://drive.google.com/uc?export=view&id=1oLOj24-kGtsndjznUHR5JG0obq4FzPik",		phone:"",	email: "haneden.999@gmail.com",	title: "아워오브젝트",	sub_tilte: "지속가능한 삶을 지향하는 라이프스타일 브랜드",	text: "[보다 오래, 함께 - 우리가 사랑할 오브젝트] 아워오브젝트는 지속가능한 삶을 지향하는 라이프스타일 브랜드입니다. 지속가능성은 우리 모두의 삶의 방식으로 자리잡 아갈 뉴노멀 라이프스타일입니다. 아워오브젝트는 보다 오래 함께 하는 삶을 통해 나와 사랑하는 사람들, 지구 모든 존재의 내일을 만들어갑니다. 실용적이고 견고한 오브젝트를 통해 가치를 실현하며, 재미있는 시각으로 세상의 다양한 존재들을 탐색해 사랑스러운 스토리를 더합니다. 일상 한켠에서 오랜 시간을 함께하며 느끼는 따뜻함, 애착의 경험은 개인의 삶에서 소중한 의미를 찾게 돕고 나아가 우리 모두의 행복한 내일을 만들어갑니다.",
};

function addDate() {
  const target = doc(db, "projects_main", docData.name);
  setDoc(target, docData);
}

btn.onclick = () => {
  addDate();
  console.log(docData);
};
