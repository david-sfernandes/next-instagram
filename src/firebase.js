import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyArZOfc2nNojyvcNY3I19GHU99-7OKC874",
  authDomain: "next-insta-clone-35bdd.firebaseapp.com",
  projectId: "next-insta-clone-35bdd",
  storageBucket: "next-insta-clone-35bdd.appspot.com",
  messagingSenderId: "936547756838",
  appId: "1:936547756838:web:1eb40ac4c57942708b2fe7",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore();
export const storage = getStorage();