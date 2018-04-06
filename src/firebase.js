import { initializeApp } from 'firebase';
import 'firebase/firestore';

const config = {
  apiKey: "AIzaSyCV6noKA_N9XG6LjDtbgXyyrIrFImKDHzg",
  authDomain: "react-password-manager-4e42e.firebaseapp.com",
  databaseURL: "https://react-password-manager-4e42e.firebaseio.com",
  projectId: "react-password-manager-4e42e",
  storageBucket: "",
  messagingSenderId: "576087410826"
};

const app = initializeApp(config);

export const db = app.firestore()
export const User = db.collection('User')