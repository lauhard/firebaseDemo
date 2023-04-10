
import { auth } from "$lib/firebase/client/initialize";
import { getAuth, onAuthStateChanged, onIdTokenChanged } from "firebase/auth";
import { readable, type Subscriber } from "svelte/store";


// const auth = getAuth(app);

export const user = readable<any>(
    null,
    (set: Subscriber<any>) => onIdTokenChanged(auth, (user) => set(user))
)

export  const  authUser = readable<any>(
    null,
    (set: Subscriber<any>) => onAuthStateChanged(auth, (user) => set(user))
)