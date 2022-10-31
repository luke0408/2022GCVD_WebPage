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
  index: 21,	team: true,	first: "ㅇ",	name: "이소연",	engname: "Lee Soyeon",	student_number: 201836558,	tag: "UXUI&Branding",	thumbnail: "https://drive.google.com/uc?export=view&id=1fJ3MsK0LGy3RNQYmZ7FnRiysPgDRE-YE",	header: "https://drive.google.com/uc?export=view&id=1ysy8Rsrnxb89qJL61PEAQhFaILbwKqOk",	content: "https://drive.google.com/uc?export=view&id=17FR4tqV3BSWRm2Bibd6Z8mUKSD-TaAVk",	profile: "https://drive.google.com/uc?export=view&id=10HfzxmnhX6O8ByeTg3D07TnrHEC94Pkw",		phone: "010-2741-1382",	email: "owo22550@gmail.com",	title: "디폼",	sub_tilte: "어글리 푸드 리퍼브 브랜드",	text: "어글리 푸드로 푸드 리퍼브를 지향하는 친환경 브랜드 <디폼 >은 Different+Form의 합성어이다. 브랜드 슬로건은 '틀림 없 는 다름'으로 어글리 푸드에 대한 고정관념과 미적 기준을 바 꾸겠다는 뜻이 담겨있다. <디폼>은 생산자와 소비자 그리고 자연이 함께 살아가는 사회를 위해 기존의 시장 유통 구조를 개선했다. 또한 어글리 푸드가 생소한 소비자들에게 다가가기 위해 브랜드 스토어를 오픈했다. 이곳에서는 어글리 푸드를 직 접 보고 구매할 수 있으며 어글리 푸드를 활용하여 만든 간단 한 음식을 먹어볼 수 있다. 소비자는 브랜드를 통해 폐기 농산 물에 대해 다시 한 번 생각해보는 기회를 가진다.", team_order : 1
}


function addDate() {
  const target = doc(db, "projects_main", docData.name);
  setDoc(target, docData);
}

btn.onclick = () => {
  addDate();
  console.log(docData);
};
