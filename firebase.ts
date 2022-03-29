// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCWvhEl4Ub32eAd65ixhZtN_6u8vB8boH4',
  authDomain: 'netflix-clone-62669.firebaseapp.com',
  databaseURL: 'https://netflix-clone-62669.firebaseio.com',
  projectId: 'netflix-clone-62669',
  storageBucket: 'netflix-clone-62669.appspot.com',
  messagingSenderId: '140980383856',
  appId: '1:140980383856:web:d4a87f767136a5b50cc4b5',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
