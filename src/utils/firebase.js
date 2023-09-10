import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "next-js-flux-blog-app.firebaseapp.com",
  projectId: "next-js-flux-blog-app",
  storageBucket: "next-js-flux-blog-app.appspot.com",
  messagingSenderId: "914204394594",
  appId: "1:914204394594:web:61f6aa5129432e2c93bd3b",
};

export const app = initializeApp(firebaseConfig);
