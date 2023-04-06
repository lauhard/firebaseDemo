import { getCustomClaims, verifySessionCookie } from '$lib/firebase/admin/helper';
import { admin, initializeAdminApp } from '$lib/firebase/admin/initialize';
import type { Handle } from '@sveltejs/kit'

export const handle:Handle = (async ({event, resolve})=>{

    console.log("hook loaded...");
 
    const cookies  = event.cookies;
    const session = cookies.get("session")

    event.locals.user =null;
    event.locals.claims ={
        admin: false,
        dashboard: false,
    };
    try {
        initializeAdminApp(admin);
    } catch (error) {
        console.log("firebase initalize error", admin);
    }

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