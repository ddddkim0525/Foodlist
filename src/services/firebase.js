import firebase from "firebase";
const config = {
  apiKey: "AIzaSyAlq_ieoLxtqt0l3JGHjlT7zeR7AsN-CJk",
  authDomain: "foodlist-43af7.firebaseapp.com",
  databaseURL: "https://foodlist-43af7-default-rtdb.firebaseio.com"
};
firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();