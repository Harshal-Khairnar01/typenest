
import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: "cms-h-2d3ce.firebaseapp.com",
  projectId: "cms-h-2d3ce",
  storageBucket: "cms-h-2d3ce.firebasestorage.app",
  messagingSenderId: process.env.FB_MSG_SENDER_ID,
  appId: process.env.FB_APP_ID,
};


const app = initializeApp(firebaseConfig);
const storage=getStorage(app);

export {storage}
