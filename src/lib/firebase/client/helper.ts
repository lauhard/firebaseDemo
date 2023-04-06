import type { Credentials } from "$lib/types/credentials";
import { signInWithCustomToken as signInWithToken, signInWithEmailAndPassword as signIn } from "firebase/auth";
import { auth } from "./initialize";

export const signInWithCustomToken  = async (customToken:string)=> {
    const userRecord = await signInWithToken(auth, customToken);
    return userRecord;
}

export const signInWithEmailAndPassword = async (credentials: Credentials) => {
    return await signIn( 
        auth, 
        credentials.email, 
        credentials.password  
    );
}
