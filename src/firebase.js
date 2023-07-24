import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUpIKtN8oy7O8eCYoIx73LVwPEdy3a15c",
  authDomain: "video-yt-clone.firebaseapp.com",
  projectId: "video-yt-clone",
  storageBucket: "video-yt-clone.appspot.com",
  messagingSenderId: "231069348619",
  appId: "1:231069348619:web:94a556e59be49ed9e9a80e"

};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;
