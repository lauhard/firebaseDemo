import type { Claims } from "$lib/types/claims";
import type { SessionCookieOptions } from "firebase-admin/lib/auth/base-auth";
import type { DecodedIdToken } from "firebase-admin/lib/auth/token-verifier";
import type { User } from "$lib/types/user";
import { admin } from "./initialize";
import { getCredentialsFromFormData, getDisplayNameFromFormData } from "$lib/utils/shared";
import type { UserRecord } from "$lib/types/userRecord";


export const createUser = async (data:FormData) => {
    let response:UserRecord;
    try {
        const credentials = getCredentialsFromFormData(data);

        const displayName = getDisplayNameFromFormData(data);

        const record = await admin.auth()
            .createUser({
                email: credentials.email,
                password: credentials.password,
                displayName: displayName,
                disabled: false,
            });
        response={
            uid:record.uid,
            created: true,
            errorInfo:null
        }
    } catch (error: any) {
        response={
            uid: null,
            created: false,
            errorInfo: error.errorInfo.message
        }
    } 
    
    return response;  
}

export const createCustomToken = async (uid:string, claims?:Claims) => {
    if(claims)
        return await admin.auth().createCustomToken(uid, claims)
    else
        return await admin.auth().createCustomToken(uid)
}

export const verifyIdToken = async (idToken:string) => {
    return await admin.auth().verifyIdToken(idToken, true);
}

export const createSessionCookie = async (idToken:string, options:SessionCookieOptions)=>{
    return await admin.auth().createSessionCookie(idToken, options);
}

export const verifySessionCookie = async (session:string) => {
    return await admin.auth().verifySessionCookie(session);
}

export const setCustomUserClaims = async (uid:string)=> {
    await admin.auth().setCustomUserClaims(uid, {admin:false, dashboard:true})
}

export const getCustomClaims = async (uid:string) => {
    const userRecord = await admin.auth().getUser(uid);
    return userRecord.customClaims;
}

export const getUserFromToken = (decodedIdToken: DecodedIdToken)=>{
    if(decodedIdToken === null) return null
    const { email, name, uid } = decodedIdToken;
    const user:User = {
        displayName: name,
        email: email,
        uid: uid
    };
    return user;
}

