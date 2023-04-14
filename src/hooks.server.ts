import { getCustomClaims, verifySessionCookie } from '$lib/firebase/admin/helper';
import { admin, initializeAdminApp } from '$lib/firebase/admin/initialize';
import { auth } from '$lib/firebase/client/initialize';
import uiStore from '$lib/stores/uiStore';
import type { Handle } from '@sveltejs/kit'

import { signInWithCustomToken } from 'firebase/auth';

export const handle:Handle = (async ({event, resolve})=>{

    console.log("hook loaded...");
    const cookies  = event.cookies;
    const session = cookies.get("session")

    event.locals.user =null;
    event.locals.claims ={
        admin: false,
        dashboard: false,
    };
 
    initializeAdminApp(admin);

    if(session) {
        try {
            const decodedIdToken = await verifySessionCookie (session);

            const customClaims = await getCustomClaims(decodedIdToken.uid);
            
            if(customClaims) {
                event.locals.claims ={
                    admin: customClaims.admin || false,
                    dashboard: customClaims.dashboard || false,
                };
            }
            event.locals.user = decodedIdToken;
        } 
        catch (error) 
        {
            console.error("firebase verifyCookieSession failed", session, error);
        }
    }
    return await resolve(event);
})