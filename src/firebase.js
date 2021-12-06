import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'dotenv'

// firebaseConfig here

const firebaseConfig = {
  apiKey: "AIzaSyAwcMnZKeqSF_qpVGq4hCgUFRM8RSP75rM",
  authDomain: "kollab-be59f.firebaseapp.com",
  projectId: "kollab-be59f",
  storageBucket: "kollab-be59f.appspot.com",
  messagingSenderId: "648973444981",
  appId: "1:648973444981:web:3da9f308d2d12306a1153c",
  measurementId: "G-1DF6N026MT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;