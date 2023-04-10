import { PUBLIC_FIREBASE_CLIENT } from "$env/static/public";
import { initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";


const app:FirebaseApp = initializeApp(JSON.parse(PUBLIC_FIREBASE_CLIENT), "CLIENT");
const auth:Auth = getAuth(app);

// Initialize Firebase
// const app = initializeApp(JSON.parse(PUBLIC_FIREBASE_CLIENT), "CLIENT");
/* const analytics = getAnalytics(app); */


// setPersistence(auth, inMemoryPersistence);

export {
    app,
    auth,
}