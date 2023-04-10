import { createSessionCookie, getCustomClaims, getUserFromToken, verifyIdToken } from '$lib/firebase/admin/helper';
import type { SessionCookieOptions } from "firebase-admin/lib/auth/base-auth";
import type {User} from '$lib/types/user';
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

const MAXAGE = 60 * 60 * 24 * 5
const EXPIRESIN = 60 * 60 * 24 * 5 * 1000;

const sessionCookieOptions:SessionCookieOptions = {
    expiresIn: EXPIRESIN
};

const options = {
    path:'/',
    maxAge: MAXAGE,
    httpOnly: true,
    secure: false
};

export const POST = (async ({ request, cookies }) => {
    
    const data = await request.json();

    const { idToken } = data;

    const decodedIdToken = await verifyIdToken(idToken);

    // await setCustomUserClaims(decodedIdToken.uid);

    const customClaims = await getCustomClaims(decodedIdToken.uid)

    console.log("+server - user login - customClaims: ", customClaims)

    const sessionCookie = await createSessionCookie(idToken, sessionCookieOptions);

    cookies.set('session', sessionCookie, options);

    const user:User | null = getUserFromToken(decodedIdToken);

    return json({user:user})

}) satisfies RequestHandler


export const DELETE = (async ({ request, cookies }) => {
    
    console.log("delete session...");

    cookies.delete("session");
    cookies.set("session", "", {
        httpOnly: true,
        path: '/',
        maxAge: 0
      })

    console.log("session deletet...");


    return json({"success":true})

}) satisfies RequestHandler
