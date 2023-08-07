import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAzY93VkNl_VXmKXDn_mIVVYU3y5EPBFxs",
  authDomain: "social-media-app-ae613.firebaseapp.com",
  projectId: "social-media-app-ae613",
  storageBucket: "social-media-app-ae613.appspot.com",
  messagingSenderId: "748952599915",
  appId: "1:748952599915:web:52920ba95aa0e8be1b202e"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);