
import type { Actions, PageServerLoad} from "./$types";
import { createUser, createCustomToken, setCustomUserClaims } from "$lib/firebase/admin/helper";
import type { FirebaseCreateUserResponse } from "$lib/types/firebaseCreateUserResponse";
import type { Claims } from "$lib/types/claims";
import { admin, initializeAdminApp } from "$lib/firebase/admin/initialize";

export const load = (async({cookies, request, locals, params, url}) => {
    return {
        user: locals.user,
        claims: locals.claims
    };
}) satisfies PageServerLoad;

export const actions: Actions = {
    signup: async ({cookies, request}) => {
        const data = await request.formData();

        // initializeAdminApp(admin);

        const response:FirebaseCreateUserResponse = await createUser(data);

        if(response.uid != null) {

            await setCustomUserClaims(response.uid);

            response.customToken = await createCustomToken(response.uid);
            
        }
       
        return response;
    },
    // login: async ({ cookies, request })=> {
    //     console.log("login")

    //     const token = request.body;
    //     console.log("request.body",token)
    //     return {}
    // }
} satisfies Actions;