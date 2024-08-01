// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyCMIqoBLpkY_q3qmATawN84uwAqYciyVF4",
  authDomain: "test-app-1bfad.firebaseapp.com",
  projectId: "test-app-1bfad",
  storageBucket: "test-app-1bfad.appspot.com",
  messagingSenderId: "787846254119",
  appId: "1:787846254119:web:78a15f5b87392472218802"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });


export default app;