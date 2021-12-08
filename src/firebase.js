import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/auth'
import 'dotenv'

// firebaseConfig here


const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;