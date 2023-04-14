import { signInWithEmailAndPassword } from "$lib/firebase/client/helper";
import { auth } from "$lib/firebase/client/initialize";
import type { Credentials } from "$lib/types/credentials";
import { getCredentialsFromFormData } from "$lib/utils/shared";
import type { UserCredential } from "firebase/auth";
import type { Actions, PageServerLoad} from "./$types";
import { createSessionCookie, getUserFromToken, verifyIdToken } from "$lib/firebase/admin/helper";
import type { SessionCookieOptions } from "firebase-admin/lib/auth/base-auth";
import type { User } from "$lib/types/user";
import type { Claims } from "$lib/types/claims";
import uiStore from "$lib/stores/uiStore";

export const load = (async({cookies, request, locals, params, url})=> {
    return {
        user: locals.user,
        claims: locals.claims
    };
}) satisfies PageServerLoad;

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

interface LoginActionResult {
    success: boolean,
    user: User | null,
    error: string,
    claims?: Claims,
}

export const actions = {
    login: async ({ request, cookies }): Promise<LoginActionResult> => {
        const data = await request.formData();
        const credentials: Credentials = getCredentialsFromFormData(data);
        const { userCredentials, error } = await signInWithEmailAndPassword(credentials);
        const actionResult:LoginActionResult = {
            success:false,
            user: null,
            error: error?.error
        }
        if( error == null && userCredentials){
            const idToken = await userCredentials?.user.getIdToken();
            const decodedIdToken = await verifyIdToken(idToken);
            const sessionCookie = await createSessionCookie(idToken, sessionCookieOptions);
            cookies.set('session', sessionCookie, options);
            const user = getUserFromToken(decodedIdToken);
            // const { claims } = await userCredentials.user.getIdTokenResult();
            actionResult.user = user
            actionResult.success = true
        } else {
            actionResult.success = false
        } 
        return actionResult
    }
} satisfies Actions