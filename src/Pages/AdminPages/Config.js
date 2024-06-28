// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKgD0xuWACpezjWPfpWLN0xA9OW0pTSRY",
  authDomain: "form-f623f.firebaseapp.com",
  databaseURL: "https://form-f623f-default-rtdb.firebaseio.com",
  projectId: "form-f623f",
  storageBucket: "form-f623f.appspot.com",
  messagingSenderId: "948191028233",
  appId: "1:948191028233:web:d1d41ff91694c1aa0b44d8"
};


const app = initializeApp(firebaseConfig);
export const imagdb = getStorage(app)