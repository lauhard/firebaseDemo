import { browser } from '$app/environment';
import { PRIVATE_FIREBASE_ADMIN } from '$env/static/private';
import admin from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getApps, getApp } from 'firebase/app';

const initializeAdminApp= (admin: { credential: { cert: (arg0: any) => any; }; })=> {
    if(!browser) {
        if (!getApps().length){
            initializeApp({
                credential: admin.credential.cert(JSON.parse(PRIVATE_FIREBASE_ADMIN)),
                databaseURL: `https://${JSON.parse(PRIVATE_FIREBASE_ADMIN).project_id}.firebaseio.com` 
            });
        } 
    }
}

export {
    initializeAdminApp,
    admin
}
