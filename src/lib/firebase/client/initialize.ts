import { initializeApp } from "firebase/app";
import { getAuth, inMemoryPersistence, setPersistence } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyBFzo5gpUhInpP0ixIobiD6BN9gWc_GQLQ",
    authDomain: "authentication-fbf26.firebaseapp.com",
    databaseURL: "https://authentication-fbf26.firebaseio.com",
    projectId: "authentication-fbf26",
    storageBucket: "authentication-fbf26.appspot.com",
    messagingSenderId: "466129166038",
    appId: "1:466129166038:web:54d59482b93efd7cabb377",
    measurementId: "G-FWQR4NDLTX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig, "CLIENT");
/* const analytics = getAnalytics(app); */
const auth = getAuth(app);

// setPersistence(auth, inMemoryPersistence);

export {
  app,
  auth,
}