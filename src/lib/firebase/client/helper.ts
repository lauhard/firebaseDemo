import type { Credentials } from "$lib/types/credentials";
import { signInWithCustomToken as signInWithToken, signInWithEmailAndPassword as signIn, signOut, type UserCredential } from "firebase/auth";
import { auth } from "./initialize";

export const signInWithCustomToken  = async (customToken:string)=> {
    const userRecord = await signInWithToken(auth, customToken);
    return userRecord;
}

export const signInWithEmailAndPassword = async (credentials: Credentials) => {
    try {
        const user:UserCredential = await signIn( 
            auth, 
            credentials.email, 
            credentials.password  
        );
        return {
            userCredentials:user,
            error:null
        }
    } catch (error:any) {
        const code:string = error.code;
        return {
            userCredentials:null,
            error: dictionary[code]
        }
    }
}

export const logout = async () => {
    try {
        await signOut(auth)
        
    } catch (error) {
        console.log("logout failed: ",error)
    }
}

const dictionary = {
    "auth/email-already-in-use": {
        field: "email",
        error: "Email already in use."
    },
    "auth/weak-password": {
        field: "password",
        error: "The password must be a string with at least 6 characters."
    },
    "auth/internal-error": {
        field: "",
        error: "Error, signup failed."
    },
    "auth/user-not-found": {
        field: "password",
        error: "User not found."
    },
    "auth/wrong-password": {
        field: "password",
        error: "Wrong password."
    },
    "auth/too-many-requests": {
        field: "password",
        error: "Too many logins, the user got temporarly disabled."
    }
}
