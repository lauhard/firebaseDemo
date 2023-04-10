import { browser } from '$app/environment';
import { PRIVATE_FIREBASE_ADMIN } from '$env/static/private';
import admin, { app, appCheck } from 'firebase-admin';
import { initializeApp } from 'firebase-admin/app';
import { getApps, getApp } from 'firebase/app';

const initializeAdminApp= (admin: { credential: { cert: (arg0: any) => any; }; })=> {
    console.log("check for firebase admin app...");
    try {
        if(!browser) {
            if (
                appCheck().app.name !== '[DEFAULT]'
            ){
                console.log("trying to initialize firebase admin app...");
    
                initializeApp({
                    credential: admin.credential.cert(JSON.parse(PRIVATE_FIREBASE_ADMIN)),
                    databaseURL: `https://${JSON.parse(PRIVATE_FIREBASE_ADMIN).project_id}.firebaseio.com` 
                });
                console.log("app initialized...");

            } 
        }
    } catch (error) {
        console.log("trying to initialize firebase admin app...");
    
        initializeApp({
            credential: admin.credential.cert(JSON.parse(PRIVATE_FIREBASE_ADMIN)),
            databaseURL: `https://${JSON.parse(PRIVATE_FIREBASE_ADMIN).project_id}.firebaseio.com` 
        });
        console.log("app initialized...");
        // console.log("firebase admin init error:",error);
    }
    
}

export {
    initializeAdminApp,
    admin
}
